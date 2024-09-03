import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { convertGameActionToString } from "../lib/helpers";
import { BasicStrategyChartCell } from "../lib/types";
import { tableCellClasses } from "@mui/material/TableCell";

interface BasicStrategyChartProps {
    data: Array<BasicStrategyChartCell>,
    type: string
}

const BasicStrategy: React.FC<BasicStrategyChartProps> = ({data, type}) => {
    const dealerFaceCards = [2,3,4,5,6,7,8,9,10,11]

    const cellColor = {
        'S': 'bg-amber-300',
        'D': 'bg-sky-500',
        'Ds': 'bg-sky-400',
        'H': 'bg-yellow-100',
        'Y': 'bg-green-500'
    }

    const isDeviation = (cellData: BasicStrategyChartCell) => type == 'deviations' && cellData.deviation != ''
     

    const tableBody = Object.keys(data).map((playerHand:string)=>{
        return (
            <TableRow>
                <TableCell className="bg-gray-100">{playerHand}</TableCell>
                {
                    data[playerHand].map((cell:BasicStrategyChartCell)=>{
                        let actionString = isDeviation(cell) ? cell.deviation : convertGameActionToString(cell.action);

                        return <TableCell className={isDeviation(cell) ? 'bg-red-200' : cellColor[actionString]}>
                            { actionString }
                        </TableCell>
                    })
                }
            </TableRow>
        )
    })

    return (
        <TableContainer className="mt-2">
            <Table size="small" sx={{
                [`& .${tableCellClasses.root}`]: {
                    width: "5%",
                    border: "solid black 2px",
                    textAlign: "center",
                    padding: "2px"
                }
            }}>
                <TableHead>
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