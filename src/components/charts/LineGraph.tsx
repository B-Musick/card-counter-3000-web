import { Line } from "react-chartjs-2";
import { 
    Chart as ChartJS, 
    LinearScale, 
    LineElement, 
    CategoryScale, 
    PointElement, 
    Tooltip, 
    Legend, 
    Title 
} from "chart.js";

ChartJS.register(
    LinearScale, 
    LineElement, 
    CategoryScale, 
    PointElement, 
    Tooltip, 
    Legend, 
    Title 
)

export const LineGraph = ({options, data}) => {
    return (
        <div className="h-[100%] flex justify-center items-start">
            <Line className="!w-[80%]" options={options} data={data}/>
        </div>
    )
}