import { NextPage } from "next";
import MasterLayout from "@components/Layouts";

const HomePage: NextPage = () => {
  return (
    <MasterLayout title="Loc Mai">
      <p> GitHub: <a href="https://github.com/locmai" target="blank">locmai</a> </p>
      <p> LinkedIn: <a href="https://www.linkedin.com/in/locmai0201/" target="blank">locmai0201</a> </p>
    </MasterLayout>
  );
};

export default HomePage;