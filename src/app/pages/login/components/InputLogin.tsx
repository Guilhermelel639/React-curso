import React from "react";

interface IInputLoginProps{
    type?: string;
    label: string;
    value: string;
    onChange: (newValue: string) => void;
    onPressEnter?: () => void;
}


export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props,ref) => {
    return (
        <label>
            <span>{props.label}</span>
            <input 
            ref={ref} 
            value={props.value} 
            onChange={e => props.onChange(e.target.value)} 
            type={props.type} 
            onKeyDown={e => e.key === 'Enter'? props.onPressEnter && props.onPressEnter(): undefined}/>
        </label>
    )});