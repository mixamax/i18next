import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18next from "i18next";
import HttpApi from "i18next-http-backend";

i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ["en", "de", "ru", "uk"],
        fallbackLng: false,
        debug: true,
        ns: ["home", "about", "info", "lng"],
        backend: {
            loadPath: loadPath,
        },

        react: {
            useSuspense: true,
        },
    });

function loadPath(lng, namespace) {
    let path = "";
    if (namespace === "lng") {
        path = "https://test0xe4r23gf.kentronlabs.org/api/{{ns}}/{{lng}}/.json";
    } else {
        path = "https://test0xe4r23gf.kentronlabs.org/api/{{lng}}/{{ns}}/.json";
    }

    return path;
}
