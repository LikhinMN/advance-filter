import "./style.css"
import Checkbox from '../component/Checkbox.jsx'

const Brand = ({ brand }) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-lg mb-2 brand-dark">Brand</h3>
      <ul className="space-y-2">
        {brand.map((item, index) => (
          <Checkbox
            key={index}
            index={index}
            item={item}
          />
        ))}
      </ul>
    </div>
  )
}

export default Brand