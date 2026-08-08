export interface FaqItem {
  question: string;
  answer: string;
}

export const siteFaq: FaqItem[] = [
  {
    question: "Are Every Soma courses suitable for beginners?",
    answer:
      "Yes. Most Every Soma courses are designed for beginners and assume no prior experience. Python for Beginners, SQL for Data Analysis, the Data Analytics Bootcamp, and React Fundamentals all start from the very basics. Intermediate courses such as Pandas and NumPy for Data Analysis or Next.js for Developers clearly list their prerequisites on the course page.",
  },
  {
    question: "Do the courses include practical projects?",
    answer:
      "Yes. Every course is built around hands-on work. For example, Python for Beginners includes 8 projects, the Data Analytics Bootcamp includes 10 projects, and SQL for Data Analysis includes 4 projects along with more than 100 exercises. Each course page lists its projects and exercises.",
  },
  {
    question: "Do I need programming experience?",
    answer:
      "Not for the beginner courses. Python for Beginners, SQL for Data Analysis, and the Data Analytics Bootcamp require no programming experience at all. Intermediate courses list a specific prerequisite — for instance, Pandas and NumPy for Data Analysis expects basic Python, and Next.js for Developers expects React fundamentals.",
  },
  {
    question: "Are the courses self-paced?",
    answer:
      "Yes. All Every Soma courses are structured as self-paced curricula. Each course is broken into modules and lessons that you can follow in order at your own speed, with no fixed schedules or deadlines.",
  },
  {
    question: "Does Every Soma provide video lessons?",
    answer:
      "Not at the moment. Every Soma currently publishes complete course curricula, learning outcomes, and learning guides rather than hosted video lessons. Each course page lists its full module-by-module outline so you can see exactly what the curriculum covers.",
  },
];
