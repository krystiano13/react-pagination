import Wrapper from "./components/Wrapper";
import Buttons from "./components/Buttons";
import Items from "./components/Items";
import { Card } from "./components/Card";
import { useState, useEffect } from "react";

const array = [0, 2, 3, 1, 1, 2, 0, 3, 2, 1, 1, 0, 0];

const App = () => {
  const [trueArray, setTrueArray] = useState([]);
  const [page, setPage] = useState(0);

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
    setTrueArray(dummyArray);
  };

  useEffect(() => {
    showCards();
  }, [page]);

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
      <Buttons className="flex jc-center ai-center">
        <button
          className="m-2 font-head f-m p-1 pl-5 pr-5 br-1 bg-secondary color c-pointer"
          onClick={previousPage}
        >
          prev
        </button>
        <p className="m-2 font-other f-400 f-xl">{page}</p>
        <button
          className="m-2 font-head f-m p-1 pl-5 pr-5 br-1 bg-secondary color c-pointer"
          onClick={nextPage}
        >
          next
        </button>
      </Buttons>
    </Wrapper>
  );
};

export { App };
