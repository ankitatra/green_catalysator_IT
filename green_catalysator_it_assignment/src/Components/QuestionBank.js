import React from 'react';
import { useSelector } from 'react-redux';
// import "./question.css"
const QuestionBank = () => {
  const questionBank = useSelector(state => state.questionBank);

  return (
    <table >
      <thead>
        <tr>
          <th style={{backgroundColor:"green",color:"white"}}>Question Bank</th>
        </tr>
      </thead>
      <tbody>
      {questionBank.length === 0 ? (
          <tr>
            <td>No questions available</td>
          </tr>
        ) : (
          questionBank.map((question, index) => (
            <tr key={index}>
              <td>{question}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default QuestionBank;
