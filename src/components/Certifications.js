import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

function Certifications() {
  const certifications = [
    "Programming for Everybody – Coursera",
    "IBM Data Science Professional Certificate – Coursera",
    "Data Analytics Essentials with Power BI – Udemy",
    "Machine Learning & Deep Learning in Python & R"
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h2" gutterBottom color="primary" sx={{ mb: 4 }}>
        Certifications
      </Typography>
      <List>
        {certifications.map((cert, index) => (
          <ListItem key={index}>
            <ListItemText primary={cert} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Certifications;