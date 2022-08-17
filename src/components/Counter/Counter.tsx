import React, { useEffect } from "react";

import Button from "@components/Button";
import { log } from "@utils/log";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  const handleClick = () => setCounter((prevState) => prevState + 1);

  useEffect(() => {
    log("Counter useEffect");
  }, [counter]);
  return (
    <div>
      <div>Нажали {counter} раз(а)</div>
      <Button onClick={handleClick}>Нажать</Button>
    </div>
  );
};

export default Counter;
