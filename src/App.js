import Wrapper from "./components/Wrapper";
import Buttons from "./components/Buttons";
import Items from "./components/Items";
import { Card } from "./components/Card";

const App = () => {
    return (
      <Wrapper className="bg-primary flex flex-col ai-center">
        <Items className="flex jc-center ac-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Items>
        <Buttons className=""></Buttons>
      </Wrapper>
    );
}

export { App };