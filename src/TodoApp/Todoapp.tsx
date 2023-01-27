import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const Todoapp = () => {
  const dispatch = useDispatch();
  let titleRef = useRef<HTMLInputElement>(null);
  let desRef = useRef<HTMLTextAreaElement>(null);
  // for data add in todo
  const todoData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleRef.current !== null && desRef.current !== null ) {
      if(titleRef.current.value=="" &&desRef.current.value==""){
          alert("Please fill all the field")
      }else{
        let obj = {
          title: titleRef.current.value,
          discription: desRef.current.value,
        };
        dispatch(addTodo(obj));
      }
    }
    e.currentTarget.reset();
  };
  return (
    <div>
      <h3 className="text-center mt-4">My Article</h3>
      <div className="col-lg-4 col-md-6 col-sm-6 col-xm-8 p-4 m-auto border mt-4 shadow mb-5 bg-body rounded">
        <form onSubmit={todoData}>
          <div className="mb-3">
            <label className="form-label">New Post </label>
            <input
              type="text"
              ref={titleRef}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <div className="form-floating">
              <textarea
                ref={desRef}
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Add todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default Todoapp;
