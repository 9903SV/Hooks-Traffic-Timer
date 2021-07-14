import {useState, useEffect} from 'react'
import TrafficLightContainer from '../TrafficLightContainer'
import CounterContainer from '../CounterContainer'
import './index.css'

const MainContainer = props => {

  const {trafficLightsList} = props

  const [state, setState] = useState({count: 8, title: 'stop', })
    const count = state.count
    const title = state.title

    useEffect(() => {
      let interval;
      switch(title) {
        case 'stop':
          if (count>0) {
            interval = setInterval(() => {
              setState(prevState => ({...prevState, count: prevState.count - 1}));
            }, 1000);
        
            return () => {
              clearInterval(interval);
            };
          } else {
            clearInterval(interval)
          setState(prevState => ({...prevState, title: 'go'}))
          }
          break;
        case 'go':
          setTimeout(() => {
            setState(prevState => ({...prevState, title: 'ready'}))
          }, 5000)
          break;
        default:
          setTimeout(() => {
            setState(prevState => ({...prevState, title: 'stop', count: 8}))
          }, 3000)
          break;
      }
    }, [count, title])

    return (
      <div className="main-bg-container">
        <TrafficLightContainer trafficLightsList={trafficLightsList} title={title} />
        <CounterContainer count={count} title={title} />
      </div>
    )
}

export default MainContainer