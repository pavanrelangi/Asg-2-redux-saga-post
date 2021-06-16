

export const postdataApi=(title,content)=>{
  return {
     type: "ADD_DATA",
     data: {title:title,content:content}
  }
   
}