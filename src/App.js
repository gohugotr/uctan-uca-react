import { useState } from 'react'
import './App.css'
import Button from './components/button/Button'
import Input from './components/input/Input'
import AstroForm from './components/form/AstroForm'
import Listeler from './components/Listeler'

function App() {
  const [text, setText]=useState('');
  const [userForm, setuserForm] = useState({
    userName: '',
    userPass: '',
  })

  

  const Validation = () =>{
    if(userForm.userName==='' || userForm.userPass ===''){
         setText('Hatalı Giriş');
    }
      else
      {
        setText('Başarılı Giriş')
      }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#76b852',
        height: '100vh',
      }}
    >
      {/* <HelloWorld butonad='Tıkla beni' resim='https://i.ytimg.com/vi/JAvOPQOMCzk/hqdefault.jpg'
      children = {
        <>
                <img
          src='https://blogs.cdn.medel.com/blog.medel.com/uploads/20201125131016/ses.jpg'
          alt='Merhaba' width="30%"
        />
        <h2>Alt  children Öğe</h2>
        </>
      }
      /> 
      <Button />*/}

      <AstroForm>
        <h2>Giriş Formu</h2>
        <p> {text} </p>
        <Input
          value={userForm.userName}
          placeholder='Kullanıcı adı'
          onChange={(e) =>
            setuserForm({
              ...userForm,
              userName: e.target.value,
            })
          }
        />
        <Input
          value={userForm.userPass}
          type='password'
          placeholder='Parola'
          onChange={(e) =>
            setuserForm({
              ...userForm,
              userPass: e.target.value,
            })
          }
        />
        <Button btnText='Giriş Yap  😄' onClick={() => Validation()} />
      </AstroForm>
      <Listeler/>
    </div>
  )
}

export default App
