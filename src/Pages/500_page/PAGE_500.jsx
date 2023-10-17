import { Container, Box } from "@mui/material";

export const PAGE_500 = () => {
    return (
        <Container maxWidth="sm">
            <Box component="span" m={3} sx={{ fontSize: "20px", color: "red" }}>
                500 Internal Server Error
            </Box>
        </Container>
    );
};
