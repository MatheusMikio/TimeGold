import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom"
import AdminView from "./pages/AdminView"
import EntepriseView from "./pages/EntepriseView"
import HomeView from "./pages/HomeView"
import RegisterEnterpriseView from "./pages/RegisterEnterpriseView"
import Container from "./components/layout/Container/Container"
import NavbarComponent from "./components/layout/Navbar/NavbarComponent"

function AppContent() {
  const location = useLocation();
  const isRegisterPage = location.pathname === "/cadastrar-empresa";

  return (
    <>
      {!isRegisterPage && <NavbarComponent/>}
      {isRegisterPage ? (
        <Routes>
          <Route path="/cadastrar-empresa" element={<RegisterEnterpriseView/>}/>
        </Routes>
      ) : (
        <Container>
          <Routes>
            <Route path="/" element={<HomeView/>}/>
            <Route path="/admin" element={<AdminView/>}/>
            <Route path="/:entepriseId" element={<EntepriseView/>}/>
          </Routes>
        </Container>
      )}
    </>
  );
}

function App() {

  return (
    <>
      <Router>
        <AppContent />
      </Router>
    </>
  )
}

export default App
