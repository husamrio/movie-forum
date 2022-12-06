import React,{useState} from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function Review({feedbacks}){
  const[formData, setValue] =useState({
      rating:'',
      comment:'',
      name:''
  })
  
  function handleSubmit(e){
    console.log(formData)
      e.preventDefault();
      fetch('http://localhost:3000/comments',{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body:JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        let form = document.querySelector('form');
        let p = document.createElement('p');
          document.getElementById('feedback').append(p);
          p.style.fontFamily="'Poppins', sans-serif";
          p.style.fontSize="40px"
          p.innerText="Thank you for your review. Hope to see you back!!!."
          document.querySelector('#feedback').querySelector('h2').remove();
          form.remove();
          document.getElementById('feedback').style.height='400px';
  }
  function handleChange(e){
      setValue((previouState)=>{
           return {...previouState, [e.target.id]:e.target.value}
      })
  }
        return(          
          <div id='feedback'>
              <h1>Please leave your review here!!</h1>
              <h2>You can fill the form below to tell us about your experience</h2>
              <div className="cont3">
                  <form onSubmit={handleSubmit}>
                      <label htmlFor="rating">Rating:</label>                 
                      <Stack id="rating" spacing={1} onChange={handleChange} value={formData.rating} >
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />                      
                      </Stack>
                      <br />                      
                      <label id='comm' htmlFor="comment">Comment:</label>
                      <textarea required name="Comment" id="comment" cols="30" rows="10" placeholder='write your comments here ..' onChange={handleChange} value={formData.comment}></textarea><br /><br />           
                      <input type="submit" id='submit1'/>                      
                  </form>
                </div>
                <div>
                    {
                        feedbacks.map(feed =>{
                            return( <p key={feed.id}></p>)
                        })                        
                    }
                </div>

          </div>          
          
      )
  }


export default Review