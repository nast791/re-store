import React from 'react';
import './ActiveQuiz.scss';
import AnswersList from "../AnswersList/AnswersList";

const ActiveQuiz = props => (
  <div className="active-quiz">
    <p className="active-quiz__question">
      <span>
        <strong>{props.answerNumber}.</strong>&nbsp;
        { props.question }
      </span>

      <small>{props.answerNumber} из {props.quizLength}</small>
    </p>

    <AnswersList answers={props.answers} onAnswerClick={props.onAnswerClick} state={props.state}/>
  </div>
)

export default ActiveQuiz;