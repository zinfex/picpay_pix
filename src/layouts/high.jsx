import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function High() {
    return (
        <div id="high">
            Olá, usuário

            <Link to='/'>Home</Link>
        </div>
    )
}

export default High