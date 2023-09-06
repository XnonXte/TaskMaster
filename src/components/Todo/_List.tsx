import ListItem from "./_ListItem";

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

interface TodoListProps {
  todos: Todo[];
  onCheckChange: (id: string, checked: boolean) => void;
  onDeleteClick: (id: string) => void;
}

const List = ({ todos, onCheckChange, onDeleteClick }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <section className="py-3 px-2 text-tm-light">
        <div className="container">
          <span className="d-flex justify-content-center align-content-center">
            Nothing to show here ¯\_(ツ)_/¯
          </span>
        </div>
      </section>
    );
  }
  return (
    <section className="py-3 px-2 text-tm-light">
      <div className="container">
        <ul className="list-group list-group-flush d-flex flex-column gap-2">
          {todos.map((todo) => {
            return (
              <ListItem
                key={todo.id}
                todo={todo}
                onCheckChange={onCheckChange}
                onDeleteClick={onDeleteClick}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default List;
