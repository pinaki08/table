import Table from "react-bootstrap/Table";
import { IFrontdata } from "../../pages/Homepage/Home";
import {GoTriangleUp} from "react-icons/go"
import moment from "moment";
interface ITabledata {
  data: IFrontdata[];
}
  function TableFirst({ data }: ITabledata) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr className="tableStyle">
          <th>coments</th>
          <th>vote count</th>
          <th>up vote</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: IFrontdata, index) => {
          return (
            <tr>
              <td>{item?.num_comments}</td>
              <td>{item?.points}</td>
              <td> {item?.upvote}
                <GoTriangleUp />{" "}
              </td>
              <td>
                <b>{item?.title} </b>({item?.url}) by
                <b> ({item.author})</b>
                {moment().startOf("day").fromNow()}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TableFirst;
