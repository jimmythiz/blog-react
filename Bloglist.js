import useFetch, { FetchDataContext} from "./useFetch";
import Lists from "./Lists";
import './list.css'



const BlogList = () => {
    const {data,error,isLoading,handleClick,result}= useFetch({url:"http://localhost:8000/blogs"})

const resultstyle = {
    fontWeight : "bold",
    fontSize : "1.4rem",
    textAlign : "center",
    position : "fixed",
    top : "0",
    backgroundColor : "blue",
    color : "white",
    width : "100%"
}
    

    return ( 
        <>
        <div style={resultstyle}>{result}</div>
        {data && <Lists data={data} handleClick={handleClick}/>}
        {isLoading ? <div>Loading.....</div> : ""}
        {error ? <div>{error.message}</div> : ""}
        </>
    );
}
 
export default BlogList;
