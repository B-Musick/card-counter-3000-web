import { JSX } from "react"
import Button from "./Button"

interface IActionButtonDisplayProps {
    buttons: string[],
    omit?: string[],
    handleActionClick: any,
    disableButtonsCallback?: any
}

const ActionButtonDisplay: React.FC<IActionButtonDisplayProps> = ({ buttons, omit, handleActionClick, disableButtonsCallback }) => {
    let actionButtons = () => {
        let buttonList: JSX.Element[] = []

        buttons.forEach((action, index) => {
            if (omit && !omit.includes(action)) {
                buttonList.push(
                    <Button
                        key={index}
                        className="p-2 my-1 rounded bg-[#e6e5e377] w-[100%] text-xs"
                        onClick={() => handleActionClick(index)}
                        disabled={disableButtonsCallback}
                    >{action}</Button>
                )
            }
        })

        return buttonList
    }

    return (
        <div className="bg-transparent top-[25%] flex flex-col items-end  justify-center h-full">
            {actionButtons()}
        </div>
    )
}

export default ActionButtonDisplay;