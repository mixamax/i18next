import { Button, Box } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import useFetchContent from "../../../api/useFetchContent";
import { contentURL } from "../../../api/URL";
import { LangContext } from "../../PagesRouting";

export const Counter = () => {
    const { defaultLang } = useContext(LangContext);
    const [counter, setCounter] = useState(42);
    const URL = window.location.href;
    const LNG = URL.match(/\/\w\w\/home|\/\w\w\/about|\/\w\w\/info/);

    let currentLang;
    let activePage;
    if (LNG) {
        currentLang = LNG[0].slice(1, 3);
        activePage = LNG[0].slice(4);
    } else {
        currentLang = defaultLang;
        activePage = "home";
    }

    const { isLoading, counter: counterInit } = useFetchContent(
        contentURL,
        currentLang,
        activePage
    );

    useEffect(() => {
        setCounter(Number(counterInit));
    }, [counterInit]);

    const increment = () => {
        setCounter((counter) => counter + 1);
    };
    const decrement = () => {
        setCounter((counter) => counter - 1);
    };

    if (isLoading) return <div>....counter</div>;
    if (LNG === null) return <div></div>;
    return (
        <Box m={2} sx={{ fontSize: "24px" }}>
            <Box
                component="span"
                m={2}
                display="flex"
                flexDirection="column"
                sx={{ fontSize: "24px" }}
            >
                {counter}
            </Box>

            <Box
                sx={{ display: "flex", gap: "3rem", justifyContent: "center" }}
            >
                <Button variant="contained" color="primary" onClick={increment}>
                    +
                </Button>
                <Button variant="contained" color="primary" onClick={decrement}>
                    -
                </Button>
            </Box>
        </Box>
    );
};
