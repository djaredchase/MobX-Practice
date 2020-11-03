import React from 'react';
import './card.css';

export interface CardProps {
    main: boolean;
}

export const Card: React.FC<CardProps> = ({main, children}) => {
    const mode = main ? 'storybook-card--primary' : 'storybook-card--secondary';
    return(
        <div className={mode}>
            {children}
        </div>
    )
}