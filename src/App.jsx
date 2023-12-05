import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer"
import styled from "styled-components";

const StyledText = styled.h1`
    font-family: "Monsterrat", sans-serif;
    font-size: 30px;
`;
function App() {
return(
<div>
<div>
<PortfolioContainer/>
</div>
<div>
<Footer/>
</div>
</div>
)
};

export default App;
