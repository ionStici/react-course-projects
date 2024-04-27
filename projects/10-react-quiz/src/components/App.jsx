import Header from './Header';
import Footer from './Footer';
import MainLayout from './MainLayout';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';
import FinishScreen from './FinishScreen';
import Timer from './Timer';
import { useQuiz } from '../contexts/QuizContext';
import React from 'react';

export default function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />

      <MainLayout>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen />}
        {status === 'active' && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === 'finished' && <FinishScreen />}
      </MainLayout>
    </div>
  );
}
