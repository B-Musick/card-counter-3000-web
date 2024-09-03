import className from 'classnames';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    disabled,
    ...events
}) { // Wrapper
    // Need events.className if we want to add the actual className prop to the component
    const classes = className(events.className, 'flex justify-center items-center px-2 py-0.5 border', {
        'bg-blue-500 text-slate-200': primary,
        'bg-gray-700 text-slate-200': secondary,
        'bg-green-700 text-slate-200': success,
        'bg-yellow-700 text-slate-200': warning,
        'bg-red-500 text-slate-200': danger,
        'rounded-md': rounded,
        'bg-white': outline,
        'text-blue-700': outline && primary,
        'text-gray-700': outline && secondary,
        'text-green-700': outline && success,
        'text-yellow-700': outline && warning,
        'text-red-700': outline && danger,
        'opacity-50': disabled
    });
    return <button {...events} className={classes}>{children}</button> // Underlying element
}

export default Button;