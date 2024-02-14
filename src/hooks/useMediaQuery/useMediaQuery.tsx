import React from 'react';
import useEventListener from '../useEventListener/useEventListener.tsx';
import { DESKTOP_MIN_WIDTH, MOBILE_MAX_WIDTH } from '../../data/constants/constants.ts';

interface MediaQueryState {
    isDesktop: boolean
    isTablet: boolean
    isMobile: boolean
}

const defaultMediaQueryState = {
    isDesktop: false,
    isTablet: false,
    isMobile: false
}

const useMediaQuery = () => {
    const [mediaQueryState, setMediaQueryState] = React.useState<MediaQueryState>(defaultMediaQueryState);

    const refresh = React.useCallback(() => {
        const viewWidth = window.innerWidth;
        setMediaQueryState({
            isDesktop: viewWidth >= DESKTOP_MIN_WIDTH,
            isTablet: viewWidth < DESKTOP_MIN_WIDTH && viewWidth > MOBILE_MAX_WIDTH,
            isMobile: viewWidth <= MOBILE_MAX_WIDTH
        })
    }, []);

    useEventListener('resize', refresh);

    return [mediaQueryState.isDesktop, mediaQueryState.isTablet, mediaQueryState.isMobile]
}

export default useMediaQuery;
