import TrafficLightElement from '../TrafficLightElement'
import { TrafficLight } from '../../App'
import './index.css'

interface TrafficLightContainerProps {
    trafficLightsList: TrafficLight[],
    title: string
}

const TrafficLightContainer = (props: TrafficLightContainerProps) => {
    const {trafficLightsList, title} = props

    return (
        <div className="traffic-light-container">
            {trafficLightsList.map((eachLight: TrafficLight) => (
                <TrafficLightElement key={eachLight.id} eachLight={eachLight} active={title === eachLight.title} />
            ))}
        </div>
    )
}

export default TrafficLightContainer