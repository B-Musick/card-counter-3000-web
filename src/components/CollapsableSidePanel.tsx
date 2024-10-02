import { useState } from "react";
import Button from "./Button";
import { Box, Modal } from "@mui/material";

const CollapsableSidePanel = ({children, toggleButton, classes}) => {
    const [showPanel, setShowPanel] = useState(true);
    const [showModal, setShowModal] = useState(false);

    let strategyChartModal = <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[90%]">
            <div className="flex w-full h-full bg-white rounded-xl p-4 z">
                <div className="w-full h-full flex flex-col justify-evenly">
                   {children}
                </div>
            </div>
        </Box>
    </Modal>

    return (
        <>
            <Button onClick={()=>setShowPanel(!showPanel)} className="hidden fixed right-0 lg:flex hover:brightness-125 !w-10 !h-10 shrink-0">
                {toggleButton}
            </Button>
            <Button onClick={() => setShowModal(!showModal)} className="lg:hidden fixed right-0 lg:flex hover:brightness-125 !w-10 !h-10 shrink-0">
                {toggleButton}
            </Button>
            {showPanel && <section className={`hidden lg:block flex flex-col h-full w-1/2 justify-between`}>
                {children}
            </section>}
            {showModal && strategyChartModal}
        </>
    )
}

export default CollapsableSidePanel;