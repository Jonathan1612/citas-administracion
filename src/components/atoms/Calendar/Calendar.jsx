import PropTypes from 'prop-types'

const Calendar = ({ label, placeholder, value, onChange }) => {
  return (
    <div className='input_primary'>
      <label className="input_primary_text">{label}</label>
      <input
        id={label}
        className="calendar"
        type="date"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

Calendar.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Calendar