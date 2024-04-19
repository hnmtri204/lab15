import { useContext, useState } from "react";
import "./bookCreate.css";
// import BookContext from "../context/book";
import { BookContext } from "../context/book";


const BookCreate = () => {

  const [title, setTitle] = useState("title");
  const [des, setDes] = useState("description");

  const { onCreate } = useContext(BookContext);


  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDes = (e) => {
    setDes(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const reps = await onCreate({
      title,
      des,
    });
  };
  

  return (
    <div className="form-create">
        <h2>Add a Book</h2>
        <form onSubmit={handleSubmit}>
          <label id="label1" htmlFor=""><h4>Title</h4></label>
            <input className="form-input1" onChange={handleChangeTitle} type="text" id="title" name="title" placeholder="Nhập tiêu đề của bạn..."/>
          <label id="label1" htmlFor=""><h4>Description</h4></label>
            <input className="form-input1" onChange={handleChangeDes} type="text" id="des" name="des" placeholder="Nhập miêu tả của bạn..." />
            <p><input className="form-input2" type="submit" value="Create!" /></p>
        </form>
    </div>
  )
}

export default BookCreate;


