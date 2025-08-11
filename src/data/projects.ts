export type Project = {
  id: string;
  label: string;
  shortLabel?: string;
  summary: string;
  tags: string[];
  images: string[];
  links?: { github?: string; demo?: string; writeup?: string };
};

export const projects: Project[] = [
  {
    id: 'portfolio',
    label: 'Personal Portfolio Website',
    summary: 'A polished, responsive portfolio built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'Tailwind', 'TypeScript'],
    images: ['headshotUse.jpg', ''],
    links: { github: 'https://github.com/Darren-Murphy-mtn/Portfolio', demo: 'https://portfolio-gray-rho-15.vercel.app' }
  },
  {
    id: 'newsletter-automation',
    label: 'Newsletter Automation',
    summary: 'Automated email newsletter pipeline integrating Markdown and SendGrid.',
    tags: ['Python', 'SendGrid', 'CI/CD'],
    images: ['newsletter-1.png'],
    links: { github: 'https://github.com/Darren-Murphy-mtn/NewsletterAutomation' }
  },
  {
    id: 'weather-prediction',
    label: 'Weather Prediction App',
    shortLabel: 'Weather App',
    summary: 'ML-powered weather forecasting with a sleek React Native interface.',
    tags: ['Machine Learning', 'React Native', 'Python'],
    images: ['weather-1.png', 'weather-2.png'],
    links: { github: 'https://github.com/Darren-Murphy-mtn/Weather_Prediction' }
  },
  {
    id: 'cv-generator',
    label: 'CV Generator',
    summary: 'CLI tool to generate PDF resumes from JSON data templates.',
    tags: ['Node.js', 'PDFKit', 'CLI'],
    images: ['cv-1.png'],
    links: { github: 'https://github.com/Darren-Murphy-mtn/CV-Generator' }
  }
];