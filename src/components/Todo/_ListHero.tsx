interface ListHeroProps {
  username: string;
}

const ListHero = ({ username }: ListHeroProps) => {
  return (
    <header className="py-3 px-2 text-tm-light">
      <div className="container">
        <h4 className="text-center">
          <span className="bg-tm-dark p-1 rounded rounded-2">{username}'s</span>{" "}
          Todo List
        </h4>
        <div className="text-center">
          <span>
            Click on the checkbox or double click a todo to mark them as
            completed.
          </span>
          <hr />
        </div>
      </div>
    </header>
  );
};

export default ListHero;
