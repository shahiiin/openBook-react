import React from 'react'
import Book2 from '../assets/images/book.jpg'

const Card = () => {
  return (
    <>
      <div className="card">
        <img src={Book2} alt="Book2" />
        <div className="button">
          <h3 className="title">React Js</h3>
          <p className='amount'>&#8377;3290</p>
        </div>
      </div>
    </>
  )
}

export default Card
