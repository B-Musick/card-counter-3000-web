import { it, expect, describe } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import CollapsableSidePanel from '../../components/CollapsableSidePanel'
import { CiCircleCheck } from 'react-icons/ci'

describe('CollapsableSidePanel', () => {
    afterEach(() => {
        cleanup();
    });
    it('should render side panel when initially called', ()=>{
        render(<CollapsableSidePanel toggleButton={<CiCircleCheck />}><div>Testing Side Panel</div></CollapsableSidePanel>)

        expect(screen.getByText('Testing Side Panel')).toBeInTheDocument()
    })

    it('should collapse panel when the arrow button pressed', async ()=>{
        render(<CollapsableSidePanel toggleButton={<CiCircleCheck />}><div>Testing Side Panel</div></CollapsableSidePanel>)

        let collapseButton = screen.getByRole('button');

        const user = userEvent.setup();
        await user.click(collapseButton);

        expect(screen.queryByText('Testing Side Panel')).not.toBeInTheDocument()
    })
})