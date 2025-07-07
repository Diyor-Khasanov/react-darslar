import React, { useEffect, useState } from "react";

import DataTable from "./components/DataTable";
// componentDidMount
// componentDidUpdate
// componentWillUnmount

// [] => faqat bir marta ishlaydi (mounting)
// [state] => har safar state o‘zgarsa ishlaydi (updating)
// return ichida => component o‘chirilganda ishlaydi (unmounting)

// | Narsa           | Ma’nosi                         |
// | --------------- | ------------------------------- |
// | Side effect     | React tashqarisidagi ish        |
// | useEffect       | Side effectlarni boshqarish     |
// | useLayoutEffect | DOM chizilishidan oldin ishlash |
// | Axios           | API chaqirish uchun kutubxona   |

const App = () => {
  const [state, setState] = useState(0);
  const [scroll, setScroll] = useState(0);

  // componentDidMount
  useEffect(() => {
    console.log("Component did mount");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("Component did update");
  }, [state]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      const interval = setInterval(() => {
        console.log("Component will unmount");
      }, 1000);

      clearInterval(interval);
      console.log("Cleanup function called");
    };
  });

  useEffect(() => {
    function handleScroll() {
      setScroll(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="test">
        <button onClick={() => setState((prev) => prev + 1)}>click</button>

        <header
          style={{ backgroundColor: scroll > 100 ? "green" : "orange" }}
        ></header>
      </div>



      <DataTable />
    </div>
  );
};

export default App;
