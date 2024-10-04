import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { convertGameActionToString } from "../lib/helpers";
import { BasicStrategyChartCell } from "../lib/types";
import { tableCellClasses } from "@mui/material/TableCell";
import { BasicStrategyChartType } from "../lib/enums";

interface BasicStrategyChartProps {
    data: Array<BasicStrategyChartCell>,
    type: BasicStrategyChartType,
    chartTitle?: string,
    reversed?: boolean
}

const BasicStrategy: React.FC<BasicStrategyChartProps> = ({data, type, chartTitle, reversed}) => {
    const dealerFaceCards = [2,3,4,5,6,7,8,9,10,11]

    const cellColor = {
        'S': 'bg-amber-300',
        'D': 'bg-sky-500',
        'Ds': 'bg-sky-400',
        'H': 'bg-yellow-100',
        'Y': 'bg-green-500'
    }

    const statCellColor = {
        0: 'bg-red-200',
        1: 'bg-emerald-500'
    }

    const isDeviation = (cellData: BasicStrategyChartCell) => type == BasicStrategyChartType.Deviation && cellData.deviation != ''

    const isStats = (cellData: BasicStrategyChartCell) => type == BasicStrategyChartType.Stats
    
    const getCellColor = (cellData, actionString) => {
        if (isDeviation(cellData)) return 'bg-red-200' 
        else if(isStats(cellData)){
            return cellData.stats != null ? statCellColor[cellData.stats] : ''
        } else {
            return cellColor[actionString]
        }
    }

    let dataKeys = reversed ? Object.keys(data).reverse() : Object.keys(data);

    const tableBody = dataKeys.map((playerHand:string)=>{
        return (
            <TableRow>
                <TableCell className="bg-gray-100">{playerHand}</TableCell>
                {
                    data[playerHand].map((cell:BasicStrategyChartCell)=>{
                        let actionString = isDeviation(cell) ? cell.deviation : (isStats(cell) && cell.stats == null) ? '': convertGameActionToString(cell.action);

                        return <TableCell className={getCellColor(cell, actionString)}>
                            { actionString }
                        </TableCell>
                    })
                }
            </TableRow>
        )
    })

    return (
        <TableContainer className="grow-1 min-h-0">
            <h3 className="w-full bg-gray-600 text-center text-white border-4 text-[1.4vh] border-b-2 border-black font-bold">{chartTitle}</h3>
            <Table
                sx={{
                    [`& .${tableCellClasses.root}`]: {
                        width: '5%',
                        height: '1%s',
                        border: "solid black 2px",
                        textAlign: "center",
                        margin: '0px',
                        fontSize: '1.4vh',
                        padding: "0px",
                    }
                }}
            >
                <TableHead sx={{height: "!10px", padding: "!0px"}}>
                    <TableRow className="bg-gray-300">
                        <TableCell></TableCell>
                        {dealerFaceCards.map(card => <TableCell>{card}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableBody}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BasicStrategy;