import TrafficLightElement from '../TrafficLightElement'
import './index.css'

interface TrafficLight {
    id: number,
    title: string,
    color: string
}

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