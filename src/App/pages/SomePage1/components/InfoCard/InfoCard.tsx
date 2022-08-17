import React from "react";

import Button from "@components/Button";
import { log } from "@utils/log";

const InfoCard = () => {
  return (
    <div>
      InfoCard
      <Button onClick={() => log("Clicked!")}>Click me</Button>
    </div>
  );
};

export default InfoCard;
