import { memo } from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

export const MyButton = memo(function MyButton({ onClick, label }: ButtonProps) {
  console.log(`Button "${label}" render`);

  return (
    <button onClick={onClick} style={{ margin: '5px' }}>
      {label}
    </button>
  );
});