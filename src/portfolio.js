// portfolio.js

const header = {
  homepage: 'https://harshmehta9000.github.io',
  title: 'HM.',
};

const about = {
  name: 'Harsh Mehta',
  role: 'Data and Business Intelligence Analyst',
  description:
    "Hello! I'm Harsh Mehta, a Data and Business Intelligence Analyst, Cloud Enthusiast, and Music Analytics Explorer committed to transforming data into strategic insights.\n\nWith expertise in Python, data visualization, AWS cloud services, Power BI, and Tableau, I develop robust solutions that empower informed decision-making. My continuous learning keeps me at the forefront of advancements in data analytics, business intelligence, and cloud technologies.\n\nBeyond my professional pursuits, I have a passion for music analytics—visualizing MIDI data to analyze chord patterns and musical structures across genres like Classic Rock, Jazz, and Blues. This unique interest blends analytical rigor with creative exploration.\n\nWhether interpreting market trends or unraveling musical compositions, I thrive on solving complex problems and uncovering hidden patterns. I'm eager to contribute my skills to forward-thinking projects. Let's connect and innovate together with data and technology!",
  resume:
    'https://drive.google.com/file/d/1br7NYs92Q6wvFV1W26qZp4S7oCeYySZH/view',
  social: {
    linkedin: 'https://www.linkedin.com/in/harshpmehta/',
    github: 'https://github.com/HarshMehta9000',
  },
};


const education = [
  {
    name: 'University of Wisconsin Madison',
    description: 'Masters in Information Science, Data Analytics Major',
    date: 'Sept 2023 - May 2025',
    gpa: 'GPA: 4.0/4.0',
  },
  {
    name: 'University of Mumbai, India',
    description: 'Bachelors in Management Studies, Business Analytics Major',
    date: 'Aug 2013 - Jul 2016',
    gpa: 'GPA: 3.5/4.0',
  },
];

const experience = [
  {
    name: 'HP Tech Ventures | Business Analyst Extern',
    description:
      'Researched startup metrics, industry data, team structures, and business models to identify product differentiation and strategic positioning. Constructed market maps across various startup sectors, utilizing data cleaning methods and tools such as Open Refine. Analyzed large datasets using Numpy, Pandas, Seaborn, Excel, and SQL to calculate key performance indicators. Recommended promising startups for further investment due diligence based on comprehensive analysis and strategic insights.',
    date: 'Jul 2024 - Aug 2024',
    location: 'Remote',
    stack: [
      'Python',
      'Numpy',
      'Pandas',
      'Seaborn',
      'Matplotlib',
      'SQL',
      'Excel',
      'R language studio',
      'ggplot2',
      'dplyr',
      'tm',
      'quanteda',
      'Open Refine',
      'Data Analysis',
      'Data Visualization',
      'Business Analysis',
      'Strategic Analysis',
    ],
  },
  {
    name: 'Beats by Dre | Business Analyst & Branding Strategy Extern',
    description:
      'Contributed to the successful analysis of the Beats Pill product by conducting a comprehensive data-driven analysis of Beats by Dre’s brand positioning and market strategy. Utilized data collection methods such as surveys, interviews, and sentiment analysis to assess consumer trends, focusing on the Gen Z demographic. Leveraged tools like R and Python for sentiment analysis, extracting key insights from social media and customer feedback. Performed competitor analysis using data visualization techniques, and presented data-backed strategic recommendations to optimize the product launch strategy.',
    date: 'May 2024 - Jun 2024',
    location: 'Remote',
    stack: [
      'Python',
      'R language studio',
      'ggplot2',
      'dplyr',
      'tm',
      'quanteda',
      'Numpy',
      'Pandas',
      'Matplotlib',
      'Plotly',
      'Seaborn',
      'Sentiment Analysis',
      'Market Research',
      'Consumer Trend Analysis',
      'Data Collection',
      'Data Visualization',
      'Strategic Analysis',
      'Business Analysis',
    ],
  },
  {
    name: 'UW Transportation Services | Campus Parking Efficiency Project',
    description:
      'Spearheaded a data-driven initiative to optimize parking efficiency on the University of Wisconsin-Madison campus. Analyzed extensive parking transaction data to identify utilization patterns and weather impacts across campus facilities. Developed interactive dashboards and predictive models to enhance parking management strategies. Employed advanced data processing and machine learning techniques to cluster parking facilities based on operational characteristics. Conducted correlation analyses between local weather conditions and parking events, providing actionable insights for capacity planning and dynamic pricing strategies.',
    date: 'Jun 2024 - Aug 2024',
    location: 'University of Wisconsin-Madison',
    stack: [
      'Python',
      'Pandas',
      'NumPy',
      'Plotly',
      'Dash',
      'Scikit-learn',
      'Prophet',
      'SciPy',
      'Data Cleaning and Preprocessing',
      'Time Series Analysis',
      'K-means Clustering',
      'Statistical Analysis',
      'Data Visualization',
      'Interactive Dashboard Development',
      'Predictive Modeling',
      'Correlation Analysis',
      'Excel',
      'Strategic Analysis',
    ],
    sourceCode: 'https://github.com/HarshMehta9000/LIS620Parking',
  },
  {
    name: 'Prayas Entertainment | Business Analyst',
    description:
      'Spearheaded data-driven initiatives that revolutionized operational efficiency. Engineered and implemented sophisticated financial forecasting models and customer segmentation strategies, driving revenue growth and enhancing customer lifetime value. Leveraged advanced data visualization techniques to transform complex data into intuitive dashboards, enhancing decision-making efficiency.',
    date: 'Jan 2021 - Apr 2023',
    location: 'Mumbai, India',
    stack: [
      'Python',
      'Numpy',
      'Pandas',
      'Seaborn',
      'Matplotlib',
      'SQL',
      'Plotly',
      'Tableau',
      'Power BI',
      'HTML',
      'CSS',
      'MongoDB',
      'Data Analysis',
      'Business Analysis',
      'Problem Solving',
    ],
  },
  {
    name: 'Indigo Events & Promotions | Senior Associate Marketing Manager, Data Analyst',
    description:
      'Orchestrated data-centric media strategies and digital marketing campaigns, resulting in significant improvements in customer satisfaction and lead conversions. Leveraged advanced analytics to optimize ad spend and conducted in-depth market research, shaping data-driven marketing strategies that accelerated customer acquisition. Implemented a data-driven application that synergized marketing strategies with data insights, boosting customer engagement and conversion rates.',
    date: 'Mar 2017 - Mar 2020',
    location: 'Mumbai, India',
    stack: [
      'Python',
      'Numpy',
      'Pandas',
      'Seaborn',
      'Matplotlib',
      'SQL',
      'Plotly',
      'Tableau',
      'Power BI',
      'HTML',
      'CSS',
      'MongoDB',
      'Data Analysis',
      'Business Analysis',
      'Problem Solving',
      'Digital Marketing',
      'JavaScript',
      'Google Analytics',
    ],
  },
];

const projects = [
  {
    name: 'Quantium Data Analytics Job Simulation',
    description:
      'Executed comprehensive data preparation and customer analytics, employing advanced uplift testing methodologies to formulate data-driven commercial strategies.',
    stack: [
      'Python',
      'R language studio',
      'ggplot2',
      'dplyr',
      'tm',
      'quanteda',
      'Numpy',
      'Pandas',
      'Matplotlib',
      'Plotly',
      'Seaborn',
      'SQL',
      'NoSQL',
      'Data Analysis',
      'Data Validation',
      'Data Visualization',
      'Data Wrangling',
      'Commercial Thinking',
      'Presentation Skills',
      'Statistical Testing',
      'A/B Testing',
    ],
    
  },
  {
    name: 'KPMG AU Data Analytics Job Simulation',
    description:
      'Conducted rigorous data quality assessments and demographic-based high-value customer analysis, developing sophisticated dashboards for effective data visualization and strategic decision-making.',
    stack: [
      'Python',
      'R language studio',
      'ggplot2',
      'dplyr',
      'tm',
      'quanteda',
      'Numpy',
      'Pandas',
      'Matplotlib',
      'Plotly',
      'Seaborn',
      'Analytical Dashboard Creation',
      'Customer Segmentation',
      'Data Analytics',
      'Data Dashboards',
      'Data-Driven Presentations',
      'Data Quality Analysis',
      'Data Visualizations',
      'Microsoft Excel',
      'VBA',
    ],
    
  },
  {
    name: 'Accenture North America Data Analytics and Visualization Job Simulation',
    description:
      'Orchestrated end-to-end data analysis, encompassing data cleaning, modeling, and trend analysis for a simulated social media client, effectively communicating insights to key stakeholders.',
    stack: [
      'Python',
      'R language studio',
      'ggplot2',
      'dplyr',
      'tm',
      'quanteda',
      'Numpy',
      'Pandas',
      'Matplotlib',
      'Plotly',
      'Seaborn',
      'Data Modeling',
      'Data Understanding',
      'Data Visualization',
      'Presentations',
      'Project Planning',
      'Public Speaking',
      'Storytelling',
      'Strategy',
      'Teamwork',
    ],
    
  },
  {
    name: 'PwC Switzerland Power BI Job Simulation',
    description:
      'Strengthened PowerBI skills by creating dashboards that effectively conveyed KPIs, demonstrating the ability to respond to client requests with well-designed solutions and data-driven insights.',
    stack: [
      'Power BI',
      'DAX',
      'Power BI Dashboard',
      'Calculating Measures',
      'Defining KPIs',
      'Insight and Actions',
    ],
    
  },
];

const skills = [
  {
    category: 'Python',
    items: [
      'Numpy',
      'Pandas',
      'Scikit-Learn',
      'Seaborn',
      'Matplotlib',
      'PySpark',
      'Prophet',
      'SciPy',
    ],
  },
  {
    category: 'R',
    items: [
      'ggplot2',
      'dplyr',
      'tidyr',
      'shiny',
      'plotly',
      'caret',
      'tm',
      'quanteda',
    ],
  },
  {
    category: 'JavaScript',
    items: ['Node.js', 'HTML', 'CSS'],
  },
  {
    category: 'Machine Learning & NLP',
    items: [
      'K-means Clustering',
      'Time Series Analysis',
      'Predictive Modeling',
      'Text Mining',
      'Sentiment Analysis',
    ],
  },
  {
    category: 'Data Analysis & Visualization',
    items: [
      'Data Cleaning',
      'Data Wrangling',
      'Statistical Testing',
      'Tableau',
      'Power BI',
      'Plotly',
    ],
  },
  {
    category: 'Cloud Computing & Big Data Tools',
    items: [
      'AWS SageMaker',
      'AWS Glue',
      'AWS EMR',
      'AWS Redshift',
      'Microsoft Azure',
      'Docker',
      'Snowflake',
    ],
  },
  {
    category: 'Databases & Data Storage',
    items: ['SQL', 'NoSQL', 'MongoDB'],
  },
  {
    category: 'Development Tools & Version Control',
    items: ['Git', 'GitHub'],
  },
  {
    category: 'Operating Systems & Platforms',
    items: ['Linux'],
  },
  {
    category: 'Business, Strategy & Project Management',
    items: [
      'Market Research',
      'Strategic Analysis',
      'Customer Segmentation',
      'Project Planning',
      'Teamwork',
      'Problem Solving',
    ],
  },
  {
    category: 'Communication & Presentation Skills',
    items: [
      'Public Speaking',
      'Storytelling',
      'Presentation Skills',
    ],
  },
  {
    category: 'Other Data Tools',
    items: ['Gephi', 'Voyant Tools', 'Audio Engineering'],
  },
];

const contact = {
  email: ['contact.harshmehta@gmail.com', 'hmehta7@wisc.edu'],
};

export {
  header,
  about,
  education,
  experience,
  projects,
  skills,
  contact,
};
