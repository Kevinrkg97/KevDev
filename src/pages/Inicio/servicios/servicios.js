import './servicios.css';
import web from './assets/web.svg';
import ia from './assets/ia.svg';
import mobile from './assets/mobile.svg';

const Servicios = () => {
    return ( 
    <div className='servicios'>
        <div className="cards">
                <div className="card">
                    
                    <span></span>
                    <div className="content">
                        <div className="imgCard">
                            <img src={web} alt="web"/>
                        </div>
                        <h3>Full Stack</h3>
                        <br />
                        <p>Trabajo principalmente en FrontEnd con ReactJs, de igual forma tengo conocimiento en Js, HTML, CSS.</p>
                        <p>En cuanto a BackEnd tengo habilidad con Python (Flask), NodeJs, creación de Api's, PHP.</p>
                    </div>
                </div>
                <div className="card">
                    <span></span>
                    <div className="content">
                    <div className="imgCard">
                        <img src={ia} alt="ia" />
                    </div>
                        <h3>Ciencias de Datos</h3>
                        <br />
                        <p></p>
                    </div>
                </div>
                <div className="card">
                    <span></span>
                    
                    <div className="content">
                        <div className="imgCard">
                            <img src={mobile} alt="mobile" />
                        </div>
                        <div className='text'>
                            <h3>Desarrollo Móvil</h3>
                            <br />
                            <p>Trabajo principalmente con Flutter y tengo conocimiento con React Native.</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
)}

export default Servicios;