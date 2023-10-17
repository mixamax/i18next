import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { useTranslation } from "react-i18next";
import { useEffect, Suspense, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { Counter } from "./counter/Counter";
import { LangContext } from "../PagesRouting";

export const LayoutPage = () => {
    const { i18n } = useTranslation();
    const URLparams = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { dataOfLangsList } = useContext(LangContext);

    const currentLang = URLparams.lng;
    const currentPage = URLparams.page;
    if (
        currentPage !== "home" &&
        currentPage !== "about" &&
        currentPage !== "info"
    ) {
        navigate("/404");
    }
    if (
        !dataOfLangsList
            .map((item) => item.lng)
            .some((lng) => lng === currentLang)
    ) {
        navigate("/404");
    }

    useEffect(() => {
        setIsLoading(true);
        i18n.changeLanguage(currentLang).then(() => setIsLoading(false));
    }, [currentLang]);

    return (
        <>
            <Suspense fallback={"...loading"}>
                <Header />
                {isLoading ? (
                    <CircularProgress style={{ marginTop: "50px" }} />
                ) : (
                    <Outlet />
                )}
                <Counter />
            </Suspense>
        </>
    );
};
