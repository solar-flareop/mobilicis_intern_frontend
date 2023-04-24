import { Typography } from "@mui/material";
import Table from "./Table";

const Task4 = () => {
  const URL = `${import.meta.env.VITE_BASE_URL}/api/v1/operations/task4`;
  return (
    <>
      <Typography sx={{ mt: -5, color: "coral" }}>
        Task 4 : Users which have a car of brand “BMW”, “Mercedes” or “Audi” and
        whose email does not include any digit
      </Typography>
      <Table url={URL} />
    </>
  );
};

export default Task4;
