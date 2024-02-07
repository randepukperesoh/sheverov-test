import { useEffect, useRef, useCallback } from 'react';

const useThrottle = (callback: Function, delay: number = 300) => {
    const timeoutRef = useRef<number | undefined>();
    const lastRan = useRef(0);
  
    const throttledFunction = useCallback((...args: any) => {
      const now = Date.now();
      if (now - lastRan.current >= delay) {
        lastRan.current = now;
        callback(...args);
      } else {
        if (timeoutRef.current) {
          return;
        }
        timeoutRef.current = window.setTimeout(() => {
          lastRan.current = now;
          timeoutRef.current = undefined;
          callback(...args);
        }, delay - (now - lastRan.current));
      }
    }, [callback, delay]);
  
    useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);
  
    return throttledFunction;
  };

export default useThrottle;