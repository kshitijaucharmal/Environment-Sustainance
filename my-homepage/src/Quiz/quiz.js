export const quiz = {
  topic: "Javascript",
  level: "Beginner",
  totalQuestions: 12,
  perQuestionScore: 5,
  questions: [
    {
      question: "How often do you eat animal-based products?",
      choices: ["Never", "Occasionally", "Often", "Very often(daily)"],
      rating: [0, 10, 20, 30],
      type: "MCQs",
      correctAnswer: "Ocasionally",
    },
    {
      question:
        "How much of the food that you eat is unprocessed or unpackaged?",
      choices: ["None", "20-30%", "50-60%", "100%"],
      rating: [30, 20, 10, 0],
      type: "MCQs",
      correctAnswer: "50-60%",
    },
    {
      question: "How far do you travel by car or motorcycle each week?",
      choices: ["None", "50-60 kms", "140-150kms", "Higher"],
      rating: [0, 10, 20, 30],
      type: "MCQs",
      correctAnswer: "50-60 kms",
    },
    {
      question: "What is the fuel type your vehicle uses?",
      choices: ["Petrol", "Diesel", "Electric", "CNG"],
      rating: [10, 30, 0, 5],
      type: "MCQs",
      correctAnswer: "Electric",
    },
    {
      question: "When you travel by car, how often do you carpool?",
      choices: ["Never", "Infrequently", "Ocasionally", "Often"],
      rating: [30, 20, 10, 0],
      type: "MCQs",
      correctAnswer: "Often",
    },
    {
      question: "What kind of energy do you use at you home?",
      choices: [
        "100% renewable",
        "Some percent is renewable",
        "100% non-renewable",
        "I don't know",
      ],
      rating: [0, 10, 20, 30],
      type: "MCQs",
      correctAnswer: "Some percent is renewable",
    },
    {
      question:
        "How often do you engage in outdoor activities that have a low environmental impact (e.g., hiking, biking)?",
      choices: ["Regularly", "Occasionally", "Rarely", "Never"],
      rating: [0, 10, 20, 30],
      type: "MCQs",
      correctAnswer: "Regularly",
    },
    {
      question: "How often do you buy second-hand or used items?",
      choices: ["Always", "Often", "Occasionally", "Rarely or Never"],
      rating: [0, 10, 20, 30],
      type: "MCQs",
      correctAnswer: "Often",
    },
    {
      question: "How often do you take steps to conserve water at home?",
      choices: ["Always", "Often", "Occasionally", "Rarely or Never"],
      rating: [0, 10, 20, 30],
      type: "MCQs",
      correctAnswer: "Often",
    },
    {
      question: "How often do you recycle household waste?",
      choices: ["Always", "Often", "Occasionally", "Rarely or Never"],
      rating: [0, 10, 20, 30],
      type: "MCQs",
      correctAnswer: "Often",
    },
    {
      question: "How often do you buy new clothing items?",
      choices: [
        "Rarely or never",
        "Occasionally",
        "Several times a year",
        "Frequently",
      ],
      rating: [0, 10, 20, 30],
      type: "MCQs",
      correctAnswer: "Occasionally",
    },
    {
      question:
        "How often do you support or participate in environmentally-friendly community initiatives (e.g., local clean-up events, tree planting)?",
      choices: ["Regularly", "Occasionally", "Rarely", "Never"],
      rating: [0, 10, 20, 30],
      type: "MCQs",
      correctAnswer: "Occasionally",
    },
  ],
};

// Food , Energy, Recyclng

import React from "react";
import "./Quiz.css";

const quiz = {
  topic: "Javascript",
  level: "Beginner",
  totalQuestions: 12,
  perQuestionScore: 5,
  questions: [
    {
      question: "How often do you eat animal-based products?",
      choices: ["Never", "Occasionally", "Often", "Very often(daily)"],
      rating: [0, 10, 20, 30],
      type: "MCQs",
      correctAnswer: "Ocasionally",
    },
    {
      question:
        "How much of the food that you eat is unprocessed or unpackaged?",
      choices: ["None", "20-30%", "50-60%", "100%"],
      rating: [30, 20, 10, 0],
      type: "MCQs",
      correctAnswer: "50-60%",
    },
    {
      question: "How far do you travel by car or motorcycle each week?",
      choices: ["None", "50-60 kms", "140-150kms", "Higher"],
      rating: [0, 10, 20, 30],
      type: "MCQs",
      correctAnswer: "50-60 kms",
    },
    {
      question: "What is the fuel type your vehicle uses?",
      choices: ["Petrol", "Diesel", "Electric", "CNG"],
      rating: [20, 30, 0, 10],
      type: "MCQs",
      correctAnswer: "Electric",
    },
    {
      question: "When you travel by car, how often do you carpool?",
      choices: ["Never", "Infrequently", "Ocasionally", "Often"],
      rating: [30, 20, 10, 0],
      type: "MCQs",
      correctAnswer: "Often",
    },
    {
      question: "What kind of energy do you use at you home?",
      choices: [
        "100% renewable",
        "Some percent is renewable",
        "100% non-renewable",
        "I don't know",
      ],
      rating: [0, 10, 30, 0],
      type: "MCQs",
      correctAnswer: "Some percent is renewable",
    },
    {
      question:
        "How often do you engage in outdoor activities that have a low environmental impact (e.g., hiking, biking)?",
      choices: ["Regularly", "Occasionally", "Rarely", "Never"],
      rating: [0, 10, 20, 30],
      type: "MCQs",
      correctAnswer: "Regularly",
    },
    {
      question: "How often do you buy second-hand or used items?",
      choices: ["Always", "Often", "Occasionally", "Rarely or Never"],
      rating: [0, 10, 20, 30],
      type: "MCQs",
      correctAnswer: "Often",
    },
    {
      question: "How often do you take steps to conserve water at home?",
      choices: ["Always", "Often", "Occasionally", "Rarely or Never"],
      rating: [0, 10, 20, 30],
      type: "MCQs",
      correctAnswer: "Often",
    },
    {
      question: "How often do you recycle household waste?",
      choices: ["Always", "Often", "Occasionally", "Rarely or Never"],
      rating: [0, 10, 20, 30],
      type: "MCQs",
      correctAnswer: "Often",
    },
    {
      question: "How often do you buy new clothing items?",
      choices: [
        "Rarely or never",
        "Occasionally",
        "Several times a year",
        "Frequently",
      ],
      rating: [0, 10, 20, 30],
      type: "MCQs",
      correctAnswer: "Occasionally",
    },
    {
      question:
        "How often do you support or participate in environmentally-friendly community initiatives (e.g., local clean-up events, tree planting)?",
      choices: ["Regularly", "Occasionally", "Rarely", "Never"],
      rating: [0, 10, 20, 30],
      type: "MCQs",
      correctAnswer: "Occasionally",
    },
  ],
};

// const quiz = {
//   topic: "Javascript",
//   level: "Beginner",
//   totalQuestions: 10,
//   perQuestionScore: 5,
//   totalTime: 60, // in seconds
//   questions: [
//     {
//       question:
//         "Which function is used to serialize an object into a JSON string in Javascript?",
//       choices: ["stringify()", "parse()", "convert()", "None of the above"],
//       type: "MCQs",
//       correctAnswer: "stringify()",
//     },
//     {
//       question:
//         "Which of the following keywords is used to define a variable in Javascript?",
//       choices: ["var", "let", "var and let", "None of the above"],
//       type: "MCQs",
//       correctAnswer: "var and let",
//     },
//     {
//       question:
//         "Which of the following methods can be used to display data in some form using Javascript?",
//       choices: [
//         "document.write()",
//         "console.log()",
//         "window.alert",
//         "All of the above",
//       ],
//       type: "MCQs",
//       correctAnswer: "All of the above",
//     },
//     {
//       question: "How can a datatype be declared to be a constant type?",
//       choices: ["const", "var", "let", "constant"],
//       type: "MCQs",
//       correctAnswer: "const",
//     },
//   ],
// };

export default function Quiz() {
  const [activeQuestion, setActiveQuestion] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState("");
  const [showResult, setShowResult] = React.useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = React.useState(null);
  const [result, setResult] = React.useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, choices, correctAnswer, rating } =
    questions[activeQuestion];
  let badAtFood = 0,
    badAtEnergy = 0,
    badAtRecycle = 0;

  const onClickNext = () => {
    result.score += rating[selectedAnswerIndex];
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="qui">
      <div className="quiz-container">
        {!showResult ? (
          <div class>
            <div>
              <span className="active-question-no">
                {addLeadingZero(activeQuestion + 1)}
              </span>
              <span className="total-question">
                /{addLeadingZero(questions.length)}
              </span>
            </div>
            <h2>{question}</h2>
            <ul>
              {choices.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={
                    selectedAnswerIndex === index ? "selected-answer" : null
                  }
                >
                  {answer}
                </li>
              ))}
            </ul>
            <div className="flex-right">
              <button
                onClick={onClickNext}
                disabled={selectedAnswerIndex === null}
              >
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <div className="result">
            <h3>Result</h3>
            <p>
              Total Question: <span>{questions.length}</span>
            </p>
            <p>
              Your Total Carbon Footprint:<span> {result.score}</span>
            </p>
            {console.log(badAtEnergy)}
            {badAtEnergy / 2 < 2 && badAtFood < 2 && badAtRecycle < 2 ? (
              <h3>
                You are a green person. Destroy the upcoming game with all your
                powerups and <br /> keep being green
              </h3>
            ) : (
              <h2>Hello</h2>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
