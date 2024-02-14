import React from 'react';
import ReactCurvedText from 'react-curved-text';
import Button, { ButtonType } from '../../../../business/Button/Button.tsx';

export namespace ArchwaysDictionary {

    export enum ArchwayOptionType {
        MENU = 'menu',
        ABOUT = 'about',
        RESERVE = 'reserve'
    }

    export function generateArchedTitle(option: ArchwayOptionType, width: number): JSX.Element {
        const padding = 8;
        const realWidthCoef = width / 2;
        return (
            <ReactCurvedText
                width={realWidthCoef}
                height={padding}
                cx={realWidthCoef / 2}
                cy={realWidthCoef - padding * 3}
                rx={realWidthCoef + padding}
                ry={realWidthCoef}
                startOffset={'25%'}
                reversed={true}
                text={option}
                textProps={{
                    'text-anchor': 'middle',
                    class: 'archway-title uppercase',
                }}
                textPathProps={null}
                tspanProps={null}
                ellipseProps={null}
                svgProps={{class: 'archway-title-wrapper'}}
            />
        )
    }

    export function generateContent(option: ArchwayOptionType): JSX.Element {
        return (
            <div className='archway-content'>
                <div>
                    <span>{`${option[0].toUpperCase()}${option.substring(1)}`}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <Button type={ButtonType.BIG_CTA}>{getOptionButtonText(option)}</Button>
            </div>
        )
    }

    function getOptionButtonText(option: ArchwayOptionType): string {
        switch(option) {
            case ArchwayOptionType.ABOUT: return 'Know more about us';
            case ArchwayOptionType.MENU: return 'See menu';
            case ArchwayOptionType.RESERVE: return 'Reserve a table';
        }
    }
}
