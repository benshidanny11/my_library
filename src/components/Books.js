import React from 'react';
import Book from './Book'
import axios from 'axios';

class Books extends React.Component{
  state={
    books:[],
    bookid:''
  };
  constructor(){
    super();
    this.book_id='';
     axios.get("https://www.googleapis.com/books/v1/volumes?q=history").then((Response)=>{
    this.setState(
      {
        books:Response.data.items
      }
    )
    console.log(Response.data.items[0]);
     
  })

  }
  render(){
    return (
      <div >
      <ul className="list-group card">
      {this.state.books.map((book,index)=>{
      this.book_id=book.id;
       return(<Book title={book.volumeInfo.title}  description={book.volumeInfo.description} imageUrl={book.volumeInfo.imageLinks.smallThumbnail} bookid={book.id}/>)  
      
      })} 
     </ul>
      </div>
  )
  }
}

export default Books;
