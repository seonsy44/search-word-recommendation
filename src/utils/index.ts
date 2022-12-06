export const debounce = (callback: (...args: any[]) => void, delay: number) => {
  let timerId: NodeJS.Timeout;
  return (...args: any[]) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(callback, delay, ...args);
  };
};
