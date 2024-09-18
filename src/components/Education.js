import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

function Education() {
  const educations = [
    {
      degree: "B.E. in AI&ML",
      institution: "Dayananda Sagar College of Engineering",
      location: "Bangalore",
      duration: "Jan 2021 – May 2024",
      gpa: "CGPA: 8.0"
    },
    {
      degree: "2nd PUC (12th Grade), PCMB",
      institution: "Vivekananda PU College",
      location: "Chinthamani",
      duration: "Mar 2020",
      gpa: "Percentage: 85.83%"
    },
    {
      degree: "SSLC (10th Grade)",
      institution: "S.F.S High School",
      location: "Chinthamani",
      duration: "Apr 2018",
      gpa: "Percentage: 91.20%"
    }
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h2" gutterBottom color="primary" sx={{ mb: 4 }}>
        Education
      </Typography>
      {educations.map((edu, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              {edu.degree}
            </Typography>
            <Typography variant="body1">
              {edu.institution}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {edu.location}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {edu.duration}
            </Typography>
            <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
              {edu.gpa}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Education;