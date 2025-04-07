import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs'

function App() {

  const [Bookmark,setBookmark] = useState ([]);
  
  const handleBookMark= (blog) => {
   setBookmark([...Bookmark,blog])
  }
console.log(Bookmark)
  return (
    <>
     <Navbar/>
     <div className='main-container flex text-center'>
      <div className='left-container w-[70%]'>
       <Blogs handleBookMark={handleBookMark} />
      </div>
      <div className='right-container w-[30%]'>
      <h1>Reading time : 0</h1>
      <h1>Bookmark count : 0</h1>
      {
        Bookmark.map((marked) => <p>{marked.title}</p>)
      }
      </div>
     </div>
    </>
  )
}

export default App
