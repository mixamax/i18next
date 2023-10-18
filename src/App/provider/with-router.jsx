import { Suspense } from "react";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export const withRouter = (component) => () =>
    (
        <HashRouter>
            <Suspense fallback={<CircularProgress />}>{component()}</Suspense>
        </HashRouter>
    );
