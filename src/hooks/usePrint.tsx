import { IoMdPrint } from "react-icons/io";
import ReactToPrint from "react-to-print";
import Button from "../components/Button";
import { useRef } from "react";

function usePrint(docTitle: string, classes: string) {
    const printTable = useRef();

    let printButton = <ReactToPrint
        trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <Button rounded primary className={classes}><IoMdPrint className="text-[25px]" /></Button>;
        }}
        content={() => printTable.current}
        bodyClass="h-screen flex justify-center items-center"
        documentTitle={docTitle}
    />

    return [printButton, printTable]
}

export default usePrint;