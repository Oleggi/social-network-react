import React from "react";
import s from "./Preloader.module.css";

const Preloader = (props) => {
    return (
        <div className={s.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}

export default Preloader;