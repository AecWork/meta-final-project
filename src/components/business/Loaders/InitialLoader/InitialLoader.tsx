import React from 'react';
import './InitialLoader.css';

const WORD = 'loading...';

const InitialLoader: React.FC = () => {

    return (
        <div className='initial-loader text-XL'>
            { Array.from(WORD).map((char, index) =>
                <span
                    style={{ '--i': index } as React.CSSProperties}
                    key={char}
                    className='fancy-char'
                >
                    { char.toUpperCase() }
                </span>
            )}
        </div>
    )
}

export default InitialLoader