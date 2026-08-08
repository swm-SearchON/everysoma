export const SITE_URL = "https://course.everysoma.com";

export const SITE_NAME = "Every Soma";

export const SITE_TAGLINE =
  "Practical online courses for developers and data professionals.";

export const SITE_DESCRIPTION =
  "Every Soma offers structured, project-focused online courses in Python, SQL, data analytics, React, and modern web development.";

export const DEMO_NOTICE =
  "Every Soma is a demonstration educational catalog created for testing purposes.";

export interface LearningPath {
  slug: string;
  name: string;
  description: string;
  courseSlugs: string[];
}

export const learningPaths: LearningPath[] = [
  {
    slug: "python",
    name: "Python",
    description:
      "Start programming with Python and build up to data analysis with Pandas and NumPy.",
    courseSlugs: ["python-for-beginners", "pandas-and-numpy"],
  },
  {
    slug: "data-analytics",
    name: "Data Analytics",
    description:
      "Learn the full data analysis workflow: querying, cleaning, exploring, and visualizing data.",
    courseSlugs: ["data-analytics-bootcamp", "pandas-and-numpy", "sql-for-data-analysis"],
  },
  {
    slug: "sql",
    name: "SQL",
    description:
      "Query relational databases confidently, from simple SELECT statements to analytical queries.",
    courseSlugs: ["sql-for-data-analysis", "data-analytics-bootcamp"],
  },
  {
    slug: "web-development",
    name: "Web Development",
    description:
      "Build modern web applications with React and Next.js, from components to deployment.",
    courseSlugs: ["react-fundamentals", "nextjs-for-developers"],
  },
];
