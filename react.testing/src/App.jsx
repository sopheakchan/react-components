import style from "../src/styles/Image.module.css"
import ImageComponent from "./components/ImageComponents"
import { NavBarComponent } from "./components/NavBarComponent"
import { CardComponent } from "./components/CardComponent"
import { FooterComponent } from "./components/FooterComponent"
import MainComponent from "./components/MainComponent"

function App() {
  //set function

  return (
    <>
      <NavBarComponent/>
      <div className="my-10">
      <MainComponent/>
      </div>
      <FooterComponent/>
      
      
    

    </>
  )
}

export default App
