import { Link } from "react-router-dom";

export const Dashboard = () => {
    return (
        <div>
        <p>Dashboard Page</p>
        <Link to="/login">Go to Login</Link>
        </div>
    );
}