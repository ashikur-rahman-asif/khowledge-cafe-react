import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import SideBar from './components/SideBar/SideBar'

function App() {
  const [times, setTimes] = useState(0);
  const [texts, setTexts] = useState([]);
  const addReadingTime = (time) => {
    setTimes(times + time);
  }
  const addBookMark = (text) => {
    if (texts.includes(text)) {
      toast.error("The Blog Already Added !");
    } else {
      setTexts([...texts, text]);
    }
  };
  return (
    <div className="App container">
      <div>
        <Header></Header>
      </div>
      <div className='flex flex-row md:mx-[1.5rem] md:px-[1.5rem] md:mt-5 mt-[1.5rem]'>
        <div className='md:col-8'>
          <Blogs addReadingTime={addReadingTime} addBookMark={addBookMark}></Blogs>
        </div>
        <div className='md:col-4'>
          <SideBar times={times} texts={texts} ></SideBar>
        </div>
      </div>
      <div className='mb-3 md:mx-5 md:px-5 md:mt-3'>
        {/* <Question></Question> */}
      </div>
      {/* <ToastContainer></ToastContainer> */}
    </div>
  )
}

export default App
