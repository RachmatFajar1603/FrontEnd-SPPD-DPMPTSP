import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { label, name, type, placeholder, options } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      {type === "select" ? (
        <select
          className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
          name={name}
          id={name}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <Input type={type} name={name} placeholder={placeholder} />
      )}
    </div>
  );
};

export default InputForm;
