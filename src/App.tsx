import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import AdminView from "./pages/AdminView"
import EntepriseView from "./pages/EntepriseView"
import HomeView from "./pages/HomeView"
import Container from "./components/layout/Container"
import NavbarComponent from "./components/layout/NavbarComponent"

function App() {

  return (
    <>
      <Router>
        <NavbarComponent/>
        <Container>
          <Routes>
            <Route path="/" element={<HomeView/>}/>
            <Route path="/admin" element={<AdminView/>}/>
            <Route  path="/:entepriseId" element={<EntepriseView/>}/>
            {/* <Route path="/" element={</>}/> */}
          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App
