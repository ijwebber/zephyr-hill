import React from "react";
import './Page.css';

function Page(props) {
    let bg = props.bg ? props.bg : "white";
    let ht = props.ht ? props.ht + "vh": "min(max(650px, 100vh), 1200px)";
    let style = !props.ctr ? {backgroundColor: bg, height: ht} : {backgroundColor: bg, height: ht, display: "flex", alignItems: "center", justifyContent: "center"};

    return (
        <div className="mobilePage" style={style} name="Page">
            {props.children}
        </div>
    );
}


export default Page;