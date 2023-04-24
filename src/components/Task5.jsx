import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const columnsPopulation = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "city", headerName: "City", width: 150 },
  { field: "count", headerName: "Count", width: 60 },
];
const columnsAvgSalary = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "city", headerName: "City", width: 150 },
  { field: "averageIncome", headerName: "Avg. Income", width: 100 },
];

const URL = `${import.meta.env.VITE_BASE_URL}/api/v1/operations/task5`;

const Task5 = () => {
  const [rowPopulation, setRowPopulation] = useState([]);
  const [rowAvgSalary, setRowAvgSalary] = useState([]);
  const matches = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    try {
      const getData = async () => {
        const { data } = await axios.get(URL);
        setRowPopulation(data.result.resultCities);
        setRowAvgSalary(data.result.resultAvgIncome);
      };
      getData();
    } catch (error) {
      console.log(error.message);
    }
  }, [URL]);
  return (
    <>
      <Typography sx={{ mt: -5, color: "coral" }}>
        Task 5 : Show the data of top 10 cities which have the highest number of
        users and their average income
      </Typography>
      {rowPopulation.length > 0 && rowAvgSalary.length > 0 ? (
        <div style={matches ? { display: "flex", gap: 40 } : {}}>
          <div
            style={{
              height: 425,
              width: "100%",
              overflowX: "hidden",
              marginBottom: "3rem",
            }}
          >
            <DataGrid
              rows={rowPopulation}
              columns={columnsPopulation}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </div>

          <div style={{ height: 425, width: "100%", overflowX: "hidden" }}>
            <DataGrid
              rows={rowAvgSalary}
              columns={columnsAvgSalary}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </div>
        </div>
      ) : (
        <CircularProgress size={70} color="success" />
      )}
    </>
  );
};

export default Task5;
