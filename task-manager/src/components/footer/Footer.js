import { Link } from "react-router-dom";

const Footer = ({onAdd}) => {
    
    return (
        <footer>
            <p>Copyrights &copy; 2021</p>
            <Link to="/about">About us</Link>
        </footer>
    )
}

export default Footer
