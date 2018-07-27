import React, { PropTypes } from 'react';

const TextInput = ({
  name,
  label,
  value,
  error,
  onChange,
  placeholder
}) => {
  let wrapperClass = 'form-group';

  if (error && error.length > 0) {
    wrapperClass += ' ' + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
          placeholder={placeholder}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
