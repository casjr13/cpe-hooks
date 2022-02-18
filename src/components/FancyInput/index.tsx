import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";

interface Props {}

export interface FancyInputRef {
  focus: () => void,
  placeholder: (placeholder: string) => void,
}

const FancyInput = (props: Props, ref: ForwardedRef<FancyInputRef>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    placeholder: (placeholder) => {
      if (!inputRef.current) return;
      inputRef.current.placeholder = placeholder;
    }
  }));

  const blur = () => {
    if (!inputRef.current) return;
    inputRef.current.placeholder = "Focus Me"
  }

  return (
    <input
      ref={inputRef}
      onBlur={blur}
      placeholder="Fancy Input"
    />
  );
}

export default forwardRef(FancyInput);
