import React from "react";
import { useSelector } from "react-redux";

const Contacts = () => {
  const contacts = useSelector((state) => state.contacts);

  console.log(contacts);

  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry the Bird</td>
          <td>Habibi</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Contacts;
