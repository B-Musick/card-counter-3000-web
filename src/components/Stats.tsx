import { Box, IconButton, Modal, ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";
import { useState } from "react";
import { StatisticsView } from "../lib/enums";
import StatsTable from "./StatsTable";
import Button from "./Button";
import useLocalStorage from "../hooks/useLocalStorage";
import { MdDeleteSweep } from "react-icons/md";

function Stats({chartComponent, data, columns, modalComponent, storageKey}){
    const [viewShown, setViewShown] = useState<StatisticsView>(StatisticsView.Table);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [modalElements, setModalElements] = useState()
    const [tableData, setTableData, clearTableData] = useLocalStorage(storageKey)

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        view: StatisticsView,
    ) => {
        if(view != null) setViewShown(view);
    };
    
    let showTable = (row) => {
        setModalElements(modalComponent(row))
        setModalOpen(true);
    }
    
    const getRows = () => {
        let rowData = data && data.length > 0 ? data : tableData

        return rowData.map((rowItem, index) => {
            return { ...rowItem, score: `${rowItem.score}/${rowItem.total}`, created_at: new Date(rowItem.created_at).toLocaleDateString(), percent: Number((rowItem.score / rowItem.total).toFixed(2)) }
        })
    }

    let rows = getRows()

    let statsTable = rows && viewShown == StatisticsView.Table &&
        <StatsTable
            cols={columns}
            rows={rows}
            hiddenCols={['results', 'total', 'id', 'updated_at']}
            sortable={['created_at', 'percent']} 
            onRowClick={(row)=>showTable(row)} rowConditionals={undefined} />

    return (
        <>
            <div className="flex justify-between px-10 mt-10">
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
                <Tooltip title="Delete All">
                    <IconButton>
                        <Button onClick={() => clearTableData(storageKey)} className="text-red-500" rounded><MdDeleteSweep /></Button>
                    </IconButton>
                </Tooltip>
            </div>

            {statsTable}
            {viewShown == StatisticsView.Chart && (data ? chartComponent(data) : tableData.length > 0 ? chartComponent(tableData) : <div className="text-center mt-6">No chart data to display</div>)}
            
            <Modal
                open={modalOpen}
                onClose={()=>setModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" >
                    <div className="w-full h-full bg-white rounded-xl p-4">
                        {modalElements}
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default Stats;