import { useState } from 'react';
import './App.css';
import Button from './components/button/Button';
import Input from './components/input/Input'

function App() {

  const [text, setText]=useState('');

  return (
    <div className='App'>
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
      <div>{text}</div>
      <Input
        value={text}
        placeholder='Bir metin giriniz'
        onChange={(e) => setText(e.target.value)}
      />
      <Button btnText='Giriş Yap  😄' onClick={() => alert('Merhaba')} />
    </div>
  )
}

export default App;
