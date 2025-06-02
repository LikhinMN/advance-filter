import './style.css'
const Checkbox = ({ item, name,setSelected }) => {
  return (
    <li className="flex items-center space-x-2 p-1 rounded filter transition">
      <input
        type="radio"
        id={`radio-${item}`}
        name={name}
        className="radio w-4 h-4"
        value={item}
        onChange={(event)=>{if(event.target.checked){setSelected(event.target.value)}}}
      />
      <label
        htmlFor={`radio-${item}`}
      >
        {item}
      </label>
    </li>
  );
};

export default Checkbox;
