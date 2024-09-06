import { it, expect, describe } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import Stats from '../../components/Stats';
import StatsTable from '../../components/StatsTable';

describe('Stats', () => {
    const data = [
        { 'created_at': 1715104860865, score: 5, percent: 0.5 },
        { 'created_at': 1715104860865, score: 7, percent: 0.7 },
        { 'created_at': 1715104860865, score: 8, percent: 0.8 },
    ]

    beforeEach(() => {
        render(<StatsTable 
            cols={['created_at', 'score', 'percent']} 
            rows={data} 
            hiddenCols={[]} 
            sortable={[]} 
                onRowClick={function (): {} {
            throw new Error('Function not implemented.');
        } } rowConditionals={undefined}/>)
    })

    afterEach(() => {
        cleanup();
    });

    it('should render table', () => {
        expect(screen.getAllByRole('row')[0]).toBeInTheDocument()
    })
})