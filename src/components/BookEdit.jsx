import { useContext, useState } from "react";
import "./bookEdit.css";

const BookEdit = ({ book, onEdit }) => {
    const [title, setTitle] = useState(book.title);
    const [des, setDes] = useState(book.des);
    const [originalTitle] = useState(book.title);
    const [originalDes] = useState(book.des);
    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleChangeDes = (e) => {
        setDes(e.target.value);
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
        onEdit(book.id, {
            title,
            des,
        });
        ;
    };

    const handleCancel = () =>{
        setTitle(originalTitle);
        setDes(originalDes);
    }
    return (
        <div className="edit-input">
            <form onSubmit={handleSubmit}>
                <label htmlFor="">TITLE: </label>
                <input className="input1" onChange={handleChangeTitle} type="text" id="title" name="title" value={title} />
                <label htmlFor="">DESCRIPTION: </label>
                <input className="input1" onChange={handleChangeDes} type="text" id="des" name="des" value={des} />
                <button className="input2"onClick={handleCancel}>Cancel</button>
                <input className="input3"type="submit" value="Save" />
            </form>
        </div>
    )
}

export default BookEdit;