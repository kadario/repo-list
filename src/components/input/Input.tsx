type InputProps = {
  id: string;
  type: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  label?: string;
  required?: boolean;
};

const Input: React.FC<InputProps> = ({
  id,
  type,
  placeholder,
  onChange,
  value,
  label,
  required = false,
}) => {
  return (
    <>
      {label ? (
        <label htmlFor={id}>
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            className="peer w-full mt-0.5 p-2 border-1 rounded border-gray-300 shadow-sm sm:text-sm leading-loose"
            onChange={onChange}
            value={value}
            required={required}
          />
        </label>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="peer w-full p-2 border-1 rounded border-gray-300 shadow-sm sm:text-sm leading-loose"
          onChange={onChange}
          value={value}
          required={required}
        />
      )}
    </>
  );
};

export default Input;
