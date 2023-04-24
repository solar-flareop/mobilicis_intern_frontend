import { Typography } from "@mui/material";
import Table from "./Table";
const Task0 = () => {
  const URL = `${import.meta.env.VITE_BASE_URL}/api/v1/store/users`;
  return (
    <>
      <Typography sx={{ mt: -5, color: "coral" }}>Home : All Users</Typography>
      <Table url={URL} />
    </>
  );
};

export default Task0;
