import React, {useState, useEffect} from 'react'
import './App.css'
import Accordion from "./components/accordion"
import Backgroundpattern from './assets/styles/background-pattern-desktop';
import Backgroundmobile from './assets/styles/background-pattern-mobile';



function App(){
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.removeEventListener('resize', handleResize);
    }, []);
    return(
        <div>
         {isMobile ? <Backgroundmobile/> : <Backgroundpattern />}
         <Accordion/>
        </div>
        
    )
}
export default App;