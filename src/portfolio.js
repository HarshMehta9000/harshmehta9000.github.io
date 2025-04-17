
const header = {
  homepage: 'https://harshmehta9000.github.io',
  title: 'HM.',
}

const about = {
  name: 'Harsh Mehta',
  role: 'Founder | Data Scientist | Analyst',
  description:
    'As a Founder, Data Scientist, and Analyst, I apply deep expertise in data science, machine learning, and cloud technologies (AWS, Python, SQL) to uncover strategic insights and tackle complex business problems. My work has demonstrably improved operational efficiency (up to 35%), guided investment strategy (HP Tech Ventures), and increased revenue (by 10%) using predictive modeling and analytics. I enjoy building innovative solutions, including AI-driven platforms (Ensemble AI) and custom data tools, always aiming to translate technical capabilities into tangible business value through analytical rigor and creative problem solving.',
  resume: 'https://drive.google.com/file/d/13yGccHtQa6l8f4hNelCS9uMOmf4LEhKI/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/harshpmehta/',
    github: 'https://github.com/HarshMehta9000',
  },
}

const education = [
  {
    name: 'University of Wisconsin-Madison',
    description: 'M.S. in Information (Data, ML, Cloud Focus)',
    date: 'Sept 2023 - May 2025', // Current date is April 17, 2025 CDT
    gpa: 'GPA: 3.95/4.0',
    details: [
      'Relevant Coursework: Data Mining, Analytics, Database Design, Visualization, Project Management, Big Data, ML, Cloud Computing, AWS, NLP, Data Ethics',
      "Chancellor's Scholarship (2025): Awarded for academic excellence, leadership, innovation (top 5% applicants)",
      'National Society of Leadership and Success: Inducted for leadership & academic achievement (top 8% nationwide)'
    ]
  },
  {
    name: 'University of Mumbai',
    description: 'Bachelor of Management Studies (Business Analytics Major)',
    date: 'Jun 2013 - Jul 2017',
    gpa: 'GPA: 3.5/4.0',
  },
]

const experience = [
  {
    name: 'Ensemble AI | Founder & AI Strategist',
    description:
      'Leading the development of Ensemble AI, an AI powered venue booking platform using agent based architecture (n8n, A2A). Focused on real time sync and secure payments, the platform has reduced average booking time by 40% and increased conversion rates by 35% via ML recommendations. Selected for the NSF I-Corps program to explore commercial scaling.',
    date: 'Feb 2025 - Present', // Current date is April 17, 2025 CDT
    location: 'Madison, WI / Remote',
    stack: [
      'Founder', 'AI Strategy', 'Machine Learning', 'Entrepreneurship', 'Real-time Systems', 'Secure Payments',
      'Calendar Integration', 'Recommendation Systems', 'NSF I-Corps', 'n8n', 'A2A Protocol', 'Product Development', 'Python'
    ],
    // sourceCode: 'https://drive.google.com/file/d/1ws93y8MjzvBhUy26JfZQ59z70GfCiemQ/view'
  },
  {
    name: 'HP Tech Ventures | Business Analyst Extern',
    description:
      'Evaluated over 30 startups for HP Tech Ventures, identifying high potential investment targets by analyzing 50k+ data points with Python (Numpy/Pandas). Developed a Snowflake ETL framework that improved data management efficiency by 32%. Also utilized SQL, Databricks, and Excel automation for analysis.',
    date: 'Jul 2024 - Aug 2024',
    location: 'Remote',
    stack: [
      'Startup Analysis', 'Investment Recommendation', 'Python', 'Numpy', 'Pandas',
      'Snowflake', 'ETL', 'SQL', 'Oracle', 'Data Modeling', 'Databricks', 'Excel Macros', 'Data Management'
    ],
  },
  {
    name: 'Beats by Dre | Business Analyst Branding Strategy Extern',
    description:
      'Spearheaded competitive analysis for the Beats Pill, informing a pricing strategy that increased sales volume by 10%. Gathered insights from Gen Z consumers (interviews, surveys) and analyzed 2k+ weekly reviews using Python NLP, boosting marketing engagement (+15%) and effectiveness (+11%). Presented data backed recommendations using Tableau/Power BI.',
    date: 'May 2024 - Jun 2024',
    location: 'Remote',
    stack: [
      'Competitive Analysis', 'Pricing Strategy', 'Market Research', 'Consumer Insights', 'Python', 'NLP',
      'Data Visualization', 'Tableau', 'Power BI', 'Strategic Recommendations', 'Microsoft Office'
    ],
  },
  {
    name: 'Prayas Entertainment | Business Analyst',
    description:
      'Boosted operational efficiency by 35% and annual revenue by 10% at Prayas Entertainment through data analytics and predictive modeling. Developed effective financial forecasting models and implemented customer segmentation using data mining, increasing CLV by 15% and retention by 10%. Deployed Tableau/Power BI dashboards to enhance decision making.',
    date: 'Jan 2021 - Apr 2023',
    location: 'Mumbai, India',
    stack: [
      'Data Analytics', 'Predictive Modeling', 'Financial Forecasting', 'Customer Segmentation', 'Data Mining',
      'Oracle DB', 'ETL', 'SQL', 'Data Visualization', 'Tableau', 'Power BI', 'Excel'
    ],
  },
  {
    name: 'Indigo Events & Promotions | Data Analyst',
    description:
      'Directed data driven media strategies that improved customer satisfaction (+30%) and lead conversions (+21%). Optimized digital marketing campaigns using Google Analytics and BI tools, achieving a 40% higher CTR, 20% lower CPA, 25% conversion rate increase, and 10% ROI rise. Also implemented a data focused application that boosted customer engagement by 27%.',
    date: 'Mar 2017 - Mar 2020',
    location: 'Mumbai, India',
    stack: [
      'Media Strategy', 'Data Analysis', 'Digital Marketing', 'Ad Optimization', 'Market Research',
      'Google Analytics', 'BI Tools', 'Customer Engagement', 'Conversion Rate Optimization', 'Data Management'
    ],
  },
]

const projects = [
  {
    name: 'UW Transportation Services Campus Parking Efficiency Project',
    description:
      'Analyzed 11M+ parking transaction records using Python, SQL, and Snowflake to uncover usage patterns and weather impacts. Developed predictive models and interactive dashboards (Tableau/Power BI) that cut average parking search time by 27% and improved resource allocation.',
    stack: [
      'Data Analysis', 'Python', 'SQL', 'Snowflake', 'ETL', 'Data Mining', 'Clustering',
      'Predictive Modeling', 'Data Visualization', 'Tableau / Power BI'
    ],
    sourceCode: 'https://github.com/HarshMehta9000/LIS620Parking'
  },
  {
    name: 'MSBA Financial Group Cloud-Native Data Architecture Project',
    description:
      'Designed an end to end AWS data pipeline (S3, Glue, Redshift). Deployed an ML model via SageMaker Canvas (99.19% accuracy) for bankruptcy risk prediction, informing investment strategies and cutting data processing time by 63%.',
    stack: [
      'AWS', 'S3', 'AWS Glue', 'ETL', 'AWS Redshift', 'Data Warehousing', 'Data Pipeline',
      'Machine Learning', 'SageMaker Canvas', 'EDA', 'Financial Analysis', 'Risk Prediction'
    ],
  },
  {
    name: 'Hard Drive Data Extraction Tool',
    description:
      'Developed a user friendly tool (Python, JS, PostgreSQL) to extract hard drive data to JSON, standardizing output for analytics. Reduced processing time by 60% and significantly cut computing/cloud costs.',
    stack: [
      'Data Extraction', 'JSON', 'Python', 'Javascript', 'PostgreSQL',
      'Data Management', 'Tool Development', 'Data Standardization', 'Process Optimization'
    ],
    livePreview: 'https://melodic-kringle-9b3415.netlify.app/',
    sourceCode: 'https://drive.google.com/file/d/1kFJuTdfmkWOjlnl02XlAT6nJLO8wHTPe/view',
  },
  {
    name: 'Research: Job Posting Analytics on Twitter',
    description:
      'Co authoring research analyzing 100k+ Twitter job postings using data mining and NLP to uncover hiring trends for peer reviewed publication.',
    stack: [
      'Research', 'Academic Writing', 'Data Mining', 'NLP', 'Twitter API', 'Job Market Analysis', 'Trend Analysis'
    ],
    livePreview: 'https://docs.google.com/document/d/1dZR5oPDQ_W768aWHTl-36N0I0TuC41oIPV4Xl22kiD8/edit?tab=t.jemhm1prcbcn',
  },
  {
    name: 'Creative Application: MIDI to CSV Data Tool',
    description:
      'Created a Python tool to transform MIDI music files into analytical CSV datasets, capturing musical structures for analysis in a creative domain.',
    stack: [
      'MIDI Processing', 'Data Transformation', 'CSV', 'Music Information Retrieval', 'Python'
    ],
  },
  {
    name: 'Graduate Studies: Learnings & Reflections',
    description:
      'Overview of key concepts, skills, and insights gained during the M.S. in Information program at UW Madison, focusing on Data Analytics, Machine Learning, and Cloud Computing.',
    stack: [
      'Data Analysis', 'Machine Learning', 'Cloud Computing', 'Python', 'SQL', 'AWS', 'Project Management', 'Data Visualization', 'Critical Thinking'
    ],
    livePreview: 'https://gentle-sorbet-624f58.netlify.app/',
  },
  {
    name: 'Live Audio/AV Tech Engineer - University of Wisconsin Madison',
    description:
      'Provided live audio engineering and AV technical support for various campus events and artist performances at the University of Wisconsin Madison.',
    stack: [
      'Live Audio', 'AV Technology', 'Event Support', 'Collaboration', 'Audio Engineering', 'Problem Solving', 'Project Coordination'
    ],
    livePreview: 'https://superlative-meringue-134258.netlify.app/',
  },
]

const skills = [
  // Programming & Analytics
  'Python', 'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'SQL', 'R', 'Data Mining', 'Data Modeling', 'ETL', 'ELT', 'NLP', 'Statistical Analysis',
  // Visualization & Reporting
  'Tableau (Certified)', 'Power BI', 'Data Visualization', 'Excel', 'Matplotlib', 'Seaborn', 'Plotly',
  // Cloud & Infrastructure
  'AWS', 'AWS S3', 'AWS Glue', 'AWS Redshift', 'AWS SageMaker', 'Azure', 'Snowflake', 'Databricks', 'Docker', 'Git', 'Github',
  // Business & Management
  'Business Intelligence', 'Analytics', 'Project Management', 'Agile', 'SDLC', 'Business Analysis', 'Financial Forecasting', 'Market Research', 'Product Development', 'Founder', 'AI Strategy',
  'Product Analytics', 'Marketing Analytics',
  // AI / Agents / Protocols
  'AI', 'Machine Learning', 'Predictive Modeling', 'Recommendation Systems', 'n8n', 'A2A Protocol',
  // Web & Other
  'HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Linux', 'API Development',
  // AV / Live Production
  'Live Audio', 'AV Technology', 'Audio Engineering'
]

const contact = {
  email: ['contact.harshmehta@gmail.com', 'hershpmehta@gmail.com', 'hmehta7@wisc.edu'],
  phone: '608-298-8733'
}

// This export statement makes the data available to other files in your React app
export { header, about, projects, skills, contact, education, experience };
