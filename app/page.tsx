import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuienesSomos from "./components/QuienesSomos";
import NuestraLabor from "./components/NuestraLabor";
import GaleriaAyudas from "./components/GaleriaAyudas";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuienesSomos />
        <NuestraLabor />
        <GaleriaAyudas />
        <Galeria />
      </main>
      <Footer />
    </>
  );
}
