import React from 'react'
import './Footer.css';
import useHeaderHeight from '../../../hooks/useHeaderHeight/useHeaderHeight.ts';
import useEventListener from '../../../hooks/useEventListener/useEventListener.ts';
import { useTheme } from '../../../contexts/ThemeContext.tsx';

const Footer: React.FC = () => {
  const themeContext = useTheme();
  const headerHeight = useHeaderHeight();
  const ref = React.useRef<HTMLElement>(null);

  const onScroll = React.useCallback(() => {
    if ((ref?.current?.offsetTop || 0) - headerHeight <= window.scrollY) {
      themeContext.setTheme('dark');
    } else {
      themeContext.setTheme('light');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerHeight]);

  useEventListener('scroll', onScroll);

  return (
    <footer ref={ref} style={{ height: `calc(100vh - ${headerHeight}px)` }}>
    </footer>
  )
}

export default Footer