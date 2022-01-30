import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="font-mono text-yellow-500 p-4">
            <Link to={'/'}>./mashanz</Link>
        </header>
    );
}

export default Header;