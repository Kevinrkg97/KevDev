import './sobreMi.css';
import profile from './assets/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SobreMi = () => {
    return(
        <div className='about'>
            <div className='container'>
                <h2>Sobre Mí</h2>
                <div className='content'>
                    <div className='text'>
                        <br />
                        <p>Mi nombre es <strong>Roberto Kevin Guzmán</strong>, tengo <strong>24 años</strong> y soy de la <strong>CDMX</strong>.</p>
                        <br />
                        <p>Soy un <strong>Desarrollador Full Stack</strong> que inicio su experiencia en 2020, tras la pandemia aprendí a ser bastante autodidacta; me gusta conocer nuevas tecnologías y mejorar en lo que hago.</p>
                        <br />
                        <p>Me enfoco principalmente en el desarrollo web y móvil aunque estoy en proceso de aprendizaje para convertirme en científico de datos.</p>
                        <br />
                        <p>Me considero una persona bastante curiosa, perfeccionista y colaborativa.</p>
                        <div className='icons'>
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" />                        </div>
                    </div>
                    <img src={profile} alt='profile'></img>
                </div>
            </div>
        </div>
    )
}

export default SobreMi;