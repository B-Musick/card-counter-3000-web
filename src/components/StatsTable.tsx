import DataTable from 'react-data-table-component';

type StatsTableProps = {
    cols: Array<string>,
    rows: Array<Object>,
    hiddenCols: Array<string>
    sortable: Array<string>,
    onRowClick: () => {},
    rowConditionals: any
}

const StatsTable: React.FC<StatsTableProps> = ({ cols, rows, hiddenCols, sortable, onRowClick, rowConditionals }) => {
    let columns = cols.map((col) => {
        return {
            name: col.toString(),
            selector: row => row[col],
            omit: hiddenCols.includes(col),
            sortable: sortable.includes(col)
        }
    })

    return (
        <DataTable
            columns={columns}
            data={rows}
            onRowClicked={onRowClick}
            conditionalRowStyles={rowConditionals}
        />
    )
}

export default StatsTable;