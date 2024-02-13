import React from 'react';
import useEventListener from '../useEventListener/useEventListener.tsx';

export interface Dimensions2D {
    width: number,
    height: number
}

const useElementDimensions = () => {
    const ref = React.useRef<any>(null);
    const [dimensions, setDimensions] = React.useState<Dimensions2D>({width: 0, height: 0})

    const refresh = React.useCallback(() => {
      const domRect = ref.current?.getBoundingClientRect()

      if (domRect) {
        setDimensions({width: domRect.width, height: domRect.height})
      }
    }, []);

    useEventListener('resize', refresh);
    useEventListener('scroll', refresh, true);

    return { dimensions, ref, refresh }
}

export default useElementDimensions;