import { BrowserRouter ,  Routes, Route } from 'react-router-dom';
import Home from './pages/general/Home';


function App() {
 

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/survey" render={({match})=>{
            return <About  />
        }} />
      
      
      </Routes>
    </BrowserRouter>
  )
}

export default App


function About() {
  return <>about</>   
}
