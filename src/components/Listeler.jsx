import { useState } from 'react'


const Liste = () => {
  const listem = [
    <h2 key={1}>Liste 1</h2>,
    <p key={2}>Liste paragrafı</p>,
    <hr key={3} style={{ background: 'red', padding: '10px', width: '80vw' }} />,
  ]

  const tikla = (item) =>{
      alert(item)
  }

  const [Nesneler, setNesneler] = useState([
    {
      Adsoyad: 'Ali',
    },
    {
      Adsoyad: 'Hasan',
    },
    { Adsoyad: 'Veli' },
  ])

  return (
    <>
      {listem} <br />
      {Nesneler.map((nesne, index) => (
        <ul style={{ listStyle: 'none' }}>
          <li onClick={() => {tikla(nesne.Adsoyad)}} key={index}>
            {nesne.Adsoyad}
          </li>
        </ul>
      ))}
    </>
  )
}

export default Liste
