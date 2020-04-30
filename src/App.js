import React from 'react';
import './App.css';
import Header from './components/Header';
import Books from './components/Books';
import axios from 'axios';
import Footer from './components/Footer';

class App extends React.Component{
  state={
    books:[]
  };
 constructor(){
   super();
    
  axios.get("https://www.googleapis.com/books/v1/volumes?q=history").then((Response)=>{
    this.setState(
      {
        books:Response.data.items
      }
    )
    console.log(Response.data.items[0].volumeInfo);
     
  })

 } 
render(){
  return (
    <div className="App container">
      <Header/>
       <ul className="list-group card">
        {this.state.books.map((book,index)=>{
         return(<Books title={book.volumeInfo.title}  description={book.volumeInfo.description} imageUrl={book.volumeInfo.imageLinks.smallThumbnail} bookid/>)  
        })} 
     
      </ul>
      <Footer/>
    </div>
  );
}
}

export default App;
