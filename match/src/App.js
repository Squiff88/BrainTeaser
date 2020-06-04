import React from 'react';
import './App.css';
import TeaserBoard from './components/TeaserBoard/TeaserBoard';
import Timer from 'react-compound-timer'

function App() {
  const [startTimer, setStartTimer] = React.useState(false);
  const [stopTimer, setStopTimer] = React.useState(false);

  return (
    <div className='App'>
      <header className="App-header">

      <Timer
        startImmediately={false}
      >
        {({ start, resume, pause, stop, reset }) => {
          if(startTimer){
            start()
          }
          if(stopTimer){
            stop()
          }
          return (
            <React.Fragment>
                <div>
                    Your time:{' '}
                    <Timer.Minutes /> minutes{' '}
                    <Timer.Seconds /> seconds
                </div>

                <br />
            </React.Fragment>
        )}}
      </Timer>

        <TeaserBoard startTime={setStartTimer} timer={startTimer} stopTimer={setStopTimer} />

      </header>
    </div>
  );
}

export default App;
