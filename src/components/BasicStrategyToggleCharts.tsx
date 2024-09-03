import BasicStrategyChart from "./BasicStrategyChart"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";
import { soft, hard, splits } from "../lib/constants";

const BasicStrategyToggleCharts = () =>{ 
    const [chartType, setChartType] = useState('basic')

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setChartType(newAlignment);
    };

    return (
        <div className="m-10 flex flex-col justify-evenly h-full">
            <ToggleButtonGroup
                className="justify-center"
                color="primary"
                value={chartType}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton value="basic" className="w-1/2">Basic</ToggleButton>
                <ToggleButton value="deviations" className="w-1/2">Deviations</ToggleButton>
            </ToggleButtonGroup>

            <BasicStrategyChart type={chartType} data={soft} />
            <BasicStrategyChart type={chartType} data={hard} />
            <BasicStrategyChart type={chartType} data={splits} />
        </div>
    )
}

export default BasicStrategyToggleCharts;