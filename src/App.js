import './App.css';
import Router from "./router/Router";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemChangeContext} from "./Components/ItemChangeContext";
import {useEffect, useState} from "react";
import Header from "./Components/Header";


function App() {

    const [itemChangeContext, setItemChangeContext] = useState(false)

    useEffect(() => {
    }, [itemChangeContext]);

    let itemHasChange = ()=>{
        setItemChangeContext(true)
        setTimeout(()=>{
            setItemChangeContext(false)
        }, 5000)
    }

    return (
        <div className="App">
            <ItemChangeContext.Provider value={{itemChangeContext,itemHasChange}}>
                <Router/>
            </ItemChangeContext.Provider>
        </div>
      );
}

export default App;
