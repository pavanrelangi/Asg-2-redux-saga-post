
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Title= ({titleData,postdata})=>{
    let tdata=titleData.map(x=> (
        <tr key={x.title}>
             <td>{x.title}</td>
             <td>{x.content}</td>
         </tr>
    ))

    let [title,setTitle] =useState()
    let [content,setContent]=useState()

  return(
<div>
<table>
            <tr>
                <td>title</td>
                <td><input type="text" onChange={(e)=>setTitle(e.target.value)} 
                value={title}/></td>
            </tr>
            <tr>
                <td>content</td>
                <td><input type="text" onChange={(e)=>setContent(e.target.value)}
                value={content}/></td>
            </tr>
         <tr>
            <Link to="/postdata"  colspan="2">
                <button className="btn btn-danger" style={{ marginLeft:"50px"}}
                onClick={()=>postdata(title,content)}>Postdata</button>
                </Link>
                </tr>
        </table>
    

</div>  
  )
   
}

export default Title