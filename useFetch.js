import { useEffect, useState, createContext } from "react";

export const FetchDataContext = createContext();

const useFetch = ({url}) => {
    const [data,setdata] = useState([])
    const [error, seterror] = useState(false)
    const [isLoading,setisLoading] = useState(true)
    const [result,setResult] = useState("")

    useEffect(()=>{
        const abortcont = new AbortController()
        const signal = abortcont.signal
        const fetchdata = async () =>{
            try{
                const response = await fetch (url, {signal})
                if (!response.ok){
                    throw new Error ("Data could not be fetched")
                } 
                const data = await response.json()
                setdata(data)
                seterror(false)
                setisLoading(false)
            }
            catch(error){
                if (error.name === "AbortError") {
                    return;
                }
                setisLoading(false)
                setdata([])
                seterror(error)
            }
        }
        fetchdata()
        return ()=> abortcont.abort()
    },[url])

    


    useEffect(() => {
        let timer;
        if (result) {
            timer = setTimeout(() => {
                setResult("");
            }, 3000);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [result]);

    const handleClick = async (id)=>{
        await fetch(`http://localhost:8000/blogs/${id}`,{
            method:'DELETE'
        })
        .then(setResult("Successfully deleted"))
        .catch(error=>{
            setResult(error.message + " Could not delete data")
        })

        setdata(data.filter(list=> list.id !== id))
    }

    return ( {data,error,isLoading,handleClick,result} );
}
 
export default useFetch;