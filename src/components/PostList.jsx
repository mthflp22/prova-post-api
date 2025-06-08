import { Card, CardContent, CardActions, Button, Typography, Grid } from '@mui/material';


function PostList({ posts }) {
  const handlePostClick = (id) => {
    window.open(`/dados/${id}`, '_blank');
  };

  return (
    <Grid container spacing={3}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {post.title}
              </Typography>
              <Typography>
                {post.body.length > 100 ? `${post.body.substring(0, 100)}...` : post.body}
              </Typography>
            </CardContent>
            <CardActions>
              <Button 
                size="small" 
                color="primary"
                onClick={() => handlePostClick(post.id)}
              >
                Ver Detalhes
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default PostList; 