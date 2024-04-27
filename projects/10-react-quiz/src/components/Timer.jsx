import React, { useEffect } from 'react';
import { useQuiz } from '../contexts/QuizContext';

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();

  const mins = String(Math.floor(secondsRemaining / 60)).padStart(2, '0');
  const secs = String(secondsRemaining % 60).padStart(2, '0');

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins}:{secs}
    </div>
  );
}

export default Timer;
