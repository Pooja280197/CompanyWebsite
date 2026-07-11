import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function observeReveal(selector: string, options: IntersectionObserverInit) {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    },
    options,
  );

  document.querySelectorAll(selector).forEach((el) => obs.observe(el));
  return obs;
}

export function useReveal() {
  const location = useLocation();

  useEffect(() => {
    let observers: IntersectionObserver[] = [];

    const connect = () => {
      observers = [
        observeReveal('.sr', {
          threshold: 0.06,
          rootMargin: '0px 0px -30px 0px',
        }),
        observeReveal('.sr-from-left, .sr-from-right', {
          threshold: 0.06,
          rootMargin: '0px 0px -20px 0px',
        }),
        observeReveal('.sr-from-center', {
          threshold: 0,
          rootMargin: '-40% 0px -40% 0px',
        }),
        observeReveal('.sr-from-bottom', {
          threshold: 0.05,
          rootMargin: '0px 0px -10px 0px',
        }),
      ];
    };

    const frame = requestAnimationFrame(() => {
      connect();
    });

    return () => {
      cancelAnimationFrame(frame);
      observers.forEach((obs) => obs.disconnect());
    };
  }, [location.pathname]);
}
