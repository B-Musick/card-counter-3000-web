import { Box, Modal, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { StatisticsView } from "../lib/enums";
import StatsTable from "./StatsTable";

function Stats({data, columns}){
    const [viewShown, setViewShown] = useState<StatisticsView>(StatisticsView.Table);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        view: StatisticsView,
    ) => {
        setViewShown(view);
    };
    
    let showTable = (row) => {
        // setSoftTable(useChart(clone(row.results.softs), false, 'stats')[0])
        // setHardTable(useChart(clone(row.results.hards), true, 'stats')[0])
        // setSplitTable(useChart(clone(row.results.splits), false, 'stats')[0])
        setModalOpen(true);
    }
    
    let rows = data.map((data, index) => {
        return { ...data, score: `${data.score}/${data.total}`, created_at: new Date(data.created_at).toLocaleDateString(), percent: Number((data.percent).toFixed(2)) }
    })

    let statsTable = rows && viewShown == StatisticsView.Table &&
        <StatsTable
            cols={columns}
            rows={rows}
            hiddenCols={['results', 'total', 'id', 'updated_at']}
            sortable={['created_at', 'percent']} 
            onRowClick={(row)=>showTable(row)} rowConditionals={undefined}        />
    
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

            <Modal
                open={modalOpen}
                onClose={()=>setModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" >
                    <div className="bg-white rounded-xl">hi modal</div>
                </Box>
            </Modal>
        </>
    )
}

export default Stats;