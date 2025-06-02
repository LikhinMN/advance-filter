import Checkbox from '../component/Checkbox.jsx'

const Color = ({ color,setSelected }) => {

  return (
    <div className="mb-6">
      <h3 className="font-semibold text-lg mb-2 text-gray-700">Color</h3>
      <ul className="space-y-2">
        {color.map((item, index) => (
          <Checkbox
            key={index}
            setSelected={setSelected}
            item={item}
            name="color"
          />
        ))}
      </ul>
    </div>
  )
}

export default Color