import { useEffect, useRef } from "react";

const useThrottle = ( callback: Function, delay: number = 200, deps: Array<any> = []) => {
    const lastRun = useRef(Date.now());
    
    useEffect(
        () => {
            const handler = setTimeout( function () {
                if (Date.now() - lastRun.current >= delay) {
                    callback();
                    lastRun.current = Date.now();
                }
            }, delay - (Date.now() - lastRun.current));
            return () => {
                clearTimeout(handler);
              };
        }, [delay, ...deps]
    )
}

export default  useThrottle;