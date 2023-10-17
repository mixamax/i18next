import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { withRouter } from "./provider/with-router";
import { PagesRouting } from "../Pages/PagesRouting";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";

function App() {
    return (
        <div className="App">
            <Suspense fallback={<CircularProgress />}>
                <PagesRouting />
            </Suspense>
        </div>
    );
}

export default withRouter(App);
