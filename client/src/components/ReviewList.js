import React,{useEffect} from 'react';
import Rating from '@mui/material/Rating';

function ReviewList({feedbacks, setFeedback}) {   
    useEffect(()=>{
       fetch("http://localhost:3000/comments")
       .then(res=>res.json())
       .then(data=>setFeedback(data))   
    }, [])
   console.log('This the fetch data',feedbacks)
   function handleBlur(e){
       console.log(e.target.innerText)     
   
          fetch(`http://localhost:3000/comments/${e.target.id}`,{
           method: "POST",
           headers: {
             "Content-Type": "application/json",
             "Accept": "application/json"
           },
           body:JSON.stringify({"comment":e.target.innerText})
         })
         .then(res=>res.json())
         .then(data=>console.log(data))
   }
   
    const cards=feedbacks.map(feedback=>{
       return (
       <div key={feedback.id} className="feedbackCard" >
           <Rating value={feedback.rating} readOnly/>                      
           <p contentEditable='true' onBlur={handleBlur} id={feedback.id}>{feedback.comment}</p>           
           <button className='delete' onClick={handleDelete}  id={feedback.id}>Delete</button>
       </div>)
    })
   
    //console.log(feedbacks)
    function handleDelete(e){
       const newfeedbacks=feedbacks.filter(item=>{
           // console.log(e.target)
           // console.log(item.id)
          return item.id !== parseInt(e.target.id)
       })
   
       setFeedback(newfeedbacks)
       console.log('This is newfeedback:',newfeedbacks)
       
       fetch(`http://localhost:3000/comments/${e.target.id}`,{
           method: "DELETE",
           headers: {
             "Content-Type": "application/json",
             "Accept": "application/json"
           }
         })
         .then(res=>res.json())
         .then(data=>console.log(data))
   }
   return (
    <div className="cont-2">
        <h1>Reviews</h1>
        <div className='fcontainer'>
        {cards}
    </div>
    </div>

   )
}

export default ReviewList;