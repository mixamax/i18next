import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useFetchContent = (contentURL, currentLang, page) => {
    const navigate = useNavigate();
    const [currentContent, setCurrentContent] = useState({
        isLoading: true,
        data: undefined,
        error: undefined,
    });
    async function fetchContentNow(url, lng, pageName) {
        try {
            setCurrentContent({
                ...currentContent,
                isLoading: true,
            });
            let responseJSON = await fetch(`${url}${lng}/${pageName}/`);
            if (responseJSON.status === 500) {
                navigate("/500");
            }
            if (responseJSON.status === 404) {
                navigate("/404");
            }

            let response = await responseJSON.json();
            if (response.Request === "Error") {
                navigate("/404");
            }
            setCurrentContent({
                ...currentContent,
                data: response,
                isLoading: false,
            });
        } catch (err) {
            console.log(err);
            setCurrentContent({
                ...currentContent,
                error: err,
                isLoading: false,
            });
        }
    }

    useEffect(() => {
        if (contentURL && currentLang) {
            fetchContentNow(contentURL, currentLang, page);
        }
    }, []);

    const { isLoading, data: { title = "", text = "", counter = "" } = {} } =
        currentContent;

    return { title, text, counter, isLoading, fetchContentNow };
};

export default useFetchContent;
