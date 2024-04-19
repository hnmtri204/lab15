import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { fetchBooks, createBook, updateBook, deleteBook } from "./api";
import BookContext from "./context/book";

const App = () => {
    const [books, setBooks] = useState([]);

    const handleCreate = async(term) => {
        const book = await createBook(term);
        if (book) setBooks([...books, book]);
    };
    
    
    const handleUpdate = async (id, term) => {
        console.log({ id, term });
        const book = await updateBook(id, term);
        setBooks(
            books.map((item) => item.id === book.id? book: item)
        );
    };


    const handleDelete = async (id) => {
        const book = await deleteBook(id);
        console.log(book);
        setBooks(books.filter((item) => item.id !== book.id));
    }
    
    useEffect(async () => {
        const tams = await fetchBooks();
        console.log(tams);
        setBooks(tams);
    }, []);


    
    const valueShare = {
        onCreate: handleCreate,
        onEdit: handleUpdate,
        onDelete: handleDelete,
        books 
    };
    
    return (
        <BookContext.Provider value={valueShare}>
        <div className="wrapper">
            <div className="container">
                <h1 className="text">Reading Book</h1>
                <div className="window">
                    <BookList />
                </div>
            </div>
            <BookCreate />
        </div>
         </BookContext.Provider>
    );
};

export default App;
