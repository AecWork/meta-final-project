import * as React from 'react';

const useHeaderHeight = (): number => {
    const [height, setHeight] = React.useState<number>(0);

    React.useEffect(() => {
        setHeight(document.getElementsByTagName('header')[0]?.offsetHeight || 0);
    }, [])

    return height;
}

export default useHeaderHeight;