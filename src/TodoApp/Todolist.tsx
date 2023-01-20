import React from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "./todoSlice";
import { state } from "./typeprops";

const Todolist = () => {
  let useAppSelector: TypedUseSelectorHook<state> = useSelector;
  const state = useAppSelector((state) => state);
  const dispatch = useDispatch();
//   for remove item
  const deleteItem = (i: number) => {
    dispatch(deleteTodo(i));
  };
  return (
    <div className="col-lg-4 col-md-6 col-sm-6  col-xm-8 m-auto ">
      {state.todoSliceRedducer.todoarr.map((item, i) => {
        return (
          <>
            <div
              className="card shadow p-3 mb-5 bg-body rounded"
              style={{ width: "18rem;" }}
            >
              <div className="card-body ">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">{item.title}</h5>
                  <span onClick={() => deleteItem(i)}>
                    <i className="bi bi-trash3-fill fs-4 text-danger"></i>
                  </span>
                </div>
                <p className="card-text">{item.discription}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Todolist;
