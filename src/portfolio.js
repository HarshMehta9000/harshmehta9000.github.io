const header = {
  // homepage link remains the same unless you have a new one
  homepage: 'https://harshmehta9000.github.io',
  title: 'HM.',
}

const about = {
  name: 'Harsh Mehta',
  // Updated role based on resume heading
  role: 'MS in Information | Data Analytics | Machine Learning | Cloud', // Adjusted title
  description:
    // Expanded description incorporating details from resume summary and education
    'M.S. in Information Science candidate (GPA: 3.95/4.0) at University of Wisconsin-Madison, specializing in Data Analytics, Machine Learning, and Cloud Computing. Passionate about leveraging data-driven insights for strategic problem-solving. Recognized as a Chancellor\'s Scholar (2025) and inducted into the National Society of Leadership and Success. Combines analytical rigor with creativity, demonstrated through visualizing music data with Tableau and developing AI-powered platforms. Continuously enhancing skills in cloud technologies (AWS, Azure, Snowflake) and Data Engineering. Proven ability to deliver impactful results in Business Analyst roles, improving operational efficiency and driving revenue growth. Quick learner and collaborative team player with strong technical proficiency and a curiosity for innovative tech applications.',
  // NOTE: Replace 'YOUR_NEW_RESUME_LINK_HERE' with the actual URL to your resume PDF
  resume: 'https://drive.google.com/file/d/13yGccHtQa6l8f4hNelCS9uMOmf4LEhKI/view?usp=sharing', // Placeholder - needs your updated link
  social: {
    // Links from original file, assuming they are correct
    linkedin: 'https://www.linkedin.com/in/harshpmehta/', // also confirms linkedin
    github: 'https://github.com/HarshMehta9000',
  },
}

const education = [
  {
    name: 'University of Wisconsin-Madison',
    description: 'M.S. in Information (Data, ML, Cloud)', // Updated description
    date: 'Sept 2023 - May 2025', // Resume date
    gpa: 'GPA: 3.95/4.0', // Resume GPA
    // Added details from resume
    details: [
      'Coursework: Data Mining, Analytics, Database Design, Data Visualization, Project Management, Big Data, ML, Cloud Computing, AWS, NLP, Data Ethics',
      "Chancellor's Scholarship (2025): Awarded for academic excellence, leadership, and innovation (top 5% of applicants)",
      'National Society of Leadership and Success: Inducted for leadership and academic achievement (top 8% nationwide)'
    ]
  },
  {
    name: 'University of Mumbai',
    description: 'Bachelor of Management Studies (Business Analytics Major)', // Added major from resume context
    date: 'Jun 2013 - Jul 2017', // Updated dates based on resume
    gpa: 'GPA: 3.5/4.0', // Resume GPA
  },
]

const experience = [
  // Experience entries updated with details and metrics from the resume
  {
    name: 'HP Tech Ventures | Business Analyst Extern',
    description:
      'Assessed team structures and business models of over 30 startups to identify unique value propositions, informing targeted investment recommendations. Analyzed over 50,000 data points using Numpy and Pandas, enabling the selection of three high-potential startups. Engineered a small-scale ETL framework in Snowflake, improving Data Management efficiency by 32%. Constructed SQL queries in Oracle, reducing query execution time by 45%. Utilized Databricks for collaborative data workflows, reducing data exploration overhead by 20%. Automated data entry tasks using Excel macros, cutting manual effort by 25%.',
    date: 'Jul 2024 - Aug 2024', // Resume date
    location: 'Remote', // Added location
    // Stack updated based on tools mentioned in resume descriptions
    stack: [
      'Startup Analysis', 'Investment Recommendation', 'Python', 'Numpy', 'Pandas',
      'Snowflake', 'ETL', 'SQL', 'Oracle', 'Data Modeling', 'Databricks', 'Excel Macros', 'Data Management'
    ],
  },
  {
    name: 'Beats by Dre | Business Analyst Branding Strategy Extern',
    description:
      "Spearheaded competitive analysis of Beats Pill, informing a revised pricing strategy that increased sales volume by 10%. Gathered Gen Z consumer insights via 50+ interviews and 200+ surveys, leading to a 15% higher engagement in revamped marketing strategy. Evaluated 2,000+ customer reviews weekly using Python NLP, boosting targeted marketing effectiveness by 11%. Conducted competitor analysis using Tableau & Power BI, presenting data-backed recommendations to optimize product launch. Managed project communications using Microsoft Office suite.",
    date: 'May 2024 - Jun 2024', // Resume date
    location: 'Remote', // Added location
    stack: [
      'Competitive Analysis', 'Pricing Strategy', 'Market Research', 'Consumer Insights', 'Python', 'NLP',
      'Data Visualization', 'Tableau', 'Power BI', 'Strategic Recommendations', 'Microsoft Office'
    ],
  },
  {
    name: 'Prayas Entertainment | Business Analyst',
    description:
      'Championed initiatives enhancing operational efficiency by 35% using data analytics and predictive modeling. Developed financial forecasting model leading to a 10% increase in annual revenue. Implemented customer segmentation strategy using Data Mining, resulting in a 15% increase in CLV and 10% boost in retention. Managed Oracle databases for high-volume transaction data analysis and ETL workflows. Deployed visualization tools (Tableau, Power BI), enhancing decision-making efficiency by 50% and productivity by 30%. Systematized processes using Excel for Data Entry and documentation.',
    date: 'Jan 2021 - Apr 2023', // Resume date
    location: 'Mumbai, India', // Resume location
    stack: [
      'Data Analytics', 'Predictive Modeling', 'Financial Forecasting', 'Customer Segmentation', 'Data Mining',
      'Oracle DB', 'ETL', 'SQL', 'Data Visualization', 'Tableau', 'Power BI', 'Excel'
    ],
  },
  {
    name: 'Indigo Events & Promotions | Data Analyst', // Title updated based on resume
    description:
      'Directed data-driven media strategies resulting in 30% elevated customer satisfaction and 21% higher lead conversions. Optimized digital marketing campaigns using analytics, achieving a 40% increase in CTR and a 20% decrease in CPA. Conducted market research shaping strategies that increased customer acquisition by 25% in 6 months. Utilized Google Analytics and BI tools, driving a 25% increase in conversion rate and 10% rise in ROI. Pioneered a data-driven application implementation, boosting customer engagement by 27% and conversion rates by 30%. Supervised Data Entry and Data Management operations.',
    date: 'Mar 2017 - Mar 2020', // Resume date
    location: 'Mumbai, India', // Resume location
    stack: [
      'Media Strategy', 'Data Analysis', 'Digital Marketing', 'Ad Optimization', 'Market Research',
      'Google Analytics', 'BI Tools', 'Customer Engagement', 'Conversion Rate Optimization', 'Data Management'
    ],
  },
]

// Projects section now includes items from resume AND the new items provided
const projects = [
  {
    name: 'UW Transportation Services Campus Parking Efficiency Project',
    description:
      'Spearheaded analysis of 11M+ transaction records to enhance parking efficiency. Exposed key patterns and weather dependencies, optimizing resource allocation and reducing parking search time by 27%. Designed interactive dashboards and predictive models using visualization best practices, increasing stakeholder comprehension by 40%. Used Data Mining and clustering to group facilities, improving resource allocation efficiency by 18%. Correlated weather with parking events, elevating capacity planning accuracy by 22%. Leveraged Snowflake for storage, ETL, and management of transaction logs.',
    stack: [
      'Data Analysis', 'Python', 'SQL', 'Snowflake', 'ETL', 'Data Mining', 'Clustering',
      'Predictive Modeling', 'Data Visualization', 'Tableau / Power BI' // Inferred tools based on skills & context
    ],
     sourceCode: 'https://github.com/HarshMehta9000/LIS620Parking'
  },
  {
    name: 'MSBA Financial Group Cloud-Native Data Architecture Project',
    description:
      'Designed an end-to-end AWS data pipeline to centralize financial data and enable ML predictions. Architected infrastructure using AWS S3 (Data Lake), Glue (ETL), and Redshift (Data Warehouse). Uncovered key financial indicators for bankruptcy risk via EDA. Deployed an ML model in SageMaker Canvas achieving 99.19% accuracy and 0.981 AUC-ROC. Formulated investment strategies based on predictions. Refined Data Management, reducing processing time by 63%.',
    stack: [
      'AWS', 'S3', 'AWS Glue', 'ETL', 'AWS Redshift', 'Data Warehousing', 'Data Pipeline',
      'Machine Learning', 'SageMaker Canvas', 'Exploratory Data Analysis (EDA)', 'Financial Analysis', 'Risk Prediction'
    ],
    // sourceCode: 'YOUR_PROJECT_LINK_HERE' // Add link if available
  },
  {
    name: 'Ensemble AI-Powered Venue Booking Platform',
    description:
      'Conceptualized and built an AI platform for venue booking with real-time syncing and secure transactions. Reduced average booking time by 40% via intelligent matching algorithms. Integrated secure payments and calendar sync. Selected for NSF I-Corps program for commercial scaling. Used ML for optimized recommendations, increasing conversion rates by 35%.',
    stack: [
      'AI', 'Machine Learning', 'Entrpeneur', 'Real-time Systems', 'Secure Payments',
      'Calendar Integration', 'Recommendation Systems', 'NSF I-Corps'
    ],
     sourceCode: 'https://drive.google.com/file/d/1ws93y8MjzvBhUy26JfZQ59z70GfCiemQ/view'
  },
  // === NEW ITEMS ADDED BELOW ===
  {
    name: 'Hard Drive Data Extraction Tool',
    description:
      'Created a streamlined tool converting hard drive data to JSON with advanced analytics. Simplifies extraction for non-technical users, standardizes outputs for analytics, reduces processing time by 60%, and saves significantly on electricity, computing, and cloud costs. Demonstrates ability to identify market inefficiencies and develop user-friendly tech products.',
    stack: [ // Inferred stack
      'Data Extraction', 'JSON', 'Python', 'Javascript', 'PostgreSQL' 'Data Management', 'Tool Development', 'Data Standardization', 'Process Optimization'
    ],
    // NOTE: Replace placeholders with actual links
    livePreview: 'https://melodic-kringle-9b3415.netlify.app/', // Placeholder for [LINK: JSON Explorer site]
    sourceCode: 'https://drive.google.com/file/d/1kFJuTdfmkWOjlnl02XlAT6nJLO8wHTPe/view', // Placeholder for [LINK: Screenshots] - Using sourceCode field, adjust if needed
  },
  {
    name: 'Research: Job Posting Analytics on Twitter',
    description:
      'Co-authoring a research paper for peer-reviewed publication. Analyzes 100,000+ job postings using data mining and NLP techniques to reveal insights into hiring trends across industries and regions.',
    stack: [ // Inferred stack
      'Research', 'Academic Writing', 'Data Mining', 'NLP', 'Twitter API', 'Job Market Analysis', 'Trend Analysis'
    ],
    // NOTE: Replace placeholder with actual link
    livePreview: 'https://docs.google.com/document/d/1dZR5oPDQ_W768aWHTl-36N0I0TuC41oIPV4Xl22kiD8/edit?tab=t.jemhm1prcbcn', // Placeholder for [LINK: Research Paper]
  },
  {
    name: 'Creative Application: MIDI to CSV Data Tool',
    description:
      'Developed specialized code that transforms MIDI music files into analytical CSV datasets, capturing chord progressions, note structures, tempo variations, and instrumentation. This highlights technical capability applied to creative domains.',
    stack: [ // Inferred stack
      'MIDI Processing', 'Data Transformation', 'CSV', 'Music Information Retrieval', 'Python' // Assuming Python
    ],
    // No links provided for this one
  },
  {
    name: 'Portfolio Highlights Summary', // Using project structure for this content
    description:
      'Technical portfolio features ML and text mining projects. Creative work includes production for campus music events and analytical platforms for film/music criticism. These demonstrate multidisciplinary thinking and translating complex concepts across domains.',
    stack: [ // Representing linked items
      'Machine Learning', 'Text Mining', 'Music Production', 'Film Analysis', 'Music Analysis', 'Portfolio Development'
    ],
    // NOTE: Replace placeholders with actual links
    livePreview: 'https://gentle-sorbet-624f58.netlify.app/', // [LINK: What I learnt in Graduate School Portfolio Website]
    sourceCode: 'https://superlative-meringue-134258.netlify.app/', // [LINK: Portfolio of Campus Music Events]
    // livePreview: 'YOUR_MOVIE_REVIEW_PLATFORM_LINK_HERE', // You might need another field or adjust how links are displayed if you have >2 per project. Using livePreview for the first link here.
  },
]

// Skills updated and categorized based on resume
const skills = [
  // Programming & Analytics
  'Python', 'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'SQL', 'R', 'Data Mining', 'Data Modeling', 'ETL', 'ELT',
  // Visualization & Reporting
  'Tableau (Certified)', 'Power BI', 'Data Visualization', 'Excel', 'Matplotlib', 'Seaborn', 'Plotly',
  // Cloud & Infrastructure
  'AWS', 'AWS S3', 'AWS Glue', 'AWS Redshift', 'AWS SageMaker', 'Azure', 'Snowflake', 'Databricks', 'Docker', 'Git', 'Github',
  // Business & Management
  'Business Intelligence', 'Analytics', 'Statistical Analysis', 'Project Management', 'Agile', 'SDLC', 'Business Analysis',
  // Other relevant skills from original portfolio (optional, verify relevance)
  'HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Linux'
]

const contact = {
  // Kept both emails from portfolio.js, added phone from resume
  email: ['contact.harshmehta@gmail.com','hershpmehta@gmail.com','hmehta7@wisc.edu'],
  phone: '608-298-8733' // Added from resume
}

export { header, about, projects, skills, contact, education, experience }
