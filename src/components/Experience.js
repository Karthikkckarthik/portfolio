import React from 'react';
import { Container, Typography, Card, CardContent, Box } from '@mui/material';

function Experience() {
  const experiences = [
    {
      company: 'INFINITY LEARN',
      position: 'Generative AI Intern',
      date: 'JUL 2024 – PRESENT',
      location: 'BANGALORE, INDIA',
      description: [
        'Worked on fine-tuning large language models (LLMs) for various use cases.',
        'Developed and optimized prompts for enhancing model performance.',
        'Utilized LangChain and integrated agents and tools to create efficient workflows.',
        'Collaborated with team members to build AI solutions using Llama 2.1.',
      ],
    },
    {
      company: 'KIRAN SMART',
      position: 'AI&ML Intern',
      date: 'FEB 2024 – APR 2024',
      location: 'BANGALORE, INDIA',
      description: [
        'Worked on various machine learning tasks and a project on building a Healthcare Chatbot using Deep learning, that asks users to state their health symptoms and provides a diagnosis solution.',
      ],
    },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Typography variant="h2" gutterBottom color="primary" sx={{ mb: 4 }}>
        Experience
      </Typography>
      {experiences.map((exp, index) => (
        <Card key={index} sx={{ mb: 4, borderLeft: 6, borderColor: 'secondary.main' }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ mb: 2, color: 'secondary.main' }}>{exp.company}</Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>{exp.position}</Typography>
            <Typography variant="subtitle1" sx={{ mb: 2, color: 'text.secondary' }}>{`${exp.date} | ${exp.location}`}</Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              {exp.description.map((item, i) => (
                <Typography component="li" key={i} sx={{ mb: 1 }}>{item}</Typography>
              ))}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Experience;