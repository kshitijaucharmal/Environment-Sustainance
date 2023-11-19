import React, { useRef } from "react";
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
  const [badAt, setBadAt] = React.useState({
    Food: 0,
    Energy: 0,
    Recycle: 0,
  });

  const { questions } = quiz;
  const { question, choices, correctAnswer, rating } =
    questions[activeQuestion];

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
    setBadAt((prev) =>
      activeQuestion < 2 && rating[selectedAnswerIndex] >= 20
        ? {
            ...prev,
            Food: prev.Food + 1,
          }
        : activeQuestion >= 2 &&
          activeQuestion < 5 &&
          rating[selectedAnswerIndex] == 30
        ? {
            ...prev,
            Energy: prev.Energy + 1,
          }
        : activeQuestion < 12 &&
          activeQuestion > 4 &&
          rating[selectedAnswerIndex] == 30
        ? {
            ...prev,
            Recycle: prev.Recycle + 1,
          }
        : {
            ...prev,
          }
    );

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const conlog = () => console.log(badAt.Food, badAt.Energy, badAt.Recycle);

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
            {console.log(badAt.Food, badAt.Energy, badAt.Recycle)}
            {badAt.Energy / 2 < 2 && badAt.Food < 1 && badAt.Recycle < 2 ? (
              <h3>
                You are a green person. Destroy the upcoming game with all your
                powerups and <br /> keep being green
              </h3>
            ) : badAt.Food >= badAt.Energy &&
              badAt.Food >= badAt.Recycle / 2 ? (
              <div>
                <h3>
                  Consider making small adjustments to your eating habits for a
                  more sustainable living
                </h3>
                <ol>
                  <li>Balance your diet with more plant-based meals</li>
                  <li>
                    Experiment with meat substitutes in your favorite dishes.
                  </li>
                  <li>Opt for fresh produce over packaged snacks.</li>
                </ol>
              </div>
            ) : badAt.Energy > badAt.Food && badAt.Energy >= badAt.Recycle ? (
              <div>
                <h3>
                  Consider making small adjustments to your eating habits for a
                  more sustainable living
                </h3>
                <ol>
                  <li>Explore public transportation options for commuting.</li>
                  <li>Combine errands to minimize the number of trips.</li>
                  <li>Opt for walking or cycling for short-distance trips.</li>
                </ol>
              </div>
            ) : (
              <div>
                <h3>
                  Consider making small adjustments to your eating habits for a
                  more sustainable living
                </h3>
                <ol>
                  <li>
                    Unplug electronics when not in use to avoid standby power
                    consumption.
                  </li>
                  <li>Install water-saving devices on faucets and showers</li>
                  <li>
                    Use natural sunlight during the day to reduce reliance on
                    artificial lighting.
                  </li>
                </ol>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
