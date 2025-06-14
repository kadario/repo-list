//**Libs */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface ActionButtonProps {
  onClick?: () => void;
  text: string;
}

const Button: React.FC<ActionButtonProps> = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
    >
      <FontAwesomeIcon icon={faSearch} />
      {text}
    </button>
  );
};

export default Button;
