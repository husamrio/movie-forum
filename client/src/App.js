import Review from './review component/Review';
import './App.css';
import Home from './review component/Home';
import React,{useState} from 'react';


function App() {
  const [feedbacks, setFeedback]=useState([]);
  console.log('This is newfeedback: appp',feedbacks)

  return (
    <div>
     <Review feedbacks={feedbacks}/>
     <Home feedbacks={feedbacks} setFeedback={setFeedback}/>
    </div>
  );
}

export default App;
