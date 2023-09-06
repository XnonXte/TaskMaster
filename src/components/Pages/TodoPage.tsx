import Navbar from "./_Navbar";
import Footer from "./_Footer";
import Todo from "../Todo/Todo";

const TodoPage = () => {
  return (
    <>
      <div className="wrapper">
        <main>
          <Navbar />
          <Todo />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default TodoPage;
