import { Typography, Paper, Button, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function PostDetail({ post, user, onBackClick }) {
  if (!post) {
    return (
      <Typography variant="h5" color="error">
        Post não encontrado
      </Typography>
    );
  }

  return (
    <>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={onBackClick}
        sx={{ mb: 3 }}
      >
        Voltar para Lista
      </Button>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {post.title}
        </Typography>
        
        <Divider sx={{ my: 2 }} />
        
        <Typography variant="body1" paragraph>
          {post.body}
        </Typography>

        {user && (
          <>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>
              Informações do Autor
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nome: {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: {user.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Website: {user.website}
            </Typography>
          </>
        )}
      </Paper>
    </>
  );
}

export default PostDetail; 