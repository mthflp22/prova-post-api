import { createBrowserRouter } from 'react-router-dom';
import PostPage from './pages/PostPage';
import DadosPage from './pages/DadosPage';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/post',
    element: <PostPage />
  },
  {
    path: '/dados/:id',
    element: <DadosPage />
  }
]);

export default router; 