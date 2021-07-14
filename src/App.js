import './App.css';
import MainContainer from './components/MainContainer';

const trafficLightsList = [
  {
      id: 0,
      title: 'stop',
      color: 'darkred'
  },
  {
      id: 1,
      title: 'ready',
      color: 'yellow'
  },
  {
      id: 2,
      title: 'go',
      color: 'darkgreen'
  },
]

function App() {
  return (
    <div>
      <MainContainer trafficLightsList={trafficLightsList} />
    </div>
  );
}

export default App;
