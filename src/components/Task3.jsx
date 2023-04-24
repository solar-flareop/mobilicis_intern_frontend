import { Typography } from "@mui/material";
import Table from "./Table";

const Task3 = () => {
  const URL = `${import.meta.env.VITE_BASE_URL}/api/v1/operations/task3`;
  return (
    <>
      <Typography sx={{ mt: -5, color: "coral" }}>
        Task 3 : Users whose last name starts with “M” and has a quote character
        length greater than 15 and email includes his/her last name
      </Typography>
      <Table url={URL} />
    </>
  );
};

export default Task3;
