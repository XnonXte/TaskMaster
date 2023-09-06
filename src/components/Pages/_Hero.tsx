const Hero = () => {
  return (
    <header className="py-3 px-2 bg-tm-secondary">
      <div className="container text-center">
        <img
          src="./src/assets/logo.jpg"
          alt="Logo"
          className="rounded d-none d-md-inline"
          style={{ maxWidth: "75px" }}
        />
        <section className="mt-3">
          <h2>
            Do your task with {""}
            <span className="text-tm-success">TaskMaster</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            eaque obcaecati, rem laudantium consequuntur fugiat iusto id
            perferendis ut eum illo eius, quae consequatur. Commodi nesciunt
            quaerat libero harum dolorum!
          </p>
        </section>
      </div>
    </header>
  );
};

export default Hero;
