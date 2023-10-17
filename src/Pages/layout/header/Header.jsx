import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { BasicSelect } from "./BasicSelect";
import { NavBar } from "./NavBar";

export const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <NavBar />
                    <BasicSelect />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
