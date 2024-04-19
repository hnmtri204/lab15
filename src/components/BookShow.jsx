import BookEdit from "./BookEdit";
import { useState, useContext } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import "./bookShow.css"
import BookContext from "../context/book";




const BookShow = ({ book }) => {

        // context
       const {onEdit} = useContext(BookContext); // lay onEdit cua useContext
       const {onDelete} = useContext(BookContext); // lay onEdit cua useContext
        //

    console.log(book);
    const image = `http://picsum.photos/seed/${book.id}/300/200`;
    const [isEdit, setIsEdit] = useState(false);
    const handleEdit = (id, term) => {
        onEdit(id, term);
        setIsEdit(false);
    };

    return (
        <div className='item'>
             {!isEdit && (
                <>
                    <button className="button1" onClick={() => onDelete(book.id)}><FaRegTrashCan /></button>
                    <button className="button2" onClick={() => setIsEdit(!isEdit)}><FaPencilAlt /></button>
                </>
            )}
             {isEdit && <BookEdit book={book} onEdit={handleEdit} />}
            <div className='image'>
                <img src={image} alt="" />
            </div>
            {!isEdit && (
                <>
                    <h2>{book.title}</h2>
                    <p>{book.des}</p>
                </>
            )}
           
           
        </div>
    );
};

export default BookShow;