"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const GetUser = async () => {
  const [name, setName] = useState("");
  useEffect(() => {
    setName(localStorage.getItem("name") || "");
  }, []);
  return await axios.get(`http://localhost:3000/api/user/${name}`);
};

export default GetUser;
