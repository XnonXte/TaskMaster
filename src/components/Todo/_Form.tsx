import { useState } from "react";

const DEBUG_USER = "64f4017bffe102779d1820f4";

interface TodoFormProps {
  onNewTodo: (
    title: string,
    description: string,
    dueDate: string,
    userId: string
  ) => void;
}

const TodoForm = ({ onNewTodo }: TodoFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  return (
    <section className="py-3 px-2 text-tm-light">
      <div className="container">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            try {
              onNewTodo(title, description, dueDate, DEBUG_USER);
            } catch (error) {
              alert(error);
              return;
            }

            setTitle("");
            setDescription("");
            setDueDate("");
          }}
        >
          <article className="d-flex flex-column gap-3">
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                placeholder="Add title..."
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                placeholder="Add description..."
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dueDate">Due Date</label>
              <input
                type="datetime-local"
                name="dueDate"
                id="dueDate"
                className="form-control"
                onChange={(e) => {
                  setDueDate(e.target.value);
                }}
                value={dueDate}
                required
              />
            </div>
            <button type="submit" className="btn btn-tm-primary">
              Add Todo <i className="bi bi-check2-square"></i>
            </button>
          </article>
        </form>
      </div>
    </section>
  );
};

export default TodoForm;
