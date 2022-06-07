import { useState } from 'react';
import './App.css';
import Button from './components/button/Button';
import Input from './components/input/Input'
import AstroForm from './components/form/AstroForm'


function App() {

  const [text, setText]=useState('');

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffe3fd',
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
        <Input value={text} placeholder='Kullanıcı adı' onChange={(e) => setText(e.target.value)} />
        <Input
          type='password'
          value={text}
          placeholder='Parola'
          onChange={(e) => setText(e.target.value)}
        />
        <Button btnText='Giriş Yap  😄' onClick={() => alert('Merhaba')} />
      </AstroForm>
    </div>
  )
}

export default App;
