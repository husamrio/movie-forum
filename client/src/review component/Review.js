import React from 'react'
import {useState} from 'react'
import {Button, Form, Input} from 'reactstrap';


function Review() {
    const [reviews, setReviews] = useState("");
    const [value, setValue] = useState("");
    const onChange = (e) => {
      setReviews(e.target.value);
    };
    const onSubmit = (e) => {
      e.preventDefault();
      console.log("Form Submitted");
      setValue(reviews);
    };
    return (
    <div className="form-container">
      <h1>Enter your Reviews Here!!</h1>
    <Form onSubmit={onSubmit}>
      <Input
        className="form-control"
        type="text"
        placeholder="Enter you review"
        value={reviews}
        onChange={onChange}
      />
      <br></br>
      <Button type="submit" className="btn btn-primary">
        Submit
      </Button>
      <div>{value}</div>
    </Form>
  </div>
  );
  }

export default Review