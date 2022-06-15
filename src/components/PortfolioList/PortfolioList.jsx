import React from "react";

import { DeveloperData } from "../../data/data.ts";

const PortfolioList = () => {
  const { portfolio } = DeveloperData;

  return (
    <>
      {portfolio.map((item) => (
        <li key={item.title}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </>
  );
};

export default PortfolioList;
