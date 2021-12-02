import { Link, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";

import Aside from "../components/Aside";
import Card from "../components/Card";

const Home: NextPage = () => {
  return (
    <>
      <Aside />
      <Card />
      <Text>
        <Link href="/">Lorem ipsum dolor sit</Link>, amet consectetur
        adipisicing elit. Animi enim, expedita ut deserunt suscipit voluptas,
        asperiores quibusdam hic accusantium dolor laudantium commodi! Provident
        delectus ducimus dolorum repellat dolores, accusamus cum.
      </Text>
    </>
  );
};

export default Home;
