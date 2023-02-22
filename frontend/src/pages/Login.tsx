import { Box, Button, Card, CardActionArea, CardActions, CardContent, Container, TextField } from '@mui/material'
import { FC, useEffect } from 'react'
import "./Login.css"

const LoginPage: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Iniciar | E-Syndkos"
    }, [])


    return (
        <Container className="login" sx={{ display: "flex" }}>
            <form className="login_form" noValidate autoComplete="off">
                <Card className='login_card' >
                    <h1>Acceder</h1>
                    <CardContent>
                        <TextField id="email" label="username" variant="outlined" name='username' />
                        <TextField id="password" label="Senha" type="password" variant="outlined" name="password" />
                    </CardContent>
                    <Box className="login_action">
                        <Button type="submit" variant="contained" color="primary">Entrar</Button>
                        <Button variant="contained" color="error">Atrás</Button>
                    </Box>
                </Card >
            </form>
        </Container >
    )
}
export default LoginPage