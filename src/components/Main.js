import React from 'react'
import Book from '../assets/images/bg2.png'
import { AiOutlineSearch } from 'react-icons/ai'
import Card from './Card'

const Main = () => {
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
            <input type="text" placeholder="Find Your Book Name" />
            <button>
              <AiOutlineSearch />
            </button>
          </div>
          <img src={Book} alt="Book" />
        </div>
      </div>
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default Main
