import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useDefaultLang = (url) => {
    const userLang = window.navigator.language.slice(0, 2);
    const navigate = useNavigate();

    const [defaultLang, setDefaultLang] = useState({
        isLoading: true,
        lang: undefined,
        data: undefined,
        error: undefined,
    });

    async function setDefaultLangNow(url, userLang) {
        try {
            setDefaultLang({
                ...defaultLang,
                isLoading: true,
            });

            let dataJSON = await fetch(url);
            if (dataJSON.status === 500) {
                navigate("/500");
            }
            if (dataJSON.status === 404) {
                navigate("/404");
            }
            let data = await dataJSON.json();
            if (data.Request === "Error") {
                navigate("/404");
            }
            const currentLang =
                data.filter((item) => item.lng === userLang)[0].lng || "en";
            const indexOfDefaultLang = data.filter(
                (item) => item.lng === currentLang
            )[0].lng_default;
            const lang = data[indexOfDefaultLang].lng;
            setDefaultLang({
                ...defaultLang,
                isLoading: false,
                lang: lang,
                data: data,
            });
        } catch (err) {
            console.log(err);

            setDefaultLang({
                ...defaultLang,
                isLoading: false,
                error: err,
            });
        }
    }

    useEffect(() => {
        if (url && userLang) {
            setDefaultLangNow(url, userLang);
        }
    }, []);

    const { isLoading, data, lang } = defaultLang;

    return { isLoading, data, lang };
};

export default useDefaultLang;
