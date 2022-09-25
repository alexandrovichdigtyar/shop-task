import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import ProductForm from "./ProductForm/ProductForm";
import "./Header.scss";

function Header() {
   const [isAddition, setIsAddition] = useState(false);
   const emptyProduct = {
      name: "",
      imageUrl:"",
      count: "",
      width: "",
      height: "",
      weight: ""
   }

   const additionHandler = () => {
      setIsAddition(!isAddition);
   }

   return (
      <header className="header">
         <Link to="/" className="Header__logo">
             <img width="50px" height="50px" src={logo} alt="logo"/>
         </Link>
         <Button onClick={additionHandler}>
            Add new product
         </Button>
         {isAddition && (<ProductForm isOpen={isAddition} onClose={additionHandler} product={emptyProduct}/>)}
      </header>
   )
}

export default Header;