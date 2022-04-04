import { Button } from "react-bootstrap";
import React, { useState } from "react";

const TodosList = ({
  todos,
  setTodos,
  todosPerPage,
  activePage,
  setActivePage,
  lastBtnPagination,
}) => {
  const [editing, setEditing] = useState(false); // controls if edit mode is on/off
  const [editInputValue, setEditInputValue] = useState(""); // for editing input Value

  // remove Task from the list
  const removeHandler = (id) => {
    if (!editing) {
      setTodos(
        todos.filter((todo) => {
          return todo.id !== id;
        })
      );
    } else {
      const arr = todos.map((todo) => {
        if (todo.id === id) {
          todo.editMode = false;
          setEditing(false);
        }
        return todo;
      });
      setTodos(arr);
    }

    // // Reduce pagination by one when the last item is deleted from the last page
    if ((todos.length - 1) % 5 === 0 && activePage === lastBtnPagination) {
      setActivePage(activePage - 1);
    }
  };

  const editHandler = (id) => {
    const selected = todos.map((todo) => {
      if (todo.id === id) {
        !todo.editMode ? (todo.editMode = true) : (todo.editMode = false);
        if (todo.editMode) {
          setEditInputValue(todo.task);
          setEditing(true);
        } else {
          todo.task = editInputValue;
          setEditing(false);
        }
      }

      return todo;
    });
    setTodos(selected);
  };

  const checkboxHandler = (id) => {
    const selectedTodo = todos.map((todo) => {
      if (todo.id === id) {
        !todo.done ? (todo.done = true) : (todo.done = false);
      }
      return todo;
    });
    setTodos(selectedTodo);
  };

  //activePage is responsible for rendering items correctly
  let end = activePage * todosPerPage;
  let start = end - todosPerPage;
  return (
    <>
      {todos.slice(start, end)?.map((item) => {
        return (
          <div
            key={item.id}
            className="bg-success bg-opacity-10 rounded-3 p-lg-2 d-flex mt-3 align-items-center"
          >
            {item.editMode ? (
              <input
                defaultValue={item.task}
                onChange={(e) => setEditInputValue(e.target.value)}
              />
            ) : (
              <span
                style={{
                  fontSize: "24px",
                  minWidth: "100px",
                  textDecoration: item.done ? "line-through" : "",
                }}
              >
                {item.task}
              </span>
            )}
            <input onChange={() => checkboxHandler(item.id)} type="checkbox" />
            <Button
              onClick={() => removeHandler(item.id)}
              className="m-lg-2"
              size="sm"
              variant="danger"
            >
              {item.editMode ? "cancel" : "remove"}
            </Button>
            <Button
              onClick={() => editHandler(item.id)}
              className=""
              size="sm"
              variant="info"
            >
              {item.editMode ? "save" : "edit"}
            </Button>
          </div>
        );
      })}
    </>
  );
};

export default TodosList;
