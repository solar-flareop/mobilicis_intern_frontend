import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 54 },
  { field: "first_name", headerName: "First name", width: 80 },
  { field: "last_name", headerName: "Last name", width: 105 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "gender", headerName: "Gender", width: 85 },
  { field: "income", headerName: "Income", width: 85 },
  { field: "city", headerName: "City", width: 120 },
  { field: "car", headerName: "Car", width: 100 },
  { field: "quote", headerName: "Quote", width: 280 },
  { field: "phone_price", headerName: "Phone ", width: 70 },
];

const Table = ({ url }) => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    try {
      const getData = async () => {
        const { data } = await axios.get(url);
        setRows(data.result);
      };
      getData();
    } catch (error) {
      console.log(error.message);
    }
  }, [url]);
  return (
    <div style={{ height: 425, width: "100%", overflowX: "hidden" }}>
      {rows.length > 0 ? (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      ) : (
        <CircularProgress size={70} color="success" />
      )}
    </div>
  );
};
export default Table;
