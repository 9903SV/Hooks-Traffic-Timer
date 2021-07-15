import Blink from 'react-blink-text';
import './index.css'

interface Props {
    count: number,
    title: string
}

const CounterContainer = (props: Props) => {
    const {count, title} = props
    return (
        <div className="counter-container">
            {count>3? (
                <span className="respective-sign" role="img">🚶</span>
            ) : (
                ((title === 'stop')? (
                    <Blink text={<span className="respective-sign" role="img">✋</span>}></Blink>
                ) : (
                    <span className="respective-sign" role="img">✋</span>
                ))
            )}
            <span className='count-element' >{count>0? count: ''}</span>
        </div>
    )
}

export default CounterContainer