import Info from "../../components/info/info";
import NavBar from "../../components/navbar/navbar";
import Banner from "./banner/banner";
import SobreMi from "./sobreMi/sobreMi";



const Inicio = () => {
    return(
        <>
            <Info />
            {/* <NavBar/> */}
            <Banner />
            <SobreMi />
        </>
    )
}

export default Inicio;