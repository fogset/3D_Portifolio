import styled from "styled-components";
import { Html } from "@react-three/drei";
function Loader() {
    return (
        <Html>
            <Container>
                <Spin />
            </Container>
        </Html>
    );
}

export default Loader;
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Spin = styled.div`
    width: 80px;
    height: 80px;
    border-width: 2px;
    opacity: 0.2;
    border-color: rgb(59 130 246);
    border-radius: 9999px;
    animation: spin 1s linear infinite;
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
