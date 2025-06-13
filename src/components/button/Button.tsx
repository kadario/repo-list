interface ActionButtonProps {
  onClick?: () => void;
  text: string;
}

const Button: React.FC<ActionButtonProps> = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
    >
      {text}
    </button>
  );
};

export default Button;
