import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import AddTodo from "./components/AddTodo.jsx";
import ListItems from "./components/ListItems.jsx";
import { useState } from "react";

let App = () => {
  // let [todoListItems, StatetodoListItems] = useState([]);

  let todoListItems = [
    {
      name: "Complete React today",
      date: "20/03/2024",
    },
    {
      name: "Buy milk",
      date: "21/03/2024",
    },
    {
      name: "Recharge internet",
      date: "22/03/2024",
    },
  ];

  let AddBtnOnClickHandler = (task, dates) => {
    const newTodoItems = [...todoListItems, { name: task, date: dates }];
    StatetodoListItems(newTodoItems);
    // console.log(todoListItems);
    // console.log(task, dates);
  };

  return (
    <div className="container">
      <div className="row mx-5">
        <div className="col-lg-12 my-5">
          <h1>my todo app</h1>
        </div>
        <AddTodo btnClick={AddBtnOnClickHandler}></AddTodo>
      </div>
      <ListItems items={todoListItems}></ListItems>
    </div>
  );
};

export default App;
