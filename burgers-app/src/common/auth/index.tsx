import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { useUserContext } from "../../contexts/user";

export const Auth = ({ children }: { children: ReactNode }) => {
    const user = useUserContext();

    return user 
        ? <>{children}</> 
        : <Typography variant="h6">Please <Link to="/sign-in">log in</Link> to see a content!</Typography>
}