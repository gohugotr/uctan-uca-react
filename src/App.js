import './App.css';
import HelloWorld from "./components/HelloWorld"

function App() {
  return (
    <div className='App'>
      <HelloWorld butonad='Tıkla beni' resim='https://i.ytimg.com/vi/JAvOPQOMCzk/hqdefault.jpg'>
        <img
          src='https://blogs.cdn.medel.com/blog.medel.com/uploads/20201125131016/ses.jpg'
          alt='Merhaba' width="30%"
        />
        <h2>Alt  children Öğe</h2>
      </HelloWorld>
    </div>
  )
}

export default App;
