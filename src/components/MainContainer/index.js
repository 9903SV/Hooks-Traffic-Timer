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
        if (count>0 && title==='stop') {
            interval = setInterval(() => {
                setState(prevState => ({...prevState, count: prevState.count - 1}));
              }, 1000);
          
              return () => {
                clearInterval(interval);
              };
        } else if (count===0 && title==='stop') {
          clearInterval(interval)
          setState(prevState => ({...prevState, title: 'go'}))
        } else if (title === 'go') {
          setTimeout(() => {
            setState(prevState => ({...prevState, title: 'ready'}))
          }, 5000)
        } else if (title === 'ready') {
          setTimeout(() => {
            setState(prevState => ({...prevState, title: 'stop', count: 8}))
          }, 3000)
        }
      }, [title, count]);

    return (
      <div className="main-bg-container">
        <TrafficLightContainer trafficLightsList={trafficLightsList} title={title} />
        <CounterContainer count={count} title={title} />
      </div>
    )
}

export default MainContainer