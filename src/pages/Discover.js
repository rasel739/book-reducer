import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "../components/Book/Book";
import PageLayout from "../components/PageLayout/PageLayout";
import Preloader from "../components/Preloader";
import { fetchPosts } from "../reduxToolkit/features/postSlice/postSlice";

const Discover = () => {
  const dispatch = useDispatch();

  const { posts, loading, error } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <PageLayout>
      {loading && (
        <div>
          <Preloader />
        </div>
      )}
      {error && (
        <div>
          <h4>{error}</h4>
        </div>
      )}
      <div>
        {posts && posts.map((book) => <Book key={book.id} book={book} />)}
      </div>
    </PageLayout>
  );
};

export default Discover;
