import Checkbox from "../component/Checkbox";

const Price = ({ price,setSelected }) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-lg mb-2 text-gray-700">Price</h3>
      <ul className="space-y-2">
        {price.map((item, index) => (
          <Checkbox
          setSelected={setSelected}
            key={index}
            item={item}
            name="price"
          />
        ))}
      </ul>
    </div>
  );
};

export default Price;
