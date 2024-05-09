import { Route, Routes } from "react-router-dom";
import { Home, About, Projects, Contact } from "./pages";
import Navbar from "./components/Navbar";
import styled from "styled-components";
function App() {
    return (
        <Container>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Container>
    );
}

export default App;
const Container = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
`;
