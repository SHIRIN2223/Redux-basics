import { useDispatch } from "react-redux";
//import { ActionTypes } from "../redux/actionTypes/todoTypes";
import { deleteTodo, updateTodo } from "../redux/actions/todoActions";
import  axios  from 'axios';
import { useState } from "react";

const TodoCard = ( { todo }) => {
    const dispatch = useDispatch();
    const [ isProcess, setIsProcess ] = useState({
        delete: false,
        edit: false,
        update: false,
    });
    const [isEditMode, setIsEditMode] = useState(false);

    //Sil butonuna tıklanınca çalışır
    const handleDelete = () => {
        setIsProcess({ ...isProcess, delete: true });

        axios
        .delete(`/todos/${todo.id}`)
        .then(() => {
         
            
        // reducere bir şey silecegini 
        // ve bunun hangi eleman olduğunun haberini verme
        dispatch(deleteTodo(todo.id))

        setIsProcess({ ...isProcess, delete: false});
        })
    }

    // düzenle butona tıkladında
    const handleEdit =() => { 
        const updated = { ...todo, is_done: !todo.is_done };
       // yükleniyor true'ya çekilir
       setIsProcess({ ...isProcess, edit: true });
         
        axios
        .put(`/todos/${todo.id}`, updated)
        .then(() => {dispatch(updateTodo(updated));
        setIsProcess({ ...isProcess, edit: false });
    });
        //dispatch(updateTodo(updated));
    }

    //console.log(todo);

     // dizenleme kaydedilerse
  const handleSave = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    const updated = { ...todo, text };

    // yükleniyor true'ya çekilir
    setIsProcess({ ...isProcess, update: true });

    axios.put(`/todos/${todo.id}`, updated).then(() => {
      dispatch(updateTodo(updated));
      setIsEditMode(false);
      setIsProcess({ ...isProcess, update: false });
    });
  };

  return (
    <div className="border shadow  shadow-lg p-4 my-5">
       {isEditMode ? (
       <form onSubmit={handleSave}
       className="d-flex align-items-center gap-2">
        <input defaultValue={todo.text} type="text" />
        <button  className="btn btn-warning">
            
        {isProcess.update && (
        <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true">
       </span>
        )}{' '}
            Kaydet</button>

       </form>
       ) : ( 
       <h5>{todo.text}</h5>
    )} 
      
      <h6>{todo.is_done ? 'Tamamlandı' : 'Devam Ediyor'}</h6>

     <p>{new Date(todo.created_at).toLocaleDateString()}</p> 

     <button 
     onClick={() =>{
        setIsEditMode(!isEditMode);
     }} 
     className="btn btn-primary me-4">
   
   {isEditMode ? 'Vazgeç' : 'Düzenle'}
   </button>

      <button onClick={handleEdit} className="btn btn-success">
        {isProcess.edit && (
            <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true">
            </span>
        )}

        {todo.is_done ? 'Geri Al' : 'Tamamla'}
      </button>
      <button onClick={handleDelete} className="btn btn-danger mx-4 ">
      {isProcess.delete && (
        <span
        className="spinner-border spinner-border-sm"
         role="status"
         aria-hidden="true">
        </span>
           )}
       Sil</button>
    </div>
  )
};

export default TodoCard;
