import axios from "axios";
import React from "react";

const UpdateUser = async () => {
  return await axios.put(
    `http://localhost:3000/api/user/${localStorage.getItem("name")}`
  );
};

export default UpdateUser;
