import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/PageLayout/Header";
import {
  decrement,
  increment,
  reset,
} from "../reduxToolkit/features/counter/counterSlice";
import Message from "./Message";

const UserList = () => {
  const counter = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  const [toggle, setToggle] = useState(false);

  const calculater = useMemo(() => {
    let number = 0;

    for (let i = 0; i < 500000000; i++) {
      number++;
    }

    return number;
  }, []);

  const handleMessage = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  console.log("User List Render", counter);

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="container">
          <div className="input-group">
            <button
              className="btn  btn-warning"
              type="button"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="count"
              aria-label="counter"
              value={counter}
            />

            <button
              className="btn btn-success"
              type="button"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
          </div>
          <button
            className="btn  btn-danger"
            type="button"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
        <div>
          {toggle ? "On" : "Off"}
          <br />
          <button
            className="btn  btn-warning"
            type="button"
            onClick={() => setToggle(true)}
          >
            Toggle Button Click
          </button>
        </div>
      </div>
      <div>
        <h1>for loop number pint: {calculater}</h1>
      </div>
      <Message handleMessage={handleMessage} count={count} />
    </>
  );
};

export default UserList;
