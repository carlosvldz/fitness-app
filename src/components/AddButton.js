import React from "react";
import addImg from "../images/add.png";
import "./styles/AddButton.css";
import { Link } from "react-router-dom";

const AddButton = () => (
  <Link to="/exercise/new">
    <img src={addImg} className="Fitness-Add" alt="Add button exercise" />
  </Link>
);

export default AddButton;
