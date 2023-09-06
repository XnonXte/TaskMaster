interface Todo {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
  createdDate: string;
  updatedDate: string;
  userId: string;
}

interface ListItemProps {
  todo: Todo;
  onCheckChange: (id: string, checked: boolean) => void;
  onDeleteClick: (id: string) => void;
}

const ListItem = ({ todo, onCheckChange, onDeleteClick }: ListItemProps) => {
  const { id, completed, description, title, dueDate } = todo;

  const formatDueDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  return (
    <li
      className={`d-flex gap-2 justify-content-between align-items-center list-group-item rounded ${
        completed && "opacity-25"
      }`}
      onDoubleClick={() => {
        onCheckChange(id, !completed);
      }}
    >
      <input
        type="checkbox"
        name="completed"
        id="completed"
        className="form-check-input m-0 p-0"
        onChange={(e) => onCheckChange(id, e.target.checked)}
        checked={completed}
      />
      <div className="ms-1 me-auto">
        <div className="fw-bold">{title}</div>
        {description}
      </div>
      <div className="d-flex gap-2 align-items-center">
        <span>{formatDueDate(new Date(dueDate))}</span>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => onDeleteClick(id)}
        ></button>
      </div>
    </li>
  );
};

export default ListItem;
