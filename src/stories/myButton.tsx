import React from 'react';
import './myButton.css';

export interface MyButtonProps {
    primary: boolean;
    label?: string;
    onClick: () => void;
}

export const MyButton: React.FC<MyButtonProps> = ({primary=true, label, children, ...props}) => {
    const color = primary ? 'storybook-mybutton--primary' : 'storybook-mybutton--secondary'
    const content = children ? children : label;
    return(
        <button className={color} {...props}>
            {content}
        </button>
    )
}