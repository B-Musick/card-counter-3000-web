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
                        className="p-2 my-1 w-[100px] rounded"
                        onClick={() => handleActionClick(index)}
                        disabled={disableButtonsCallback}
                    >{action}</Button>
                )
            }
        })

        return buttonList
    }

    return (
        <div className="bg-transparent">
            {actionButtons()}
        </div>
    )
}

export default ActionButtonDisplay;