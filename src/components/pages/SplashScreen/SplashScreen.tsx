import React, { useLayoutEffect, useState } from 'react'
import './SplashScreen.css';
import InitialLoader from '../../business/Loaders/InitialLoader/InitialLoader.tsx';

const SLIDE_DELAY = 1000;
const SLIDE_DURATION = 1000;

const FADE_DELAY = 0;
const FADE_DURATION = 2000;

const SplashScreen: React.FC = () => {
    const [loaded, isLoaded] = useState(false);
    const [slideEnded, isSlideEnded] = useState(false);
    const [transitionEnded, isTransitionEnded] = useState(false);

    useLayoutEffect(() => {
        const onPageLoad = () => {
            isLoaded(true);
            setTimeout(() => isSlideEnded(true), SLIDE_DELAY + SLIDE_DURATION);
            setTimeout(() => {
                document.getElementsByTagName('body')[0].style.overflow = 'auto';
                isTransitionEnded(true);
            }, SLIDE_DELAY + SLIDE_DURATION + FADE_DELAY + FADE_DURATION - 1000);
        }

        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad, false);
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);

    return transitionEnded ? null : (
        <>
            <div
                style={{
                    transitionDelay: `${FADE_DELAY}ms`,
                    transitionDuration: `${FADE_DURATION}ms`
                }}
                className={`splash-screen opacity-fade${slideEnded ? ' faded' : ''}`} 
            />
            <div
                style={{
                    transitionDelay: `${SLIDE_DELAY}ms`,
                    transitionDuration: `${SLIDE_DURATION}ms`
                }}
                className={`splash-screen slider${loaded ? ' hidden' : '' }`}
            >
                <div className={`opacity-fade${loaded ? ' faded' : ''}`}>
                    <InitialLoader />
                </div>
            </div>
        </>
    )
}

export default SplashScreen;