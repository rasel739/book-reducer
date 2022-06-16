import React from "react";
import { Link } from "react-router-dom";
import SingleBook from "../components/Book/Book";
import PageLayout from "../components/PageLayout/PageLayout";
import books from "../fakeData/books.json";
const ReadingList = () => {
  return (
    <PageLayout>
      <p>
        Looks like you've finished all your books! Check them out in your{" "}
        <Link to="finish">finished books</Link> or{" "}
        <Link to="/">discover more</Link>.
      </p>

      {books.map((redeingList) => (
        <SingleBook key={redeingList.id} book={redeingList} />
      ))}
    </PageLayout>
  );
};

export default ReadingList;
