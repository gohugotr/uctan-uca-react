import PropTypes from 'prop-types'
import styled from 'styled-components'

const FormElement = styled.div`
  border: none;
  background-color:#fff;
  position:relative;
  z-index=1;
  max-width:360px;
  padding:36px; //Kenarları açıyor
  margin: 0 auto;
  text-align:center;
  box-shadow: 0 0 20px rgba(0,0,0,0.25);
`

const AstroForm = ({ children }) => {
  return (
    <FormElement>
      <div>{children}</div>
    </FormElement>
  )
}

AstroForm.propTypes = {
  children: PropTypes.node,
}

AstroForm.defaultProps = {
  children: null,
}

export default AstroForm
