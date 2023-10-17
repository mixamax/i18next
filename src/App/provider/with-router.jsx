import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export const withRouter = (component) => () =>
    (
        <BrowserRouter>
            <Suspense fallback={<CircularProgress />}>{component()}</Suspense>
        </BrowserRouter>
    );
