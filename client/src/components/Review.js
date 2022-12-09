import React,{useState} from 'react';
import Rating from '@mui/material/Rating';

function Review({feedbacks}){
  const[formData, setValue] =useState({
      rating: '',
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
          p.style.color = "cornsilk"
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
              <div className="cont-3">
                  <form onSubmit={handleSubmit}>
                      <label className='rating' htmlFor="rating">Rating:</label>                     
                      <Rating id='rating' defaultValue={5} max={10} precision={0.1} onChange={handleChange} value={formData.rating}/>    
                      <br />                      
                      <label id='comm' htmlFor="comment">Comment:</label>
                      <textarea required name="Comment" id="comment" cols="30" rows="10" placeholder='write your comments here ..' onChange={handleChange} value={formData.comment}></textarea><br /><br />           
                      <input type="submit" id='submit-1'/>   
                      <a href="/home">
                        <button id='homebtn'>HomePage</button>
                      </a>                  
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