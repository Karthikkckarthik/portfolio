import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Link } from '@mui/material';

function Projects() {
  const projects = [
    {
      title: "Predicting Pre-Order Customer Sentiment for Products",
      description: "Developed an end-to-end ML pipeline with ZenML to predict customer satisfaction scores using Olist's Brazilian E-Commerce dataset. Implemented data collection, preprocessing, feature engineering, and LightGBM model training, integrated with MLflow for tracking and deployment. Deployed via a Streamlit app for real-time predictions and continuous updates.",
      technologies: "Python, ZenML, MLflow, LightGBM, Streamlit",
      github: "https://github.com/Karthikkckarthik/Customer_Satisfaction"
    },
    {
      title: "Potato Leaf Disease Classification",
      description: "Led a project to develop a machine learning-based web application for accurate identification of diseases in potato leaves. Created a user-friendly platform to aid farmers in diagnosing potato crop diseases for timely intervention and treatment.",
      technologies: "Machine Learning, Web Development",
      github: "https://github.com/Karthikkckarthik/PDC-mini-project-by-karthik"
    }
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h2" gutterBottom color="primary" sx={{ mb: 4 }}>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Typography variant="body2" color="primary">
                  Technologies: {project.technologies}
                </Typography>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub Link
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;