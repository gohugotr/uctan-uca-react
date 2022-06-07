import styled from 'styled-components'
import PropTypes from 'prop-types'

// Her seferinde dinamik id oluşturmaması için
// Render metodunun üstünd tanımlanmalı.
// yarn add styled-components veya
// npm install styled-components --save
const ButtonElement = styled.div`
  text-transform: uppercase;
  outline: none;
  color: white;
  width: 100%;
  background-color: #4caf50;
  border: none;
  box-sizing: border-box;
  padding: 20px;
  font-size: 14px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    background-color: #43a047;
  }
`

const Button = ({ btnText, onClick }) => {
  return (
    <>
      <ButtonElement>
        <div onClick={onClick}>{btnText}</div>
      </ButtonElement>
    </>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  btnText: 'Tıkla',
}

export default Button
