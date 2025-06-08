import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, CircularProgress, Box } from '@mui/material';
import PostDetail from '../components/PostDetail';
import axios from 'axios';

function DadosPage() {
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${postResponse.data.userId}`);
        
        setPost(postResponse.data);
        setUser(userResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar detalhes do post:', error);
        setLoading(false);
      }
    };

    fetchPostDetails();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <PostDetail 
        post={post} 
        user={user} 
        onBackClick={() => navigate('/post')} 
      />
    </Container>
  );
}

export default DadosPage; 