// import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LayoutPage } from "./layout";
import { PAGE_404 } from "./404_page";
import { PAGE_500 } from "./500_page";
import useDefaultLang from "../api/useDefaultLang";
import { CircularProgress } from "@mui/material";
import { createContext } from "react";
import { langListURL } from "../api/URL";
import { Content } from "./Content/Content";

export const LangContext = createContext("null");

export const PagesRouting = () => {
    const {
        isLoading,
        data: dataOfLangsList,
        lang: defaultLang,
    } = useDefaultLang(langListURL);

    if (isLoading) return <CircularProgress />;

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to={`/${defaultLang}/home`}></Navigate>}
                ></Route>
                <Route
                    path="/:lng/:page"
                    element={
                        <LangContext.Provider
                            value={{ dataOfLangsList, defaultLang }}
                        >
                            <LayoutPage />
                        </LangContext.Provider>
                    }
                >
                    <Route path="/:lng/:page" element={<Content />}></Route>
                </Route>
                <Route path="/404" element={<PAGE_404 />}></Route>
                <Route path="*" element={<PAGE_404 />}></Route>
                <Route path="/500" element={<PAGE_500 />}></Route>
            </Routes>
        </>
    );
};
