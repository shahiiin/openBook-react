import React from 'react'

const Card = ({ book }) => {
  console.log(book, 'aa')
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount
        if (thumbnail != undefined && amount != undefined) {
          return (
            <>
              <div className="card">
                <img src={thumbnail} alt="Book2" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount">${amount}</p>
                </div>
              </div>
            </>
          )
        }
      })}
    </>
  )
}

export default Card
