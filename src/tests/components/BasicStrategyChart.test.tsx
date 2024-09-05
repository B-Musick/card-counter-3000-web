import { it, expect, describe } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import BasicStrategyChart from '../../components/BasicStrategyChart';
import { BasicStrategyChartType } from '../../lib/enums';
import { soft, hard, splits } from '../../lib/constants';
import { clone } from '../../lib/helpers';

describe('BasicStrategyChart', ()=>{
    afterEach(() => {
        cleanup();
    });

    it('should render table element with title', () => {
        render(<BasicStrategyChart chartTitle="test table" data={[]} type={BasicStrategyChartType.Action} />)
        
        expect(screen.getByText('test table')).toBeInTheDocument()
        expect(screen.getByRole('table')).toBeInTheDocument()
    })

    it('should render table with actions listed when type set to Action', ()=>{
        render(<BasicStrategyChart chartTitle="test table" data={soft} type={BasicStrategyChartType.Action} />)
        
        expect(screen.getAllByText('S')[0]).toBeInTheDocument()
        expect(screen.getAllByText('H')[0]).toBeInTheDocument()
        expect(screen.getAllByText('Ds')[0]).toBeInTheDocument()
        expect(screen.getAllByText('D')[0]).toBeInTheDocument()
    })

    it('should render table with deviations listed when type set to Deviation', () => {
        render(<BasicStrategyChart chartTitle="test table" data={hard} type={BasicStrategyChartType.Deviation} />)

        expect(screen.getByText('1+')).toBeInTheDocument()
        expect(screen.getByText('1-')).toBeInTheDocument()
    })

    it('should render table with deviations listed when type set to Deviation', () => {
        render(<BasicStrategyChart chartTitle="test table" data={hard} type={BasicStrategyChartType.Deviation} />)

        expect(screen.getByText('1+')).toBeInTheDocument()
        expect(screen.getByText('1-')).toBeInTheDocument()
    })

    it('should render empty table with stats listed when type set to Stats and be green if stat = 1', () => {
        render(<BasicStrategyChart chartTitle="test table" data={hard} type={BasicStrategyChartType.Stats} />)
        let hardStatTable = clone(hard)
        hardStatTable['17'][0].stats = 1;
        render(<BasicStrategyChart chartTitle="test table" data={hardStatTable} type={BasicStrategyChartType.Stats} />)

        let statTableCell = screen.getByText('S');
        expect(statTableCell).toBeInTheDocument()
        expect(statTableCell).toHaveClass('bg-emerald-500')
    })

    it('should render empty table with stats listed when type set to Stats and be red if stat = 0', () => {
        render(<BasicStrategyChart chartTitle="test table" data={hard} type={BasicStrategyChartType.Stats} />)
        let hardStatTable = clone(hard)
        hardStatTable['17'][0].stats = 0;
        render(<BasicStrategyChart chartTitle="test table" data={hardStatTable} type={BasicStrategyChartType.Stats} />)

        let statTableCell = screen.getByText('S');
        expect(statTableCell).toBeInTheDocument()
        expect(statTableCell).toHaveClass('bg-red-200')
    })
})