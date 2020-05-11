//jshint esversion:6
import React from "react";
import "./search-filed.styles.css";

export const SearchField = ({handleChange, placeholder}) => (
    <input 
    className="search"
    type="search"
    onChange={handleChange}
    placeholder={placeholder}
     />
);