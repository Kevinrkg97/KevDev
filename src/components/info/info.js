import './info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Info = () => {
    return (
        <div className='info'>
        <div className='container'>
                <div className='container'>
                <FontAwesomeIcon icon={faPhoneAlt} className='icon'/>
                <h4>
                    +52 1 55 39 65 0500
                </h4>
                </div>
                <div className='container'>

                <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                <h4>
                    kevinrkg97@gmail.com
                </h4> 
                </div>           
        </div>
    </div>
    )
}

export default Info;