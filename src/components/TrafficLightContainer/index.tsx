import TrafficLightElement from '../TrafficLightElement'
import './index.css'

type TrafficLight = {
    id: number,
    title: string,
    color: string
}

const TrafficLightContainer = (props: {trafficLightsList: TrafficLight[], title: string}) => {
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