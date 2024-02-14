import { useLayoutEffect, useState } from "react";

const usePageLoaded = (): boolean => {
    const [loaded, isLoaded] = useState(false);

    useLayoutEffect(() => {
        const onPageLoad = () => isLoaded(true)

        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad, false);
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);

    return loaded;
}

export default usePageLoaded;