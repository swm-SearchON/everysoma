export type CourseLevel = "Beginner" | "Intermediate";

export interface CurriculumModule {
  title: string;
  lessons: string[];
}

export interface CourseFaqItem {
  question: string;
  answer: string;
}

export interface Course {
  slug: string;
  title: string;
  category: "Python" | "Data Analytics" | "SQL" | "Web Development";
  level: CourseLevel;
  price: number;
  durationHours: number;
  lessonCount: number;
  projectCount: number;
  exercises?: string;
  prerequisite: string;
  shortDescription: string;
  overview: string[];
  whatYouWillLearn: string[];
  curriculum: CurriculumModule[];
  whoFor: string[];
  outcomes: string[];
  faq: CourseFaqItem[];
  relatedCourseSlugs: string[];
  relatedGuideSlugs: string[];
  featured: boolean;
  accent: string;
}

export const courses: Course[] = [
  {
    slug: "python-for-beginners",
    title: "Python for Beginners",
    category: "Python",
    level: "Beginner",
    price: 39,
    durationHours: 12,
    lessonCount: 42,
    projectCount: 8,
    prerequisite: "None — no programming experience required",
    shortDescription:
      "Learn Python from scratch through practical exercises and beginner-friendly projects.",
    overview: [
      "Python for Beginners is a 12-hour course that teaches you Python from absolute zero. Across 42 lessons and 8 hands-on projects, you write real code from the first module: printing output, storing values in variables, making decisions with conditions, and repeating work with loops.",
      "The second half of the course moves from language basics to practical work. You learn how to organize code into functions, manage collections of data with lists and dictionaries, read and write files, and finish with an introduction to Pandas so you can take your first steps into data analysis.",
      "No programming experience is required. Every concept is introduced with a short explanation, followed by exercises and a small project that puts it to use.",
    ],
    whatYouWillLearn: [
      "Store and manipulate data with variables and core data types",
      "Control program flow with conditions and loops",
      "Write reusable code with functions",
      "Work with lists and dictionaries to manage collections of data",
      "Read from and write to files",
      "Perform basic data analysis on real datasets",
      "Load and explore data with Pandas",
      "Build 8 hands-on projects, from a number-guessing game to a data report",
    ],
    curriculum: [
      {
        title: "Module 1 — Getting Started with Python",
        lessons: [
          "Installing Python and running your first script",
          "The print function and basic output",
          "Reading input from the user",
        ],
      },
      {
        title: "Module 2 — Variables and Data Types",
        lessons: [
          "Variables and assignment",
          "Numbers, strings, and booleans",
          "Type conversion and f-strings",
        ],
      },
      {
        title: "Module 3 — Conditions and Loops",
        lessons: [
          "if, elif, and else",
          "Comparison and logical operators",
          "for loops and while loops",
          "Project: number-guessing game",
        ],
      },
      {
        title: "Module 4 — Functions",
        lessons: [
          "Defining and calling functions",
          "Parameters and return values",
          "Scope and default arguments",
        ],
      },
      {
        title: "Module 5 — Lists and Dictionaries",
        lessons: [
          "Creating and modifying lists",
          "List slicing and iteration",
          "Dictionaries: keys, values, and lookups",
          "Project: contact book",
        ],
      },
      {
        title: "Module 6 — Working with Files",
        lessons: [
          "Reading text files",
          "Writing and appending to files",
          "Working with CSV files",
        ],
      },
      {
        title: "Module 7 — Introduction to Pandas",
        lessons: [
          "What Pandas is and when to use it",
          "Loading a CSV into a DataFrame",
          "Filtering rows and selecting columns",
          "Simple summary statistics",
        ],
      },
      {
        title: "Module 8 — Final Project",
        lessons: [
          "Planning a small data report",
          "Cleaning and analyzing the dataset",
          "Presenting your results",
        ],
      },
    ],
    whoFor: [
      "Complete beginners who have never written a line of code",
      "Professionals who want to automate simple tasks with Python",
      "Aspiring data analysts who need Python as a foundation",
      "Students preparing for further study in programming or data",
    ],
    outcomes: [
      "Write, run, and debug Python scripts on your own machine",
      "Solve everyday problems with conditions, loops, and functions",
      "Handle structured data using lists, dictionaries, and files",
      "Load a dataset with Pandas and produce a basic analysis",
    ],
    faq: [
      {
        question: "Do I need any programming experience to take this course?",
        answer:
          "No. Python for Beginners assumes no prior programming experience. The first module starts with installing Python and running your very first script.",
      },
      {
        question: "How long does the course take to complete?",
        answer:
          "The course contains 12 hours of material across 42 lessons. Most learners who study a few hours per week finish it in about a month, including the 8 projects.",
      },
      {
        question: "What should I learn after this course?",
        answer:
          "A natural next step is Pandas and NumPy for Data Analysis if you are interested in data work, or the Data Analytics Bootcamp for a broader analytics path.",
      },
    ],
    relatedCourseSlugs: ["pandas-and-numpy", "data-analytics-bootcamp"],
    relatedGuideSlugs: ["how-to-learn-python", "python-vs-sql"],
    featured: true,
    accent: "from-sky-500 to-blue-600",
  },
  {
    slug: "sql-for-data-analysis",
    title: "SQL for Data Analysis",
    category: "SQL",
    level: "Beginner",
    price: 29,
    durationHours: 9,
    lessonCount: 35,
    projectCount: 4,
    exercises: "100+ exercises",
    prerequisite: "None — no programming experience required",
    shortDescription:
      "Learn to query, aggregate, and analyze data with SQL through more than 100 hands-on exercises.",
    overview: [
      "SQL for Data Analysis is a 9-hour course that teaches you how to answer real questions with data stored in relational databases. Across 35 lessons, more than 100 exercises, and 4 projects, you progress from your first SELECT statement to analytical queries that combine multiple tables.",
      "The course is exercise-driven: every concept is immediately practiced against realistic datasets. You learn to filter rows with WHERE, summarize data with GROUP BY and aggregate functions, combine tables with JOINs, and structure more complex logic with subqueries.",
      "The final modules focus on the day-to-day work of a data analyst: cleaning messy data and writing analytical queries that turn raw tables into clear answers.",
    ],
    whatYouWillLearn: [
      "Retrieve exactly the data you need with SELECT and WHERE",
      "Summarize data with GROUP BY and aggregate functions",
      "Combine tables with INNER, LEFT, and other JOINs",
      "Structure complex questions with subqueries",
      "Clean inconsistent and missing data directly in SQL",
      "Write analytical queries that answer real business questions",
      "Practice with more than 100 exercises on realistic datasets",
      "Complete 4 analysis projects from question to answer",
    ],
    curriculum: [
      {
        title: "Module 1 — Your First Queries",
        lessons: [
          "How relational databases organize data",
          "SELECT: choosing columns",
          "Sorting results with ORDER BY",
        ],
      },
      {
        title: "Module 2 — Filtering with WHERE",
        lessons: [
          "Comparison operators and conditions",
          "AND, OR, and NOT",
          "Pattern matching with LIKE",
          "Handling NULL values",
        ],
      },
      {
        title: "Module 3 — Aggregation and GROUP BY",
        lessons: [
          "COUNT, SUM, AVG, MIN, and MAX",
          "Grouping rows with GROUP BY",
          "Filtering groups with HAVING",
          "Project: sales summary report",
        ],
      },
      {
        title: "Module 4 — Joining Tables",
        lessons: [
          "Primary keys and foreign keys",
          "INNER JOIN",
          "LEFT JOIN and when to use it",
          "Joining more than two tables",
        ],
      },
      {
        title: "Module 5 — Subqueries",
        lessons: [
          "Subqueries in WHERE",
          "Subqueries in FROM",
          "Correlated subqueries",
        ],
      },
      {
        title: "Module 6 — Data Cleaning in SQL",
        lessons: [
          "Standardizing text and dates",
          "Dealing with duplicates",
          "Handling missing values",
          "Project: cleaning a messy orders table",
        ],
      },
      {
        title: "Module 7 — Analytical Queries",
        lessons: [
          "Translating questions into queries",
          "Building multi-step analyses",
          "Project: customer behavior analysis",
          "Final project: end-to-end data analysis in SQL",
        ],
      },
    ],
    whoFor: [
      "Beginners who want a practical first step into data work",
      "Analysts who currently rely on spreadsheets and want to query databases directly",
      "Marketers, product managers, and operations professionals who work with data",
      "Developers who want a solid grounding in SQL for application work",
    ],
    outcomes: [
      "Write correct, readable SQL queries from scratch",
      "Summarize and compare data across groups with confidence",
      "Combine data from multiple tables to answer real questions",
      "Complete an end-to-end analysis project entirely in SQL",
    ],
    faq: [
      {
        question: "Is SQL hard to learn for a non-programmer?",
        answer:
          "SQL is one of the most approachable languages for non-programmers because it reads close to plain English. This course assumes no programming background and builds up gradually through more than 100 exercises.",
      },
      {
        question: "Which database does the course use?",
        answer:
          "The course teaches standard SQL that applies across common databases such as PostgreSQL, MySQL, and SQLite. Differences between databases are pointed out where they matter.",
      },
      {
        question: "Should I learn SQL or Python first?",
        answer:
          "For data analysis, SQL is often the fastest path to being useful with data. See the guide Python vs SQL: Which Should You Learn First? for a detailed comparison.",
      },
    ],
    relatedCourseSlugs: ["data-analytics-bootcamp", "python-for-beginners"],
    relatedGuideSlugs: ["how-to-learn-sql", "python-vs-sql"],
    featured: true,
    accent: "from-emerald-500 to-teal-600",
  },
  {
    slug: "data-analytics-bootcamp",
    title: "Data Analytics Bootcamp",
    category: "Data Analytics",
    level: "Beginner",
    price: 79,
    durationHours: 24,
    lessonCount: 68,
    projectCount: 10,
    prerequisite: "None — no programming experience required",
    shortDescription:
      "A complete beginner-to-analyst curriculum covering Python, SQL, Pandas, data cleaning, exploratory analysis, visualization, and basic statistics.",
    overview: [
      "The Data Analytics Bootcamp is a 24-hour, 68-lesson curriculum that takes you from no experience to completing full data analysis projects. It combines the core skills of a working analyst — Python, SQL, and Pandas — into one structured path with 10 hands-on projects.",
      "The bootcamp starts with Python fundamentals and SQL querying, then moves into the daily workflow of an analyst: cleaning messy datasets, exploring them systematically, visualizing findings, and applying basic statistics to interpret results honestly.",
      "Every stage ends with a project, and the final capstone walks you through a complete analysis: framing a question, gathering and cleaning data, exploring it, and presenting conclusions.",
    ],
    whatYouWillLearn: [
      "Write Python for data work: variables, loops, functions, and collections",
      "Query relational databases with SQL: SELECT, JOINs, and aggregation",
      "Manipulate datasets with Pandas DataFrames",
      "Clean real-world data: missing values, duplicates, and inconsistent formats",
      "Explore datasets systematically with summary statistics and grouping",
      "Visualize data with clear, honest charts",
      "Apply basic statistics: distributions, correlation, and averages done right",
      "Complete 10 projects, including a full end-to-end capstone analysis",
    ],
    curriculum: [
      {
        title: "Module 1 — Python Foundations",
        lessons: [
          "Setting up your analysis environment",
          "Variables, types, and operations",
          "Conditions, loops, and functions",
          "Lists and dictionaries for data work",
        ],
      },
      {
        title: "Module 2 — SQL Foundations",
        lessons: [
          "SELECT, WHERE, and ORDER BY",
          "Aggregation with GROUP BY",
          "JOINs across tables",
          "Project: answering questions with SQL",
        ],
      },
      {
        title: "Module 3 — Pandas Essentials",
        lessons: [
          "DataFrames and Series",
          "Loading data from CSV and SQL",
          "Selecting, filtering, and sorting",
          "Project: first Pandas analysis",
        ],
      },
      {
        title: "Module 4 — Data Cleaning",
        lessons: [
          "Finding and handling missing values",
          "Fixing types, formats, and duplicates",
          "Combining messy sources",
          "Project: cleaning a real-world dataset",
        ],
      },
      {
        title: "Module 5 — Exploratory Analysis",
        lessons: [
          "Summary statistics that matter",
          "Grouping and comparing segments",
          "Finding patterns and outliers",
          "Project: exploratory analysis report",
        ],
      },
      {
        title: "Module 6 — Data Visualization",
        lessons: [
          "Choosing the right chart",
          "Building charts from DataFrames",
          "Avoiding misleading visualizations",
          "Project: visual analysis story",
        ],
      },
      {
        title: "Module 7 — Basic Statistics",
        lessons: [
          "Distributions and spread",
          "Correlation and its limits",
          "Comparing groups honestly",
        ],
      },
      {
        title: "Module 8 — Capstone Project",
        lessons: [
          "Framing an analytical question",
          "Gathering, cleaning, and exploring the data",
          "Drawing and presenting conclusions",
        ],
      },
    ],
    whoFor: [
      "Career changers targeting a data analyst role",
      "Beginners who prefer one structured path over piecing courses together",
      "Business professionals who want to analyze data themselves",
      "Students building a portfolio of analysis projects",
    ],
    outcomes: [
      "Carry out a complete data analysis from raw data to conclusions",
      "Use Python, SQL, and Pandas together in one workflow",
      "Produce clear visualizations and statistically sound summaries",
      "Finish with 10 portfolio-ready projects, including a capstone",
    ],
    faq: [
      {
        question: "Does the bootcamp overlap with the Python and SQL courses?",
        answer:
          "There is intentional overlap in the foundations: Modules 1 and 2 condense the essentials of Python and SQL. The bootcamp then goes further into cleaning, exploration, visualization, and statistics, which the standalone courses do not cover in depth.",
      },
      {
        question: "How long does the bootcamp take?",
        answer:
          "It contains 24 hours of material across 68 lessons and 10 projects. At 4–5 hours per week, most learners complete it in 6–8 weeks.",
      },
      {
        question: "Is this enough to apply for data analyst jobs?",
        answer:
          "The bootcamp covers the core technical skills asked of junior analysts and produces 10 portfolio projects. Pair it with the Data Analyst Learning Roadmap guide for the broader picture, including portfolio and practice advice.",
      },
    ],
    relatedCourseSlugs: ["python-for-beginners", "sql-for-data-analysis", "pandas-and-numpy"],
    relatedGuideSlugs: ["data-analyst-roadmap", "python-vs-sql"],
    featured: true,
    accent: "from-violet-500 to-purple-600",
  },
  {
    slug: "pandas-and-numpy",
    title: "Pandas and NumPy for Data Analysis",
    category: "Data Analytics",
    level: "Intermediate",
    price: 35,
    durationHours: 7,
    lessonCount: 28,
    projectCount: 5,
    prerequisite: "Basic Python (variables, loops, functions)",
    shortDescription:
      "Master the two core libraries of Python data analysis: fast numeric computing with NumPy and flexible data manipulation with Pandas.",
    overview: [
      "Pandas and NumPy for Data Analysis is a focused 7-hour course for learners who already know basic Python and want to work with data seriously. Across 28 lessons and 5 projects, you learn the two libraries that underpin almost all Python data work.",
      "The course starts with NumPy arrays — the foundation of fast numeric computing in Python — then moves to Pandas DataFrames for real-world tabular data. You practice the operations analysts use every day: filtering, grouping, handling missing values, and reshaping data.",
      "Each module ends with an exercise set, and the projects use realistic, imperfect datasets so you learn to deal with data as it actually arrives: messy.",
    ],
    whatYouWillLearn: [
      "Compute efficiently with NumPy arrays and vectorized operations",
      "Create, inspect, and manipulate Pandas DataFrames",
      "Clean datasets: types, duplicates, and inconsistent values",
      "Filter rows and select data precisely with loc and boolean masks",
      "Group and aggregate data to compare segments",
      "Detect and handle missing values with intention, not defaults",
      "Transform and reshape data for analysis: apply, map, merge, and pivot",
      "Complete 5 projects on realistic, messy datasets",
    ],
    curriculum: [
      {
        title: "Module 1 — NumPy Arrays",
        lessons: [
          "Why NumPy: arrays vs. lists",
          "Creating and indexing arrays",
          "Vectorized operations and broadcasting",
        ],
      },
      {
        title: "Module 2 — DataFrames Fundamentals",
        lessons: [
          "Series and DataFrames",
          "Reading data from files",
          "Inspecting and summarizing a dataset",
        ],
      },
      {
        title: "Module 3 — Selecting and Filtering",
        lessons: [
          "Selecting columns and rows with loc and iloc",
          "Boolean masks and complex conditions",
          "Project: slicing a sales dataset",
        ],
      },
      {
        title: "Module 4 — Data Cleaning",
        lessons: [
          "Fixing data types",
          "Removing duplicates",
          "Standardizing messy text columns",
          "Project: cleaning survey responses",
        ],
      },
      {
        title: "Module 5 — Grouping and Aggregation",
        lessons: [
          "groupby fundamentals",
          "Multiple aggregations at once",
          "Project: cohort comparison",
        ],
      },
      {
        title: "Module 6 — Missing Values",
        lessons: [
          "Finding missing data",
          "Dropping vs. filling: making the right call",
          "Interpolation and sentinel values",
        ],
      },
      {
        title: "Module 7 — Data Transformation",
        lessons: [
          "apply and map",
          "Merging and joining DataFrames",
          "Pivoting and reshaping",
          "Final project: full transformation pipeline",
        ],
      },
    ],
    whoFor: [
      "Learners who finished a Python basics course and want to go deeper into data",
      "Analysts moving from spreadsheets to programmatic analysis",
      "Developers who need to process tabular data efficiently",
      "Data analytics students strengthening their core toolkit",
    ],
    outcomes: [
      "Manipulate any tabular dataset confidently with Pandas",
      "Write vectorized NumPy code instead of slow Python loops",
      "Clean and reshape messy real-world data into analysis-ready form",
      "Build reusable transformation pipelines across 5 completed projects",
    ],
    faq: [
      {
        question: "How much Python do I need before starting?",
        answer:
          "You should be comfortable with variables, loops, functions, lists, and dictionaries. Completing Python for Beginners — or equivalent experience — is sufficient.",
      },
      {
        question: "Do I need to know NumPy before Pandas?",
        answer:
          "No. The course teaches NumPy first precisely because Pandas is built on top of it. Understanding arrays makes DataFrame behavior much easier to reason about.",
      },
      {
        question: "How is this different from the Data Analytics Bootcamp?",
        answer:
          "The bootcamp is a broad beginner path covering Python, SQL, statistics, and visualization. This course goes deeper into the Pandas and NumPy toolkit specifically, at an intermediate level.",
      },
    ],
    relatedCourseSlugs: ["python-for-beginners", "data-analytics-bootcamp"],
    relatedGuideSlugs: ["how-to-learn-python", "data-analyst-roadmap"],
    featured: false,
    accent: "from-amber-500 to-orange-600",
  },
  {
    slug: "react-fundamentals",
    title: "React Fundamentals",
    category: "Web Development",
    level: "Beginner",
    price: 45,
    durationHours: 10,
    lessonCount: 38,
    projectCount: 6,
    prerequisite: "Basic JavaScript (variables, functions, arrays)",
    shortDescription:
      "Learn to build interactive user interfaces with React: components, props, state, hooks, and forms.",
    overview: [
      "React Fundamentals is a 10-hour course that teaches you to build modern user interfaces with React. Across 38 lessons and 6 projects, you learn the component model that powers a large share of today's web applications.",
      "The course begins with components and JSX, then builds up through props, state, and event handling — the core loop of interactive UIs. From there you learn hooks, controlled forms, and how to compose small components into complete applications.",
      "Each concept is practiced in isolation first, then combined in projects that grow in scope, ending with a complete multi-component application built from scratch.",
    ],
    whatYouWillLearn: [
      "Build UIs from reusable components with JSX",
      "Pass data through components with props",
      "Manage interactivity with state and events",
      "Use hooks including useState and useEffect correctly",
      "Build controlled forms with validation",
      "Compose small components into full applications",
      "Understand rendering: when and why components update",
      "Complete 6 projects, from a counter to a full task application",
    ],
    curriculum: [
      {
        title: "Module 1 — Thinking in Components",
        lessons: [
          "What React is and why components",
          "Setting up a React project",
          "JSX: markup in JavaScript",
        ],
      },
      {
        title: "Module 2 — Props",
        lessons: [
          "Passing data into components",
          "Composition with children",
          "Project: profile card gallery",
        ],
      },
      {
        title: "Module 3 — State and Events",
        lessons: [
          "useState fundamentals",
          "Handling user events",
          "State updates and re-rendering",
          "Project: interactive counter and toggle",
        ],
      },
      {
        title: "Module 4 — Hooks in Depth",
        lessons: [
          "useEffect and side effects",
          "Rules of hooks",
          "Building a custom hook",
        ],
      },
      {
        title: "Module 5 — Forms",
        lessons: [
          "Controlled inputs",
          "Form submission and validation",
          "Project: signup form with validation",
        ],
      },
      {
        title: "Module 6 — Lists and Conditional Rendering",
        lessons: [
          "Rendering lists with keys",
          "Conditional rendering patterns",
          "Project: filterable list",
        ],
      },
      {
        title: "Module 7 — Component Composition",
        lessons: [
          "Lifting state up",
          "Structuring a component tree",
          "Final project: complete task application",
        ],
      },
    ],
    whoFor: [
      "Developers with basic JavaScript who want to build modern UIs",
      "Backend developers expanding into frontend work",
      "Self-taught coders formalizing their React knowledge",
      "Anyone planning to learn Next.js, which builds on React",
    ],
    outcomes: [
      "Build interactive React applications from scratch",
      "Structure UIs as clean, reusable component trees",
      "Handle state, events, and forms idiomatically",
      "Be fully prepared for Next.js and production React work",
    ],
    faq: [
      {
        question: "How much JavaScript do I need?",
        answer:
          "You should know variables, functions, arrays, and objects. Familiarity with arrow functions and array methods like map helps, and the course reviews them briefly where they first appear.",
      },
      {
        question: "Does this course cover React with TypeScript?",
        answer:
          "The course teaches React with plain JavaScript to keep the focus on React concepts. The patterns transfer directly to TypeScript.",
      },
      {
        question: "What should I learn after React Fundamentals?",
        answer:
          "Next.js for Developers is the natural next step: it builds directly on the component, props, and hooks knowledge from this course.",
      },
    ],
    relatedCourseSlugs: ["nextjs-for-developers"],
    relatedGuideSlugs: [],
    featured: true,
    accent: "from-cyan-500 to-sky-600",
  },
  {
    slug: "nextjs-for-developers",
    title: "Next.js for Developers",
    category: "Web Development",
    level: "Intermediate",
    price: 49,
    durationHours: 11,
    lessonCount: 40,
    projectCount: 5,
    prerequisite: "React fundamentals (components, props, state, hooks)",
    shortDescription:
      "Build production-ready web applications with Next.js: the App Router, Server Components, data fetching, and deployment.",
    overview: [
      "Next.js for Developers is an 11-hour course for developers who know React and want to build complete, production-grade applications. Across 40 lessons and 5 projects, you learn the framework's modern App Router architecture from the ground up.",
      "The course covers the concepts that define current Next.js development: Server Components and when to use client components, file-based routing with layouts, data fetching and caching, and metadata for search engines.",
      "The final modules focus on shipping: measuring and improving performance, and deploying applications properly. The capstone project is a complete content site built and deployed end to end.",
    ],
    whatYouWillLearn: [
      "Structure applications with the App Router: routes, layouts, and pages",
      "Understand Server Components and the server/client boundary",
      "Implement dynamic routes and navigation",
      "Fetch data on the server with caching and revalidation",
      "Configure metadata for SEO: titles, descriptions, and canonical URLs",
      "Optimize performance: images, fonts, and bundle size",
      "Deploy Next.js applications to production",
      "Complete 5 projects, including a fully deployed content site",
    ],
    curriculum: [
      {
        title: "Module 1 — Next.js and the App Router",
        lessons: [
          "Why a framework on top of React",
          "Project structure and conventions",
          "Pages, layouts, and nested routes",
        ],
      },
      {
        title: "Module 2 — Server Components",
        lessons: [
          "Server vs. client components",
          "The use client boundary",
          "Composition patterns across the boundary",
        ],
      },
      {
        title: "Module 3 — Routing in Depth",
        lessons: [
          "Dynamic route segments",
          "Linking and navigation",
          "Loading and error states",
          "Project: multi-page marketing site",
        ],
      },
      {
        title: "Module 4 — Data Fetching",
        lessons: [
          "Fetching data in Server Components",
          "Caching and revalidation",
          "Static generation with generateStaticParams",
          "Project: data-driven catalog",
        ],
      },
      {
        title: "Module 5 — Metadata and SEO",
        lessons: [
          "The Metadata API",
          "Dynamic metadata per page",
          "Open Graph and canonical URLs",
        ],
      },
      {
        title: "Module 6 — Performance",
        lessons: [
          "Image and font optimization",
          "Analyzing bundle size",
          "Streaming and Suspense",
        ],
      },
      {
        title: "Module 7 — Deployment",
        lessons: [
          "Production builds",
          "Environment variables and configuration",
          "Deploying to a hosting platform",
          "Final project: build and deploy a content site",
        ],
      },
    ],
    whoFor: [
      "React developers ready to build full applications",
      "Frontend developers who want server-side rendering skills",
      "Developers building content sites, dashboards, or SaaS products",
      "Graduates of React Fundamentals continuing the web development path",
    ],
    outcomes: [
      "Build complete applications with the Next.js App Router",
      "Make informed server/client component decisions",
      "Implement fast, SEO-friendly pages with proper metadata",
      "Deploy a production Next.js application end to end",
    ],
    faq: [
      {
        question: "Do I need to know React before taking this course?",
        answer:
          "Yes. You should be comfortable with components, props, state, and hooks. React Fundamentals covers exactly this prerequisite.",
      },
      {
        question: "Does the course cover the Pages Router?",
        answer:
          "The course focuses on the App Router, which is the current recommended architecture. Key differences from the Pages Router are noted where relevant for maintaining older projects.",
      },
      {
        question: "Is TypeScript used in this course?",
        answer:
          "Yes, the projects use TypeScript with beginner-friendly typings. You do not need prior TypeScript experience; the course introduces what it uses.",
      },
    ],
    relatedCourseSlugs: ["react-fundamentals"],
    relatedGuideSlugs: [],
    featured: false,
    accent: "from-slate-600 to-slate-800",
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getFeaturedCourses(): Course[] {
  return courses.filter((c) => c.featured);
}
