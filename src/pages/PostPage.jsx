import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, CircularProgress, Box, Button } from '@mui/material';
import PostList from '../components/PostList';
import axios from 'axios';

function PostPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rolling, setRolling] = useState(false);
  const [current, setCurrent] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleSortear = () => {
    setRolling(true);
    let count = 0;

    const interval = setInterval(() => {
      const randomNum = Math.floor(Math.random() * 100) + 1;
      setCurrent(randomNum);
      count++;

      if (count >= 20) {
        clearInterval(interval);
        setRolling(false);
        navigate(`/dados/${randomNum}`);
      }
    }, 80);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Lista de Posts
      </Typography>

      {/* Botão de sorteio */}
      <Box textAlign="center" mb={4}>
        <Button variant="contained" color="primary" onClick={handleSortear} disabled={rolling}>
          {rolling ? 'Sorteando...' : 'Sortear Post Aleatório'}
        </Button>

        {current !== null && (
          <Typography variant="h5" mt={2} color="secondary">
            Número atual: {current}
          </Typography>
        )}
      </Box>

      <PostList posts={posts} />
    </Container>
  );
}

export default PostPage;