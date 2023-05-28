import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Bubble = () => {
  const bubbleRef = useRef({} as HTMLDivElement);

  useEffect(() => {
    const bubble = bubbleRef.current;

    const handleMouseMove = (event: any) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;

      const distX = clientX - centerX;
      const distY = clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      const maxSize = 150; // maximum bubble size
      const minSize = 5; // minimum bubble size
      const maxSizeDistance = 200; // distance at which bubble is largest
      const minSizeDistance = 500; // distance at which bubble is smallest

      const bubbleSize = Math.min(
        maxSize,
        Math.max(minSize, maxSize - (maxSize - minSize) * (distance / minSizeDistance))
      );

      let bubbleColor = 'rgba(250, 250, 250, 0.5)';
      // if (event.pageY > 855) {
      //   bubbleColor = 'rgba(0, 0, 0, 0.6)';
      // }

      if (!bubble) return;

      gsap.to(bubble, {
        width: bubbleSize,
        height: bubbleSize,
        backgroundColor: bubbleColor,
        ease: 'power1.out',
        duration: 0.3,
      });

      gsap.to(bubble, {
        x: clientX - bubble.clientWidth / 2,
        y: clientY - bubble.clientHeight / 2,
        backgroundColor: bubbleColor,
        ease: 'power1.out',
        duration: 0.3,
      });
    };


    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={bubbleRef} className="bubble"></div>;
};

export { Bubble };
