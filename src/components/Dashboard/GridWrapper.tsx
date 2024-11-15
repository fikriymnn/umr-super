import React from "react";

function GridWrapper({ children }: { children?: any }) {
  return <div className="grid grid-cols-1 gap-5 md:grid-cols-3">{children}</div>;
}

export default GridWrapper;
