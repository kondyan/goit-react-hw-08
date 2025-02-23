import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <h1 className={css.title}>Contact book welcome page</h1>
      </div>
    </>
  );
};

export default HomePage;
