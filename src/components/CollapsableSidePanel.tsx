import { useState } from "react";
import Button from "./Button";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";

const CollapsableSidePanel = ({children, toggleButton}) => {
    const [showPanel, setShowPanel] = useState(true);

    return (
        <>
            <Button onClick={()=>setShowPanel(!showPanel)} className="xs:flex hover:brightness-125 !w-10 !h-10 shrink-0">
                {toggleButton}
            </Button>
            {showPanel && <section className="h-full w-1/2 bg-emerald-200 xs:block z-[-10]">
                {children}
            </section>}
        </>
    )
}

export default CollapsableSidePanel;