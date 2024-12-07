import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { DeleteTaskById, GetAllTask } from "./api";
import { useNavigate } from "react-router-dom";

export default function BasicTable() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [serverData, setServerData] = React.useState([]);
  const Navigate = useNavigate();

  const handleUpdate = async (item) => {
    Navigate("/update", { state: item._id });
  };

  const handleDelete = async (id) => {
    try {
      const { message, success } = await DeleteTaskById(id);
      if (success?.status == false) {
        //success notify
        alert(message, "error");
      } else {
        //error notify
        alert(message, "success");
      }
    } catch (err) {
      alert("failed to delete task ", err);
    }
    fetchAllTask();
  };

  const fetchAllTask = async () => {
    try {
      const { data } = await GetAllTask();
      setServerData(data);
    } catch (err) {
      console.error();
    }
  };

  React.useEffect(() => {
    fetchAllTask();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 640 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>UserName</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error Loading..</p>}
          {serverData?.length > 0 ? (
            serverData.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.username}
                </TableCell>
                <TableCell align="right">{item.email}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    onClick={() => handleUpdate(item)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>
                <p> no data found </p>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
