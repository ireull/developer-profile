import React from "react";
import Quote from "../Quote/Quote";

const QuoteList = ({ favoriteQuotes }) => {
  return (
    <>
      {favoriteQuotes.map((quote) => (
        <Quote subtitle={quote.text} title={quote.title} key={quote.id} />
      ))}
    </>
  );
};

export default QuoteList;
