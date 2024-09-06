import { it, expect, describe } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import Stats from '../../components/Stats';
import userEvent from '@testing-library/user-event';

describe('Stats', ()=>{
    const data = [
        { 'created_at': 1715104860865, score: 5, percent: 0.5 },
        { 'created_at': 1715104860865, score: 7, percent: 0.7 },
        { 'created_at': 1715104860865, score: 8, percent: 0.8 },
    ]

    const testModalComponent = (row) => {
        return <div>
            <div>modal</div>
            <div>{parseInt(row.score)*2}</div>
            <div>{row.percent}</div>
        </div>
    }

    beforeEach(()=>{
        render(<Stats data={data} columns={Object.keys(data[0])} modalComponent={testModalComponent} />)
    })

    afterEach(() => {
        cleanup();
    });

    it('should render toggle buttons', () => {
        expect(screen.getByText('Table')).toBeInTheDocument()
        expect(screen.getByText('Chart')).toBeInTheDocument()
    })

    it('should render table when Table button pressed', async ()=>{
        let tableButton = screen.getByText('Table');
        const user = userEvent.setup();
        await user.click(tableButton);
        
        expect(screen.getByRole('table')).toBeInTheDocument()
    })

    it('should render chart when Chart button pressed', async () => {
        // let tableButton = screen.getByText('Chart');
        // const user = userEvent.setup();
        // await user.click(tableButton);

        // expect(screen.getByRole('table')).toBeInTheDocument()
    })

    it('should render modalComponent and row data when row pressed', async () => {
        let row = screen.getAllByRole('cell')[0]
        const user = userEvent.setup();
        await user.click(row);

        expect(screen.getByText('modal')).toBeInTheDocument()
        expect(screen.getByText('10')).toBeInTheDocument()
    })
})