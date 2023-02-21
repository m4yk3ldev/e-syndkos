import { FC, useEffect } from "react"
import Products from "../components/Products/Products";
import { Container } from "@mui/material";

const HomePage: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Bem-vindo | E-Syndkos"
  }, [])
  return (
    <Container maxWidth="xl">
      <Products />
    </Container>
  )
}

export default HomePage