import React from 'react';
import './myButton.css';

export interface MyButtonProps {
    primary: boolean;
    label: string;
    onClick: () => void;
}

export const MyButton: React.FC<MyButtonProps> = ({label, primary=true, ...props}) => {
    const color = primary ? 'storybook-mybutton--primary' : 'storybook-mybutton--secondary'
    return(
        <button className={color} {...props}>
            {label}
        </button>
    )
}