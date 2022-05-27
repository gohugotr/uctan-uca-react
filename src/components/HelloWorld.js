import React  from "react";


const HelloWorld = (props) => {
  return (
    <div>
      <p>Merhaba</p>
      <br />
      <button>{props.butonad}</button>
      <br />
      <br />
      <span>{props.children}</span>
      <img src={props.resim} alt='' />
    </div>
  )
}

export default HelloWorld;