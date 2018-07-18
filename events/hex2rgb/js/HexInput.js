'use strict';

const HexInput = ({ onChange, value }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  
  return (
    <input
      value={value}
      onChange={handleChange}
      type="text"
      className="hex-field js-hex-field"
      placeholder="#000000" />
  );
};
