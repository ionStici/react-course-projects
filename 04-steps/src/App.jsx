import PropTypes from "prop-types";
import "./index.css";
import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export default function App() {
    return (
        <div>
            <Steps />
        </div>
    );
}

function Steps() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handlePrevious() {
        if (step > 1) setStep((p) => p - 1);
    }

    function handleNext() {
        if (step < 3) setStep((p) => p + 1);
    }

    return (
        <>
            <button
                className="close"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                &times;
            </button>

            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
                        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
                        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
                    </div>

                    <StepMessage step={step}>
                        {messages[step - 1]}
                        <div className="buttons" style={{ marginTop: 8 }}>
                            <Button
                                bgColor="#e7e7e7"
                                textColor="#333"
                                onClick={() =>
                                    alert(`Learn how to ${messages[step - 1]}`)
                                }
                            >
                                Learn how
                            </Button>
                        </div>
                    </StepMessage>

                    <div className="buttons">
                        <Button
                            textColor="#fff"
                            bgColor="#7950f2"
                            onClick={handlePrevious}
                        >
                            <span>👈</span> Previous
                        </Button>
                        <Button
                            textColor="#fff"
                            bgColor="#7950f2"
                            onClick={handleNext}
                        >
                            Next <span>👉</span>
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}

function StepMessage({ step, children }) {
    return (
        <div className="message">
            <h3>Step {step}</h3>
            {children}
        </div>
    );
}

StepMessage.propTypes = {
    step: PropTypes.number,
    children: PropTypes.any,
};

function Button({ textColor, bgColor, onClick, children }) {
    return (
        <button
            style={{
                backgroundColor: bgColor,
                color: textColor,
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    textColor: PropTypes.string,
    bgColor: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any,
};
