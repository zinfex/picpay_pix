import { Link } from "react-router-dom";
import { BsChatDots } from 'react-icons/bs';

function High() {
    return (
        <div id="high">
            <img width={100} style={{ filter: 'brightness(100)'}} src="../src/imgs/picpayt.png"/>
            Olá, usuário

            <Link to='/chat' id="btnChat">
                <BsChatDots size={30} className="chaticon"/>
            </Link>
        </div>
    )
}

export default High