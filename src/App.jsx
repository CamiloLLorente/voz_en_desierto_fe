import { BrowserRouter ,  Routes, Route } from 'react-router-dom';
import { GlobalProvider } from "./context/GlobalState";
import Home from './pages/general/Home';
import Survey from './pages/survey/Survey';
import Header from './components/general/header/Header';



function App() {
 

  return (
    <GlobalProvider>
      <Header />
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        
      
      
      </Routes>
    </BrowserRouter>
    </GlobalProvider>
  )
}

export default App


function About() {
  return <>about</>   
}
