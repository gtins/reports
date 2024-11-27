import { Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const Home = () => {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      minHeight="100vh" 
      textAlign="center"
    >
      <Typography variant="h4" gutterBottom>
        Bem-vindo ao Sistema de Relatórios
      </Typography>
      <Button variant="contained" color="primary" component={Link} href="/reports" sx={{ marginBottom: 2 }}>
        Acessar Relatórios
      </Button>
      <Button variant="contained" color="secondary" component={Link} href="/employees">
        Acessar Funcionários
      </Button>
    </Box>
  );
};

export default Home;
