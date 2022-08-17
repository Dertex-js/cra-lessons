import React, { useState } from "react";

import Counter from "@components/Counter";
import ResizeDemo from "@components/ResizeDemo";
import { Button } from "antd";

const PageLifeCycleExample = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleShow = () => setIsVisible(true);
  const handleHide = () => setIsVisible(false);

  React.useEffect(() => {}, []);

  return (
    <div>
      <Button onClick={handleShow}>Show</Button>
      <Button onClick={handleHide}>Hide</Button>
      {isVisible && <Counter />}
      {isVisible && <ResizeDemo />}
    </div>
  );
};

export default PageLifeCycleExample;
