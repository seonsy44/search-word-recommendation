import { useEffect, useState } from 'react';

const ANCHOR_INDEX = 0;

function useUpDownKey(
  elRef: React.MutableRefObject<HTMLElement | null>,
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
  focusInput: (setFocusIndex?: React.Dispatch<React.SetStateAction<number>>) => void
) {
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
      case 'Tab':
        setFocusIndex((cur) => {
          if (elRef.current?.childElementCount === cur + 1) return cur;
          e.preventDefault();
          return cur + 1;
        });
        break;
      case 'ArrowUp':
        setFocusIndex((cur) => {
          if (cur === 0) {
            focusInput();
            return -1;
          }
          return cur - 1;
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (focusIndex >= 0) {
      const focusedEl = elRef.current?.children[focusIndex].children[ANCHOR_INDEX] as HTMLElement | undefined;
      focusedEl?.focus();
    }
  }, [focusIndex]);

  useEffect(() => {
    inputRef.current?.addEventListener('click', () => focusInput(setFocusIndex));
  });

  return { handleKeyDown };
}

export default useUpDownKey;
