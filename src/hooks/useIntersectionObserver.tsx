import { MutableRefObject, useEffect } from 'react';

export type useIntersectionObserver = {
  ref: MutableRefObject<any> | undefined;
  options?: IntersectionObserverInit;
  onEntry: () => void;
  shouldAttachObserver?: boolean;
};
export const useIntersectionObserver = (props: useIntersectionObserver) => {
  const { onEntry, options = {}, ref, shouldAttachObserver = true } = props;

  useEffect(() => {
    if (!shouldAttachObserver) return;
    const observer = new IntersectionObserver(([entry]) => {
      console.log(
        '🚀 ~ file: useIntersectionObserver.tsx:14 ~ observer ~ entry.isIntersecting:',
        entry.isIntersecting
      );
      if (entry.isIntersecting) {
        onEntry();
        observer.disconnect();
      }
    }, options);

    if (ref?.current) {
      observer.observe(ref.current);
    }
    const currentRef = ref;

    return () => {
      if (currentRef?.current) observer.unobserve(currentRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
