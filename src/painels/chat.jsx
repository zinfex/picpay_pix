import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";

function Chat() {
    return (
        <div id="chatPainel">
            <Link to='/'><IoChevronBackCircleOutline size={50} color="white" /></Link>   
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod commodi a nisi quo tempora sunt, quam, aut molestiae quidem neque quisquam perferendis illo, hic tenetur minima placeat at excepturi!         
        </div>
    )
}

export default Chat;