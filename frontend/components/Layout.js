import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Sistema de Relatórios
          </Typography>
          <Button color="inherit" component={Link} href="/reports">
            Relatórios
          </Button>
          <Button color="inherit" component={Link} href="/employees">
            Funcionários
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: 2 }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
