
import './App.css'
import Navbar from"../src/components/navbar/index";
import Footer from"../src/components/footer/index";
//import IndividualIntervalsExample from"../src/components/carousel/index";
import CardHome from"../src/components/gridCard/index";
 import ExampleCarouselImage from './components/carousel';

function App() {
  

  return (
    <>
       <Navbar />

       <ExampleCarouselImage />

       <CardHome />
       
     
       <Footer />
    </>
  )
}

export default App
