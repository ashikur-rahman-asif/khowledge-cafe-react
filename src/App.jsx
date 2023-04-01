import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import SideBar from './components/SideBar/SideBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from './components/Question/Question'

function App() {
  const [times, setTimes] = useState(0);
  const [texts, setTexts] = useState([]);
  const addReadingTime = (time) => {
    setTimes(times + time);
  }
  const addBookMark = (text) => {
    if (texts.includes(text)) {
      toast.error("The Blog Already Bookmarked!!!");
    } else {
      setTexts([...texts, text]);
    }
  };
  return (
    <div className="App container">
      <div>
        <Header></Header>
      </div>
      <hr className='w-[90%] ml-[100px] ' />
      <div className='blogs-container'>
        <div className='single-blog-container'>
          <Blogs addReadingTime={addReadingTime} addBookMark={addBookMark}></Blogs>
        </div>
        <div className='md:col-4'>
          <SideBar times={times} texts={texts} ></SideBar>
        </div>
      </div>
      <div className='mb-3 md:mx-5 md:px-5 md:mt-3'>
      <Question></Question>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
