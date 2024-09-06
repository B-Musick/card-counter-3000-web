import Stats from "../components/Stats";
import {flash} from "../../db.json"
import BasicStrategyChart from "../components/BasicStrategyChart";
import { BasicStrategyChartType } from "../lib/enums";
import Heatmap from "../components/charts/Heatmap";
import { convertGameActionToString } from "../lib/helpers";

function FlashStats() {
    const columns = ['score', 'percent', 'created_at'];

    const getHeatmapData = (stats, dataArray, labels) => {
        labels.forEach((label, index) => {
            stats[label].forEach((cell, statIndex) => {
                if (cell.stats) dataArray[index][statIndex] += cell.stats
            })
        })

        return dataArray;
    }

    const getHeatmapScope = (data, tableType) => {
        // This only works for now, will change it so it only access the last 10 rounds in the array
        // Will have one where user can view full history or select how many rounds to go back and see data
        let heatmapScope = { data: { cellText: getCellText(data[0].results[tableType]), cellTotals: {} }, options: {} };
        let labels, dataArray;
        // l = getCellText(data[0].results[tableType]);
        // console.log("tableText", tableText)
        data.forEach((scoreObj, index) => {
            let table = scoreObj.results[tableType];

            if (index == 0) {
                labels = Object.keys(table)
                dataArray = Array.from(Array(labels.length), _ => Array(table[labels[0]].length).fill(0))
            }

            heatmapScope.data.cellTotals = getHeatmapData(table, dataArray, labels);
        })

        heatmapScope.options = {
            title: tableType,
            scales: {
                x: { ticks: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A"] },
                y: { ticks: labels }
            }
        }

        return heatmapScope;
    }

    const getCellText = (data) => {
        let newArray = []
        Object.keys(data).forEach((row, rowIndex) => {
            newArray[rowIndex] = data[row].map(cell => convertGameActionToString(cell.action))
        })

        return newArray;
    }

    let heatmap = (data) => {
        let hardScope = getHeatmapScope(data, "hards")
        let softScope = getHeatmapScope(data, "softs")
        let splitsScope = getHeatmapScope(data, "splits")

        return <div>
            <Heatmap textData={hardScope?.data.cellText} data={hardScope.data.cellTotals} options={hardScope.options} />
            <Heatmap textData={softScope?.data.cellText} data={softScope.data.cellTotals} options={softScope.options} />
            <Heatmap textData={splitsScope?.data.cellText} data={splitsScope.data.cellTotals} options={splitsScope.options} />
        </div>
    };

    const flashModalComponent = (row) => {
        return <div>
            <BasicStrategyChart chartTitle="Softs" data={row.results.softs} type={BasicStrategyChartType.Stats} />
            <BasicStrategyChart chartTitle="Hards" data={row.results.hards} type={BasicStrategyChartType.Stats} />
            <BasicStrategyChart chartTitle="Splits" data={row.results.splits} type={BasicStrategyChartType.Stats} />
        </div>
    }

    return (
        <>
            <Stats data={flash} columns={columns} chartComponent={heatmap} modalComponent={flashModalComponent} />
        </>        
    )
}

export default FlashStats;