import { useState,useEffect } from "react";
import './list.css'

const NewBlog = () => {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [author,setAuthor] = useState("")
    const [status,setStatus] = useState("")

    useEffect(() => {
        let timer;
        if (status) {
            timer = setTimeout(() => {
                setStatus("");
            }, 3000);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [status]);

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }
    const changeBody = (e) => {
        setBody(e.target.value)
    }
    const changeAuthor = (e) => {
        setAuthor(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newBlog = {title,body,author}
        fetch("http://localhost:8000/blogs",{
            method:'POST',
            body: JSON.stringify(newBlog),
            headers :{'Content-type':'application/json; charset=UTF-8'}
        })
        .then(res => res.json())
        .then(setStatus("Success!!!")
        )
        .catch(error=>{
            setStatus(`${error.message}  Try again later` )
        })
        setTitle("")
        setBody("")
        setAuthor("")
    }
    return ( 
       <div className="form-container">
        <div style={{textAlign : "center", fontWeight:"bold", fontSize:"1.4rem"}}>{status}</div>
            <form onSubmit={handleSubmit} >
                <label>Blog Name :</label>
                <input type="text" value={title} onChange={changeTitle}/>

                <label>Blog Details :</label>
                <textarea type="text" value={body} onChange={changeBody}/>

                <label>Designated Author:</label>
                <select onChange={changeAuthor} value={author}>
                    <option default disabled value="">Select an author</option>
                    <option value="Elizabeth">Elizabeth</option>
                    <option value="Abdul-Samad">Abdul-Samad</option>
                    <option value="Desola">Desola</option>
                    <option value="Olawale">Olawale</option>
                    <option value="Temitope">Temitope</option>
                </select>

                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default NewBlog;