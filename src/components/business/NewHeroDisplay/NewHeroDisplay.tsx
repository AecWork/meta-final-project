import React from 'react'
import useHeaderHeight from '../../../hooks/useHeaderHeight/useHeaderHeight.tsx'
import useWindowDimensions, { WindowDimensions } from '../../../hooks/useWindowDimensions/useWindowDimensions.tsx';
import HeroText from '../../../assets/types/Display.svg';
import './NewHeroDisplay.css';

const TILE_HEIGHT: number = 66;
const TILE_WIDTH: number = 65.75;

const NewHeroDisplay: React.FC = () => {
    const displayRef = React.useRef<HTMLImageElement>(null);
    const [displayHeight, setDisplayHeight] = React.useState<number>(0);

    const headerHeight = useHeaderHeight();
    const windowDimensions = useWindowDimensions();

    const [mosaicDimensions, setMosaicDimensions] =
    React.useState<WindowDimensions>({
      height: 0,
      width: 0
    });

    React.useEffect(() => {
        setDisplayHeight(displayRef?.current?.offsetHeight || 0)
    }, [displayRef?.current?.offsetHeight]);

    React.useEffect(() => {
        console.log(displayHeight);
        const unquantifiedHeight = (windowDimensions.height - displayHeight) - TILE_HEIGHT - headerHeight;
        const unquantifiedWidth = windowDimensions.width - 64*2;

        const quantifyDimension = (dimension: number, tileSize: number) => dimension - (dimension % tileSize)

        const quantifiedHeight = quantifyDimension(unquantifiedHeight, TILE_HEIGHT);
        const quantifiedwidth = quantifyDimension(unquantifiedWidth, TILE_WIDTH);

        setMosaicDimensions({
            height: quantifiedHeight,
            width: quantifiedwidth
        });
      }, [windowDimensions, headerHeight, displayHeight]);

    return (
        <section style={{ height: `${windowDimensions.height - headerHeight}px` }} className='new-hero-wrapper'>
            <div
                className='hero-mosaic'
                style={{ width: mosaicDimensions.width, height: mosaicDimensions.height }}
            />
            <img
                ref={displayRef}
                onLoad={e => setDisplayHeight((e.target as HTMLImageElement).offsetHeight)}
                style={{ width: mosaicDimensions.width }}
                src={HeroText}
                alt="Hero display"
            />
        </section>
    )
}

export default NewHeroDisplay