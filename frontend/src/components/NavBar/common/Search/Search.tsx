import {FC} from "react";
import SearchIcon from "@mui/icons-material/Search";
import {SearchIconWrapperStyled, SearchStyled, StyledInputBaseStyled} from "./styled";

const Search: FC = () => {
    return (
        <SearchStyled>
            <SearchIconWrapperStyled>
                <SearchIcon/>
            </SearchIconWrapperStyled>
            <StyledInputBaseStyled
                placeholder="Search…"
                inputProps={{'aria-label': 'search'}}
            />
        </SearchStyled>
    )
}

export default Search;