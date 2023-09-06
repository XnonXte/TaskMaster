const _FormHero = () => {
  const currentDate = () =>
    new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <header className="py-3 px-2 bg-tm-dark text-tm-light">
      <div className="container d-flex justify-content-between align-items-start">
        <div>
          <h2>Add New Todo!</h2>
          <span className="lead">How are you planning your day?</span>
        </div>
        <div>
          <h5>{currentDate()}</h5>
        </div>
      </div>
    </header>
  );
};

export default _FormHero;
