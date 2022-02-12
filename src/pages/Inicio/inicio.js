import Info from "../../components/info/info";
import Banner from "./banner/banner";
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
        </>
    )
}

export default Inicio;