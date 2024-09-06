import Stats from "../components/Stats";
import {flash} from "../../db.json"
import BasicStrategyChart from "../components/BasicStrategyChart";
import { BasicStrategyChartType } from "../lib/enums";

function FlashStats() {
    const columns = ['score', 'percent', 'created_at'];

    const flashModalComponent = (row) => {
        return <div>
            <BasicStrategyChart chartTitle="Softs" data={row.results.softs} type={BasicStrategyChartType.Stats} />
            <BasicStrategyChart chartTitle="Hards" data={row.results.hards} type={BasicStrategyChartType.Stats} />
            <BasicStrategyChart chartTitle="Splits" data={row.results.splits} type={BasicStrategyChartType.Stats} />
        </div>
    }

    return (
        <>
            <Stats data={flash} columns={columns} modalComponent={flashModalComponent}/>
        </>        
    )
}

export default FlashStats;