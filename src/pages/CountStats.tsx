import Stats from "../components/Stats";
import { Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

function CountStats() {
    const columns = ['score', 'percent', 'created_at'];

    const countModalComponent = (tableRow) => {
        console.log("row",tableRow)
        let table = tableRow.results.map((row)=>{
            return (<TableRow className={row.guess == row.actual ? "bg-emerald-300":"bg-red-500"}>
                <TableCell>{row.guess}</TableCell>
                <TableCell>{row.actual}</TableCell>
            </TableRow>)
        })
        return (<div>
            <TableContainer className="grow-1 min-h-0">
                <Table
                    sx={{
                        [`& .${tableCellClasses.root}`]: {
                            border: "solid black 2px",
                            textAlign: "center",
                            fontSize: '1em',
                        }
                    }}>
                    <TableHead sx={{ height: "!10px", padding: "!0px" }}>
                        <TableRow className="bg-gray-300">
                            <TableCell>Guess</TableCell>
                            <TableCell>Actual</TableCell>
                        </TableRow>
                    </TableHead>
                    {table}
                </Table>
            </TableContainer>
            {/* Display outcome of that column */}
        </div>)
    }

    return (
        <div>
            <Stats 
                columns={columns} 
                // chartComponent={heatmap} 
                modalComponent={countModalComponent} 
                storageKey={'countData'}
            />
        </div>        
    )
}

export default CountStats;