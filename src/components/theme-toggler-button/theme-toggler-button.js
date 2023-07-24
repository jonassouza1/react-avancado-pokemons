import React, { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { Button } from "../button/button"
import styled from "styled-components"
export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <Div themes={theme}>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} ></Button>
        </Div>
    )
}

const Div = styled.div`
${props => props.theme}
position:absolute;
top:10px;
right:10px;

`




