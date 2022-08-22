import React, { useState } from 'react'
import Book from '../assets/images/bg2.png'
import { AiOutlineSearch } from 'react-icons/ai'
import Card from './Card'
import axios from 'axios'

const Main = () => {
  const [search, setSearch] = useState('')
  const [bookData,setData]=useState([]);
  const searchBook = (evt) => {
    if (evt.key === 'Enter') {
      axios.get(
        'https://www.googleapis.com/books/v1/volumes?q=' +
          search +
          '&key=AIzaSyCwdQC7bNHa6538p1TG8nV6SpfMFhPNeAo'+'&maxResults=40',
      )
   
      .then(res=>setData(res.data.items))
    
      .catch(err=>console.log(err))
    }
    
  }

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like
            <br /> a body without a soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Find Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <AiOutlineSearch />
            </button>
          </div>
          <img src={Book} alt="Book" />
        </div>
      </div>
      <div className="container">
        <Card  book={bookData}/>
      </div>
    </>
  )
}

export default Main
