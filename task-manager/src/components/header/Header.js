import Button from "../button/Button"
import { useLocation } from "react-router-dom";

const Header = ({title, onclickAddTask, showAdd}) => {
    const location = useLocation()
    return (
            <header className="header">
                <h4>{title}</h4>
                { location.pathname === '/' && <Button text={showAdd ? 'Close':'Add Task'} color={showAdd ? 'red':'green'} onclick={onclickAddTask} />
                }
            </header>
            
    )
}

Header.defaultProps = {
    title : 'Alhamdulillah Task Tracker'
}

export default Header
