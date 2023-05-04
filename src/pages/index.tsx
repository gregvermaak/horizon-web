import Header from "@/components/Header";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden dark:bg-gray-800">
      <Header />
    </div>
  );
};

export default Home;
