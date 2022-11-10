import { useState } from 'react';

function useFocus() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return { isFocused, handleFocus, handleBlur };
}

export default useFocus;
