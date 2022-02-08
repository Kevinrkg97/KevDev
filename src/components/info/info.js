import './info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt , faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Info = () => {
    return (
        <div className='info'>
        <div className='container'>
        <a href='https://wa.me/+5215539650500/'>
                <div className='container'>
                <FontAwesomeIcon icon={faPhoneAlt} className='icon'/>
                    <h4>
                        +52 1 55 3965 0500
                    </h4>
                </div>
                </a>


                <a>

                <div className='container'>
                        <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                        <h4>
                            kevinrkg97@gmail.com
                        </h4>
                </div>    
                </a> 
       
        </div>
    </div>
    )
}

export default Info;