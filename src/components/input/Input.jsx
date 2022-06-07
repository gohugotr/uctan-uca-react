import './Input.css'
import PropTypes from 'prop-types';
import React  from 'react';

const Input = ({type, placeholder, value, onChange}) => {
  return (
    <>
      <input className='custom-input' type={type} value={value} 
      placeholder={placeholder} onChange={onChange} />
    </>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

Input.defaultProps = {
    placeholder:'Değer giriniz ...',
    type:'text'
}

export default Input
