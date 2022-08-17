import React, { useEffect, useState } from "react";

const ResizeDemo = () => {
  const [width, setWidth] = useState<null | number>(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div>
      <div>Ширина: {width}px</div>
    </div>
  );
};

export default ResizeDemo;
