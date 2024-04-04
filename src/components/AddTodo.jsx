import { useState } from "react";

let AddTodo = ({ btnClick }) => {
  let [InputData, SetInputData] = useState();
  let [DateData, SetDateData] = useState();

  let inputOnChange = (e) => {
    SetInputData(e.target.value);
  };

  let dateOnChange = (e) => {
    SetDateData(e.target.value);
  };

  return (
    <>
      <div className="col-lg-6">
        <input
          type="text"
          placeholder="Enter your task"
          value={InputData}
          onChange={inputOnChange}
        />
      </div>

      <div className="col-lg-3">
        <input type="date" onChange={dateOnChange} value={DateData} />
      </div>

      <div className="col-lg-3 ">
        <button
          className="btn btn-success"
          onClick={() => {
            SetInputData("");
            SetDateData("");
            btnClick(InputData, DateData);
          }}
        >
          Add Item
        </button>
      </div>
    </>
  );
};
export default AddTodo;
