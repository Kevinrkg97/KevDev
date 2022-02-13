import Info from "../../components/info/info";
import Banner from "./banner/banner";
import Habilidades from "./habilidades/habilidades";
import Servicios from "./servicios/servicios";
import SobreMi from "./sobreMi/sobreMi";



const Inicio = () => {
    return(
        <>
            <Info />
            {/* <NavBar/> */}
            <Banner />
            <SobreMi />
            <Servicios />
            <Habilidades />
        </>
    )
}

export default Inicio;