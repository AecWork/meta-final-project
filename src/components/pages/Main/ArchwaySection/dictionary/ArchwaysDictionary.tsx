import React from 'react';
import { EllipsePath } from './EllipsePath.tsx';

export namespace ArchwaysDictionary {

    export enum ArchwayOptionType {
        MENU = 'menu',
        ABOUT = 'the restaurant',
        RESERVE = 'reservations'
    }

    export function generateTitle(option: ArchwayOptionType): JSX.Element {
        return (
            <svg className='archway-title'>
                { EllipsePath }
                <text font-family="Rosalía" className='uppercase' font-size="30">
                    <textPath href="#arc" startOffset="50%" text-anchor="middle">
                        <tspan dy="-5">{ option }</tspan>
                    </textPath>
                </text>
            </svg>
        )
    }
}
