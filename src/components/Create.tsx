import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./create.css"
import Home from "./Home";

interface ResponseType {
  uuid1: string;
  uuid2: string;
}

const Create: React.FC = () => {

    const navigate=useNavigate()

  // const handleCreate = async (e: React.MouseEvent<HTMLButtonElement>) => {
  const handleCreate = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post<ResponseType>("https://codeport-backend.onrender.com/code/create");
      console.log("response sent")
      const { uuid1, uuid2 } = response.data;

      localStorage.setItem("uuid1", uuid1);
      localStorage.setItem("uuid2", uuid2);

      console.log("UUIDs saved:", { uuid1, uuid2 });

      navigate("/port")

    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <div>
      <div className="create">
        <button className="project" type="button" onClick={handleCreate}>
          <h1>Create a new project</h1>
        </button>
        <button className="collab" type="button" onClick={()=>{navigate("/home")}}>
          <h1>Collab</h1>
        </button>
        <Home />
      </div>
      
    </div>
  );
};

export default Create;
