import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'left', 
      alignItems: 'right' 
    }}>
      <Box sx={{ textAlign: 'center', p: 4, borderRadius: 2, boxShadow: 3, bgcolor: 'background.paper' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Bem-vindo à Prova React
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
          Escolha uma das opções abaixo:
        </Typography>
        <Button 
          variant="contained" 
          size="large" 
          sx={{ mb: 2, width: '100%' }}
          onClick={() => navigate('/post')}
        >
          VER LISTA DE POSTS
        </Button>
        <Button 
          variant="outlined" 
          size="large" 
          sx={{ width: '100%' }}
          onClick={() => navigate('/dados/1')}
        >
          VER DETALHES DE UM POST (ID: 1)
        </Button>
      </Box>
    </Container>
  );
}

export default HomePage;