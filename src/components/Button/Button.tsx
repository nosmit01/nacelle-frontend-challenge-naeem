interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const Button: React.FC<IButtonProps> = ({ label, onClick, style, ...props }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      aria-label={label}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;