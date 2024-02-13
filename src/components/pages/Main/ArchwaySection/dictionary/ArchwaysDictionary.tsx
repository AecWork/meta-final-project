import React from 'react';
import ReactCurvedText from 'react-curved-text';

export namespace ArchwaysDictionary {

    export enum ArchwayOptionType {
        MENU = 'menu',
        ABOUT = 'the restaurant',
        RESERVE = 'reservations'
    }

    export function generateTitle(option: ArchwayOptionType, width: number): JSX.Element {
        const padding = 8;
        const realWidthCoef = width / 2;
        return (
            <ReactCurvedText
                width={realWidthCoef}
                height={padding}
                cx={realWidthCoef / 2}
                cy={realWidthCoef}
                rx={realWidthCoef + padding}
                ry={realWidthCoef}
                startOffset={'25%'}
                reversed={true}
                text={option}
                textProps={{
                    "text-anchor": "middle",
                    class: 'archway-title uppercase',
                }}
                textPathProps={null}
                tspanProps={null}
                ellipseProps={null}
                svgProps={{style: {overflow: 'visible'}}}
            />
        )
    }
}
