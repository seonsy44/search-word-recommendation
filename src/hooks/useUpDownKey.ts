import { useEffect, useState } from 'react';

function useUpDownKey(elRef: React.MutableRefObject<HTMLElement | null>) {
  const [focusIndex, setFocusIndex] = useState<number>(-1);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.isComposing) return;

    switch (e.key) {
      case 'ArrowDown':
        setFocusIndex((cur) => {
          if (elRef.current?.childElementCount === cur + 1) return cur;
          return cur + 1;
        });
        break;
      case 'ArrowUp':
        setFocusIndex((cur) => {
          if (cur === 0) return 0;
          return cur - 1;
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const focusedEl = elRef.current?.children[focusIndex] as HTMLElement | undefined;
    focusedEl?.focus();
  }, [focusIndex]);

  return { handleKeyDown };
}

export default useUpDownKey;
