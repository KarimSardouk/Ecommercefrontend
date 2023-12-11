import { Navigate } from "react-router-dom";
import { getUserRole } from "../Util/GetUserData";
// import "../Styles.css";
const ProtectedRoute = ({ children, adminOnly = false }) => {

// check if authenticated , or if authenticated and adminOnly = true 

  return children;
};
export default ProtectedRoute;
