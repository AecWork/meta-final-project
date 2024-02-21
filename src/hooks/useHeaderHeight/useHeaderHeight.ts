import * as React from 'react';
import useEventListener from '../useEventListener/useEventListener.ts';

const useHeaderHeight = (): number => {
    const [height, setHeight] = React.useState<number>(0);

    const refresh = React.useCallback(() => {
        const height = document.getElementsByTagName('header')[0]?.offsetHeight || 0

        if (height) {
            setHeight(height);
        }
    }, []);

    useEventListener('load', refresh);

    return height;
}

export default useHeaderHeight;