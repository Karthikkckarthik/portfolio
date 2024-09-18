import React from 'react';
import { Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="body2" align="center">
        © 2024 Karthik K C. All rights reserved.
      </Typography>
    </Container>
  );
}

export default Footer;