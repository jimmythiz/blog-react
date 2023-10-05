import './list.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Lists = ({data,handleClick}) => {
    return (
        <div className="list-div">
            {data.length > 0 ?  data.map((list)=>
                <div className="singlelists" key={list.id}  >
                    <div>
                        <div className='list-title'>{list.title}</div>
                        <div className="list-body" style={{fontWeight:"lighter"}}>{list.body.slice(0,20)}........</div>
                        <div className="list-author"><span style={{fontWeight: "bold"}}>Author</span> : {list.author}</div>
                    </div>
                    <div style={{marginTop:"1rem"}}>
                    <Link to={{ pathname :`/blogcontent/${list.id}`,state :{list}}} >
                    <button className='view'>View</button>
                    </Link>
                    
                    <button className='delete' onClick={()=>handleClick(list.id)}>Delete</button>
                    </div>
                </div>
            ): 
            <div style={{fontSize : "2rem"}}>
                <p>No data to display</p>
                <p>Please add new Blogs</p>
            </div>}
        </div >        
    );
}
 
export default Lists;