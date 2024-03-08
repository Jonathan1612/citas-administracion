import PropTypes from 'prop-types';
import './InputPrimary.css'

const InputPrimary = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="input_primary">
      <label className="input_primary_text">{label}</label>
      <input
        id={label}
        className="input_primary_entry"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

InputPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default InputPrimary
