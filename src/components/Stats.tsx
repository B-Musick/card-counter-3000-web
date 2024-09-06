import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { StatisticsView } from "../lib/enums";
import StatsTable from "./StatsTable";

function Stats({data, columns}){
    const [viewShown, setViewShown] = useState<StatisticsView>(StatisticsView.Table);

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        view: StatisticsView,
    ) => {
        setViewShown(view);
    };
    
    let rows = data.map((data, index) => {
        return { ...data, score: `${data.score}/${data.total}`, created_at: new Date(data.created_at).toLocaleDateString(), percent: Number((data.percent).toFixed(2)) }
    })

    let statsTable = rows && viewShown == StatisticsView.Table &&
        <StatsTable
        cols={columns}
        rows={rows}
        hiddenCols={['results', 'total', 'id', 'updated_at']}
        sortable={['created_at', 'percent']} 
        onRowClick={function (): {} {
            throw new Error("Function not implemented.");
        } } rowConditionals={undefined}        />
    
    return (
        <>
            <ToggleButtonGroup
                className="justify-start w-1/2"
                color="primary"
                value={viewShown}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton value={StatisticsView.Table} className="w-1/2">Table</ToggleButton>
                <ToggleButton value={StatisticsView.Chart} className="w-1/2">Chart</ToggleButton>
            </ToggleButtonGroup>
            {statsTable}
        </>
    )
}

export default Stats;