import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Games from "./pages/games";
import GameDetail from "./pages/gameDetail";
import About from "./pages/about";
import FirstBlock from "./pages/firstBlock";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/games'} element={<GameDetail/>}/>
                    <Route path={'/project'} element={<Games/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/first'} element={<FirstBlock/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
