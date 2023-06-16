import React from 'react';
import { useSelector } from 'react-redux';
// import "./question.css"
const Questions = () => {
  const questions = useSelector(state => state.questions);

  return (
    <table >
      <thead>
        <tr>
          <th style={{backgroundColor:"green",color:"white"}}>Questions</th>
        </tr>
      </thead>
      <tbody>
      {questions.length === 0 ? (
          <tr>
            <td>No questions available</td>
          </tr>
        ) : (
          questions.map((question, index) => (
            <tr key={index}>
              <td>{question}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Questions;
