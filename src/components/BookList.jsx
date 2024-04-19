import BookShow from "./BookShow";
// import BookContext from "../context/book";
import { BookContext } from "../context/book";
import { useContext } from "react";


import "./bookList.css";
const BookList = () => {
    const { books } = useContext(BookContext) // book tu app
    return (
        <div className="book-list">
            {books.map(book => (<BookShow book={book}  />))}
        </div>
    );
};

export default BookList;