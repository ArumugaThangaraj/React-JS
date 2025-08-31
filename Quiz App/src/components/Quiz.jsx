import { useState } from "react";
import { questions } from "../data/questions.js";
import "../App.css";

const Quiz = () => {

    const [qvalue, setValue] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
    const [submit, setSubmit] = useState(false);
    const currentQuestion = questions[qvalue];

    const handleAnswerSelection = (chosenOption) => {
        const updatedAnswers = [...userAnswers]; 
        updatedAnswers[qvalue] = chosenOption; 
        setUserAnswers(updatedAnswers); 
    };

    const goToPrevious = () => {
        if (qvalue > 0) {
            setValue(qvalue - 1);
        }
    };

    const goToNext = () => {
        if (qvalue < questions.length - 1) {
            setValue(qvalue + 1);
        }
    };

    const handleSubmit = () => {
        setSubmit(true);
    };

    
    const score = userAnswers.reduce((total, chosenAnswer, questionIndex) => {
        if (chosenAnswer === questions[questionIndex].answer) {
            return total + 1;
        }
        return total;
    }, 0);

    return (
        <div className="App">
            <h1>📝 Quiz App</h1>
            {!submit ? (
                <div className="card">
                    <h2>
                        {qvalue + 1}. {currentQuestion.question}
                    </h2>
                    <div className="options">
                        {currentQuestion.options.map((option, optionIndex) => (
                            <label key={optionIndex}>
                                <input
                                    type="radio"
                                    name={`question-${qvalue}`}
                                    value={option}
                                    checked={userAnswers[qvalue] === option}
                                    onChange={() => handleAnswerSelection(option)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>

                    <div className="btn">
                        <button onClick={goToPrevious} disabled={qvalue === 0}>
                            ⬅️ Previous
                        </button>

                        {qvalue === questions.length - 1 ? (
                            <button onClick={handleSubmit}>✅ Submit</button>
                        ) : (
                            <button onClick={goToNext}>Next ➡️</button>
                        )}
                    </div>
                </div>
            ) : (
                <div className="card">
                    <h2>🎉 Quiz Completed!</h2>
                    <p>
                        You scored <b>{score}</b> out of {questions.length}.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Quiz;
