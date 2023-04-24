import { Typography } from "@mui/material";
import Table from "./Table";

const Task2 = () => {
  const URL = `${import.meta.env.VITE_BASE_URL}/api/v1/operations/task2`;
  return (
    <>
      <Typography sx={{ mt: -5, color: "coral" }}>
        Task 2 : Male Users which have phone price greater than 10,000
      </Typography>
      <Table url={URL} />
    </>
  );
};

export default Task2;
