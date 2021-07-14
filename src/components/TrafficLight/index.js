import './index.css'

const TrafficLight = props => {
    const {eachLight, active} = props
    return (
        <div className="traffic-light" style={{backgroundColor: `${eachLight.color}`, opacity: `${active? '': '0.5'}`}}></div>
    )
}

export default TrafficLight