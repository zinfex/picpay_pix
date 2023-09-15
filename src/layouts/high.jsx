import { Link } from "react-router-dom";

function High() {
    return (
        <div id="high">
            <img width={100} src="../src/imgs/picpayt.png"/>
            Olá, usuário

            <Link to='/chat' id="btnChat">
                <img src="../src/imgs/chat.svg"/>
            </Link>
        </div>
    )
}

export default High