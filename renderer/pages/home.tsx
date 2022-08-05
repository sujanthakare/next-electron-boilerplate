import React from "react";

import { addUser, fetchUsers } from "../data/user";
import { Button } from "@mui/material";

function Home() {
  return (
    <React.Fragment>
      <Button
        variant="contained"
        onClick={() => {
          fetchUsers().then((users) => {
            console.log("users", users);
          });
        }}
      >
        refresh users
      </Button>

      <Button
        variant="contained"
        onClick={() => {
          addUser({
            name: "sujan",
          }).then((user) => {
            console.log("USER", user);
          });
        }}
      >
        Add user
      </Button>
    </React.Fragment>
  );
}

export default Home;
