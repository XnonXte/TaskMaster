const Footer = () => {
  return (
    <footer className="footer py-3 px-2 bg-tm-dark text-tm-light">
      <div className="container text-center">
        <p className="border-bottom pb-3 mt-3">
          This application is created using React and Bootstrap. Interested on
          contributing?{" "}
          <a
            target="_blank"
            href="https://github.com/XnonXte/TaskMaster/pulls"
            className="link link-tm-primary"
          >
            Open a PR!
          </a>
        </p>
        <span className="text-tm-primary">&copy; 2023 XnonXte</span>
      </div>
    </footer>
  );
};

export default Footer;
