import Checkbox from '../component/Checkbox.jsx'

const Category = ({ category,setSelected }) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-lg mb-2 text-gray-700">Category</h3>
      <ul className="space-y-2">
        {category.map((item, index) => (
          <Checkbox
            key={index}
            setSelected={setSelected}
            item={item}
            name="category"
          />
        ))}
      </ul>
    </div>
  )
}

export default Category