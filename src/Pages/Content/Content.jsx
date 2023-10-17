import { Container, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export const Content = () => {
    const { t } = useTranslation();
    const URLparams = useParams();
    const currentPage = URLparams.page;

    return (
        <Container
            maxWidth="sm"
            sx={{ display: "flex", flexDirection: "column" }}
        >
            <>
                {" "}
                <Box m={3} sx={{ fontSize: "20px" }}>
                    <Box
                        component="span"
                        m={3}
                        sx={{ fontSize: "20px", color: "red" }}
                    >
                        {t("title", { ns: "lng" })}
                        {":"}
                    </Box>

                    {t("title", { ns: currentPage })}
                </Box>
                <Box component="span" m={3} sx={{ fontSize: "16px" }}>
                    <Box component="span" sx={{ color: "red" }}>
                        {t("text", { ns: "lng" })}
                        {": "}
                    </Box>

                    {t("text", { ns: currentPage })}
                </Box>
                <Container
                    maxWidth="sm"
                    sx={{ display: "flex", flexDirection: "column" }}
                >
                    <Box component="span" m={0} sx={{ fontSize: "24px" }}>
                        {t("counter", { ns: "lng" })}
                    </Box>
                </Container>
            </>
        </Container>
    );
};
