import React from 'react'



const Button1 = () => {

    const tiklandi = (e,deger) => {
         console.log(e,deger)
    }

    return (
      <>
        <br />
        <button onClick={(e)=> {
            tiklandi(e,'Cengiz')
        }}> Tıkla </button>
      </>
    )
}
export default Button1;