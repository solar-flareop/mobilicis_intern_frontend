import { Typography } from "@mui/material";
import Table from "./Table";

const Task1 = () => {
  const URL = `${import.meta.env.VITE_BASE_URL}/api/v1/operations/task1`;
  return (
    <>
      <Typography sx={{ mt: -5, color: "coral" }}>
        Task 1 : Users which have income lower than $5 USD and have a car of
        brand “BMW” or “Mercedes”
      </Typography>
      <Table url={URL} />
    </>
  );
};

export default Task1;
