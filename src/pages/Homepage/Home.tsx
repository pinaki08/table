import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import TableFirst from "../../Component/Table/Table";
import Paginate from "./Pagination";

export interface IFrontdata {
  num_comments: number;
  points: number;
  upvote: string;
  title: string;
  url: string;
  author: string;
  created_at: number;
  created_at_i: number;
}
export const Home = () => {
  const [data, setData] = useState<any>([]);
  const [loader, setLoader] = useState(false);

  async function getDataFromAPI() {
    setLoader(true);
    await fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setLoader(false);
        setData(result?.hits);
      });
  }

  useEffect(() => {
    getDataFromAPI();
  }, []);

  return (
    <div>
      <Container>
        {loader ? <Spinner animation={"border"} /> : <TableFirst data={data} />}

        <Paginate />
      </Container>
    </div>
  );
};
