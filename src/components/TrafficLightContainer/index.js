import TrafficLight from '../TrafficLight'
import './index.css'

const TrafficLightContainer = props => {
    const {trafficLightsList, title} = props

    return (
        <div className="traffic-light-container">
            {trafficLightsList.map(eachLight => (
                <TrafficLight key={eachLight.id} eachLight={eachLight} active={title === eachLight.title} />
            ))}
        </div>
    )
}

export default TrafficLightContainer