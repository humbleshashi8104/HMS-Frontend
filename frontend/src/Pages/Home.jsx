import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
const Home = () => {
const navigate = useNavigate();
const isAuthenticated= useContext(Context);
if(isAuthenticated.isAuthenticated===false){
  navigate("/login");
}
  return (
    <>
      <Hero
        title={
          "Welcome to MediCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;

