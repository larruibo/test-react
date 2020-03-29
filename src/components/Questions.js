import React from "react";
//import PropTypes from "prop-types";
import Answers from "./Answers.js";

const Questions = props => {
  const renderQuestions = () => {
    return props.questions.map((q, i) => (
      <div key={"question" + i}>
        <h2>{q.question}</h2>
        <Answers
          answers={q.answers}
          question={q.question}
          onVote={props.onVote}
        />
      </div>
    ));
  };
  return <div className="Questions">{renderQuestions()}</div>;
};

// Questions.propTypes = {
//   questions: PropTypes.array.isRequired
// };

export default Questions;
