import { Container, Box } from "@mui/material";
export const PAGE_404 = () => {
    return (
        <Container maxWidth="sm">
            <Box component="span" m={3} sx={{ fontSize: "20px", color: "red" }}>
                404 Not Found
            </Box>
        </Container>
    );
};
