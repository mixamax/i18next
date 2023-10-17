import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { LangContext } from "../../PagesRouting";

export function BasicSelect() {
    const { dataOfLangsList } = useContext(LangContext);
    const URLparams = useParams();
    const currentPage = URLparams.page;
    const currentLang = URLparams.lng;

    return (
        <Box sx={{ minWidth: 100, flexGrow: 0 }}>
            <FormControl fullWidth size="small">
                <InputLabel
                    id="demo-simple-select-label"
                    sx={{ color: "white" }}
                >
                    Lng
                </InputLabel>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currentLang}
                    label="Lng"
                    defaultValue={currentLang}
                    sx={{ color: "white" }}
                >
                    {dataOfLangsList.map((item) => (
                        <MenuItem key={item.id} value={item.lng}>
                            <Link
                                to={`/${item.lng}/${currentPage}`}
                                style={{ color: "inherit" }}
                            >
                                {item.lng_name}
                            </Link>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
