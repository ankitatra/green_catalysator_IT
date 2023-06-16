import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuestionBank from './QuestionBank';
import Questions from './Question';
import {
  selectSubject,
  setQuestionSequence,
  rotateQuestions,
  randomizeQuestions
} from '../Redux/action';
import "./question.css"
const ControlButton = () => {
  const selectedSubject = useSelector(state => state.selectedSubject);
  const dispatch = useDispatch();

  const handleSubjectChange = e => {
    dispatch(selectSubject(e.target.value));
  };

  const handleQuestionSequence = () => {
    dispatch(setQuestionSequence());
  };

  const handleRotate = () => {
    dispatch(rotateQuestions());
  };

  const handleRandomize = () => {
    dispatch(randomizeQuestions());
  };

  return (
    <div>
     
      <div>
        <div style={{background:"green",textAlign:"center",padding:"10px",color:"white"}}>BISHOP HYBER SCHOOL</div>
        <div style={{background:"lightgreen",textAlign:"center",padding:"10px"}}>Online exam</div>
      </div>
      <div style={{display:"flex",justifyContent:"flex-end",marginTop:"10px"}}>
      <p style={{marginRight:"40px"}}>Subject:</p>
      <select style={{width:"200px",height:"30px",marginRight:"40px",marginTop:"10px"}} value={selectedSubject} onChange={handleSubjectChange}>
        <option value="">Select Subject</option>
        <option value="physics">Physics</option>
        <option value="math">Math</option>
        <option value="chemistry">Chemistry</option>
        <option value="biology">Biology</option>
      </select>
      </div>
     <div style={{display:"flex",justifyContent:"space-evenly",margin:"auto" }}>
     <QuestionBank />
      <Questions />
     </div>
      
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <button onClick={handleQuestionSequence}>Question Sequence</button>
        <button onClick={handleRotate}>Rotate</button>
        <button onClick={handleRandomize}>Randomize</button>
      </div>
    </div>
  );
};

export default ControlButton;
