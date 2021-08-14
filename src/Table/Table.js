import { format, parse } from "date-fns";
import React from "react";
import mockData from "./mockData";
import "../style.scss";
import useTable from "../hooks/useTable";

const COLUMNS = [
  {
    accessor: "id",
    label: "ID",
  },
  {
    accessor: "name",
    label: "Name",
  },
  {
    accessor: ({ dateOfBirth }) =>
      format(parse(dateOfBirth, "yyyy-MM-dd", new Date()), "do MMMM yyyy"),
    label: "Date of Birth",
  },
  {
    accessor: "favouriteFood",
    label: "Favourite Food",
  },
];

function Table() {
  const { headers, rows } = useTable({ columns: COLUMNS, data: mockData });

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {headers.map(({ label }, index) => (
              <th key={index}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.cells.map((cell, index) => (
                <td key={index}>{cell.renderedValue}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
