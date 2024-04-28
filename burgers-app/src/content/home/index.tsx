import Typography from "@mui/material/Typography";
import { PageWrapper } from "../../common/page-wrapper";
import { useUserContext } from "../../contexts/user";

export const Home = () => {
    const user = useUserContext();

    return (
        <PageWrapper>
            <Typography variant="h5" sx={{ textAlign: 'center' }}>Welcome {user ? user.email : 'stranger'} to Burgers App!</Typography>
        </PageWrapper>
    )
}