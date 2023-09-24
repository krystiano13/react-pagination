import Wrapper from "./components/Wrapper";
import Buttons from "./components/Buttons";
import Items from "./components/Items";

const App = () => {
    return (
        <Wrapper className="bg-primary"> 
            <Items className=""></Items>
            <Buttons className=""></Buttons>
        </Wrapper>
    )
}

export { App };