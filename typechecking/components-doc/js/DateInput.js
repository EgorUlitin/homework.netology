'use strict';

const DateInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};

DateInput.propTypes = {
  onChange: PropTypes.func,

  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

DateInput.defaultProps = {
  value: new Date(),
};