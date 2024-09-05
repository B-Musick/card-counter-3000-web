import BasicStrategyChart from "./BasicStrategyChart"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";
import { soft, hard, splits } from "../lib/constants";
import usePrint from "../hooks/usePrint";
import { BasicStrategyChartType } from "../lib/enums";

const BasicStrategyToggleCharts = () =>{ 
    const [chartType, setChartType] = useState(BasicStrategyChartType.Action)
    const [printButton, printTable] = usePrint(
        chartType == BasicStrategyChartType.Action ? 'basic_strategy_chart' : 'deviations_chart'
    );

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setChartType(newAlignment);
    };

    return (
        <div className="m-10 flex flex-col justify-evenly h-full">
            <div className="flex justify-between">
                <ToggleButtonGroup
                    className="justify-start w-1/2"
                    color="primary"
                    value={chartType}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                >
                    <ToggleButton value={BasicStrategyChartType.Action} className="w-1/2">Basic</ToggleButton>
                    <ToggleButton value={BasicStrategyChartType.Deviation} className="w-1/2">Deviations</ToggleButton>
                </ToggleButtonGroup>
                {printButton}
            </div>
            <div ref={printTable}>
                <BasicStrategyChart chartTitle="Soft" type={chartType} data={soft} />
                <BasicStrategyChart chartTitle="Hard" type={chartType} data={hard} />
                <BasicStrategyChart chartTitle="Splits" type={chartType} data={splits} />
            </div>
        </div>
    )
}

export default BasicStrategyToggleCharts;