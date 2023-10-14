import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AboutImg() {
    const [ isLoaded, setIsLoaded ] = useState(false);
    const { ref, inView, entry } = useInView({
      root: null,
      rootMargin: '0px',
      threshold: 1,
      initialInView: true,
      triggerOnce: true,
    });
    
    useEffect(() => {
      if(entry && entry.intersectionRatio === 1) {
        setIsLoaded(true);
        document.body.style.overflow = 'hidden'
        setTimeout(() => {
          document.body.style.overflow = 'unset'
        }, "1000")
      }
    }, [inView, entry]);
    
    return (
      <div ref={ref} className='px-16'>
        { isLoaded ? (
        <div className='transition-all duration-1000 bg-about w-full h-160 bg-center bg-cover mx-auto'></div>
        ): (
        <div className='bg-about w-1/2 h-160 bg-center bg-cover mx-auto'></div>
        )}
      </div>
    );
}

