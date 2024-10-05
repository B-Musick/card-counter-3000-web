import Stats from "../components/Stats";
import { Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { LineGraph } from "../components/charts/LineGraph";

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

    let lineChart = (data) => {
        let lineChartData = {
            "labels": data.map((thisData) => new Date(thisData.created_at).toDateString()),
            datasets: [{
                label: "Card Count Test Percentages",
                data: data.map((thisData) => thisData.percent),
                borderColor: "rgb(122,222,122)",
                tension: 0.1
            }]
        }
        
        let lineChartOptions = {
            aspectRatio(ctx) {
                return window.innerWidth > 576 ? 2 : 0.9;
            },
            scales: {
                x: {
                    ticks: {
                        autoSkip: true,
                        maxRotation: 90,
                        callback: function (val, index) {
                            // Hide every 2nd tick label
                            return index % 2 === 0 ? this.getLabelForValue(val) : ''
                        }
                    }
                },
                y: {
                    max: 100, min: 0
                }
            }
        }

        return <LineGraph data={lineChartData} options={lineChartOptions} />
    };

    return (
        <div>
            <Stats 
                columns={columns} 
                chartComponent={lineChart} 
                modalComponent={countModalComponent} 
                storageKey={'countData'}
            />
        </div>        
    )
}

export default CountStats;