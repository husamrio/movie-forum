import Review from './components/Review';
import './App.css';
import Home from './components/ReviewList';
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
