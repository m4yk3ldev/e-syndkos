import { Box, Button, Card, CardActionArea, CardActions, CardContent } from '@mui/material'
import { FC, useEffect } from 'react'


const LoginPage: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Iniciar | E-Syndkos"
    }, [])
    return (
        <Box>
            <Card sx={{ maxWidth: 345 }} >
                <CardActionArea>
                    <h1>Login</h1>
                    <CardContent>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Buy
                    </Button>
                </CardActions>
            </Card >
        </Box>
    )
}
export default LoginPage