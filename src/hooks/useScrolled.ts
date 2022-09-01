import { useRef, useEffect, useState } from 'react';

export const useScrolled = (params?: ScrollParams): Scrolled => {
  // Get scrolled element
  const { current: element } = useRef(params?.element || document.getElementById('root'));
  const [isFirst, setIsFirst] = useState(true);
  const [scrolledData, setScrolledData] = useState<scrollData>({
    scrolled: 0,
    isDown: false,
  });

  // Setup scroll
  useEffect(() => {
    if (!element) return;

    const handleScroll = (ev: Event) => {
      // Parse event element
      const el = ev.target as HTMLElement;

      // Handle empty target
      if (!el) return;

      // Parse scroll Data
      const gap = params?.gap || 0;
      const isDown = element.scrollTop >= gap;

      setScrolledData({
        scrolled: element.scrollTop,
        isDown,
      });

      if (isFirst && isDown) setIsFirst(false);
    };

    // Add scroll event to element
    element.addEventListener('scroll', handleScroll);

    return () => {
      // Remove scroll event
      element.removeEventListener('scroll', handleScroll);
    };
  }, [element]);

  // On isDown change
  useEffect(() => {
    if (params?.callback && element && !isFirst) params.callback();

    return () => {};
  }, [scrolledData.isDown, element, isFirst]);

  // Handlers
  const scrollTo = (y: number) => {
    if (!element) return;

    element.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  };

  return { scrolledData, scrollTo };
};

interface ScrollParams {
  gap: number;
  element?: HTMLElement;
  callback?: VoidFunction;
}

interface scrollData {
  scrolled: number;
  isDown: boolean;
}

interface Scrolled {
  scrolledData: scrollData;
  scrollTo: (y: number) => void;
}

export default useScrolled;
