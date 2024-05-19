import React, {useEffect, useState} from "react";
import axios from 'axios';


class Content extends useEffect, useState() {

}


function Main() {


    return (
        <ul>
            {products.map((product, index) => (
                <li key={index}>
                    <h2>{product.title}</h2>
                    <p>{product.content}</p>
                    <p>{product.id}</p>
                    <p>{product.price}</p>
                </li>
            ))}
        </ul>
    )
}

export default Main;