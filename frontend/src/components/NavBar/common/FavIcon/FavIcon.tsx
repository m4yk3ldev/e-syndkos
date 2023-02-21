import {Typography} from "@mui/material"
import {FC} from "react"
import * as React from "react";
import {Link} from "react-router-dom";
import "./FavIcon.css"
const FavIcon: FC = () => {
    return (
        <Link to={"/"} className="favicon">
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{display: {xs: 'none', sm: 'block'}}}
            >
                E-Syndkos
            </Typography>
        </Link>
    )
}
export default FavIcon