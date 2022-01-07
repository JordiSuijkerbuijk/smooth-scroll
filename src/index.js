import { useState } from "react";

import "./style";
import Smooth from "./components/smooth/smooth";
import Stacked from "./components/stacked/Stacked";

export default function Index() {
  const [stackedCheckbox, setStackedCheckbox] = useState(false);

  console.log("stackedCheckbox", stackedCheckbox);

  return (
    <>
      <div
        class="checkbox"
        onClick={() => {
          setStackedCheckbox(!stackedCheckbox);
        }}
      >
        stacked
      </div>
      {stackedCheckbox ? <Smooth /> : <Stacked />}
    </>
  );
}
