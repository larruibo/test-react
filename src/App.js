import React, { useState } from "react";
import Footer from "./layout/Footer.js";
import Questions from "./components/Questions.js";
import FormCreateQuestion from "./components/FormCreateQuestion.js";
const initialQuestions = [
  {
    question: "Dummy?",
    answers: [
      { answer: "I'm dummy", votes: 10 },
      { answer: "You're the dummy", votes: 2 }
    ]
  },
  {
    question: "Dummy Too?",
    answers: [
      { answer: "I'm dummy", votes: 10 },
      { answer: "You're the dummy", votes: 2 }
    ]
  }
];
const App = () => {
  const [questions, setQuestions] = useState(initialQuestions);

  const onVote = (question, answer) => {
    setQuestions(prevQuestions => {
      const newQuestions = [...prevQuestions];

      const qObj = newQuestions.find(q => q.question === question);
      const newAnswers = qObj.answers.map(a =>
        a.answer === answer ? { answer: a.answer, votes: a.votes + 1 } : a
      );
      qObj.answers = newAnswers;
      return newQuestions;
    });
  };
  return (
    <div className="container">
      <h2>Questionator!!!</h2>
      <div className="row">
        <div className="col-8">
          <Questions questions={questions} onVote={onVote} />
        </div>
        <div className="col-4">
          <FormCreateQuestion />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
