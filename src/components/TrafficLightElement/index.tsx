import { TrafficLight } from '../../App'
import './index.css'

interface TrafficLightElementProps {
    eachLight: TrafficLight,
    active: boolean
}

const TrafficLightElement = (props: TrafficLightElementProps)  => {
    const {eachLight, active} = props
    return (
        <div className="traffic-light" style={{backgroundColor: `${eachLight.color}`, opacity: `${active? '': '0.5'}`}}></div>
    )
}

export default TrafficLightElement