import React, { forwardRef, useState } from "react";

const Child = forwardRef((props, ref) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input type="text" ref={ref} value={value} placeholder={props.placeholder} />
    </div>
  );
});

export default Child;
