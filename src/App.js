import Wrapper from "./components/Wrapper";
import Buttons from "./components/Buttons";
import Items from "./components/Items";
import { Card } from "./components/Card";
import { useState, useEffect } from "react";

const array = [0, 2, 3, 1, 1, 2, 0, 3, 2, 1, 1, 0, 0];

const App = () => {
  const [trueArray, setTrueArray] = useState([]);
  const [page, setPage] = useState(1);

  const previousPage = () => {
    if (page - 1 >= 0) {
      setPage((prev) => prev - 1);
      showCards();
    }
  };

  const nextPage = () => {
    if ((page + 1) * 9 < array.length) {
      setPage((prev) => prev + 1);
    }
  };

  const showCards = () => {
    let dummyArray = [];
    let last = array.length;

    if ((page + 1) * 9 > array.length) {
      last = array.length;
    } else {
      last = (page + 1) * 9;
    }

    dummyArray = array.slice(page * 9, last);
    console.log(dummyArray);
    setTrueArray(dummyArray);
  };

  useEffect(() => {
    showCards();
  }, [page]);

  useEffect(() => {
    console.log("changed");
  }, [trueArray]);

  return (
    <Wrapper
      id={page.toString()}
      className="bg-primary flex flex-col ai-center"
    >
      <Items id={trueArray.length} className="flex jc-center ac-center">
        {trueArray.map((item) => (
          <Card colorId={item} />
        ))}
      </Items>
      <Buttons className="">
        <button onClick={previousPage}>prev</button>
        <button onClick={nextPage}>next</button>
      </Buttons>
    </Wrapper>
  );
};

export { App };
