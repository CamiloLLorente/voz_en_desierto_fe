import { BrowserRouter , HashRouter, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from "./context/GlobalState";
import Home from './pages/general/Home';
import Survey from './pages/survey/Survey';
import Header from './components/general/header/Header';



function App() {
 

  return (
    <GlobalProvider>
      <Header />
      <HashRouter>
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        {/* <Route path="/survey" element={<Survey />} /> */}
        <Route path="/survey/:city/:id" element={<Survey />}  />
        
      
      
      </Routes>
    </HashRouter>
    </GlobalProvider>
  )
}

export default App


function About() {
  return <>about</>   
}
