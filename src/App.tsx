import './App.css';
import MainContainer from './components/MainContainer';

type TrafficLight = {
  id: number,
  title: string,
  color: string
}

const trafficLightsList: TrafficLight[] = [
  {
      id: 0,
      title: 'stop',
      color: '#8B0000'
  },
  {
      id: 1,
      title: 'ready',
      color: '#FFFF00'
  },
  {
      id: 2,
      title: 'go',
      color: '#006400'
  },
]

function App() {

  return (
    <div>
      <MainContainer trafficLightsList = {trafficLightsList} />
    </div>
  );
}

export default App;
