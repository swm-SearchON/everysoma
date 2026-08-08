export interface GuideSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  intro: string[];
  sections: GuideSection[];
  relatedCourseSlugs: string[];
}

export const guides: Guide[] = [
  {
    slug: "how-to-learn-python",
    title: "How to Learn Python as a Complete Beginner",
    description:
      "A step-by-step order for learning Python from zero: variables, conditions, loops, functions, data structures, projects, and when to move on to Pandas.",
    intro: [
      "Python is consistently recommended as a first programming language, and for good reason: its syntax reads close to plain English, it runs everywhere, and it is used across web development, automation, and data analysis. But \"learn Python\" is vague advice. What matters for a beginner is the order in which you learn things, and how quickly you start writing code of your own.",
      "This guide lays out a practical sequence that works for complete beginners. It is the same order used in our Python for Beginners course, and each stage builds directly on the one before it.",
    ],
    sections: [
      {
        heading: "Stage 1: Set up and print something",
        paragraphs: [
          "Your first goal is not to understand programming — it is to run a program. Install Python, open an editor, write a script that prints a line of text, and run it. This sounds trivial, but it removes the biggest early obstacle: uncertainty about whether your environment even works.",
          "Spend your first sessions doing small, immediate things: printing messages, doing arithmetic, reading input from the keyboard. Every concept you learn later will be tested through this same loop of write, run, observe.",
        ],
      },
      {
        heading: "Stage 2: Variables and data types",
        paragraphs: [
          "Variables are how programs remember things. Learn to store numbers, text (strings), and true/false values (booleans), and to combine them: joining strings, converting text to numbers, formatting output.",
          "Do not rush past this stage. A surprising amount of beginner confusion — why does \"3\" + \"4\" give \"34\"? — comes from not yet having a firm grip on types. Write many tiny programs: a greeting that uses your name, a script that converts temperatures, a calculator for a restaurant bill.",
        ],
      },
      {
        heading: "Stage 3: Conditions",
        paragraphs: [
          "Conditions let a program make decisions: if the temperature is below zero, print a warning; otherwise, print something else. Learn if, elif, and else, along with the comparison operators (==, <, >) and the logical operators and, or, and not.",
          "The classic beginner exercise here is a number-guessing game, and it is genuinely worth doing: it combines input, variables, conditions, and feedback in a program that is actually fun to run.",
        ],
      },
      {
        heading: "Stage 4: Loops",
        paragraphs: [
          "Loops are where programming starts to feel powerful: you write an instruction once and the computer repeats it a thousand times. Learn for loops for iterating over sequences and while loops for repeating until a condition changes.",
          "Combine loops with conditions and you can already solve real problems: counting words in a text, summing numbers, validating input until the user gets it right. Expect loops to feel awkward for a week or two — tracing through them by hand, line by line, is the fastest way to build the mental model.",
        ],
      },
      {
        heading: "Stage 5: Functions",
        paragraphs: [
          "Functions let you name a piece of logic and reuse it. Learn to define functions, pass arguments into them, and return results. Then go back to the small programs you have already written and reorganize them into functions.",
          "This rewriting exercise matters more than it seems. It teaches the core skill of decomposition: breaking a problem into named, testable pieces. Nearly everything in larger programs — and in libraries like Pandas — is built from functions you call.",
        ],
      },
      {
        heading: "Stage 6: Lists and dictionaries",
        paragraphs: [
          "Real programs work with collections of data, not single values. Lists hold ordered sequences (a list of scores, a list of names); dictionaries hold labeled values (a person's name, age, and email). Learn to create them, loop over them, and nest them.",
          "A good milestone project at this stage is a contact book: store people as dictionaries inside a list, then add search, add, and delete features. If you can build that from scratch, your fundamentals are solid.",
        ],
      },
      {
        heading: "Stage 7: Files and small projects",
        paragraphs: [
          "Reading and writing files connects your programs to the outside world. Learn to read text files line by line, write results out, and handle CSV files — the format most real-world data arrives in.",
          "At this point, stop following exercises for a while and build two or three small projects of your own choosing: a expense logger, a quiz game, a script that renames files. Projects force you to combine everything and to get comfortable being stuck, which is where most learning happens.",
        ],
      },
      {
        heading: "When to move on to Pandas",
        paragraphs: [
          "If your goal is data analysis, the question is when to start Pandas, Python's main data analysis library. The answer: once you are comfortable with functions, lists, dictionaries, and reading CSV files. You do not need to master object-oriented programming or advanced topics first.",
          "A reasonable rule of thumb is six to eight weeks of consistent practice from zero. Our Python for Beginners course ends with an introduction to Pandas for exactly this reason, and Pandas and NumPy for Data Analysis picks up from there. If you want the broader analyst path — SQL, statistics, and visualization included — the Data Analytics Bootcamp covers the full sequence.",
        ],
      },
      {
        heading: "A realistic weekly rhythm",
        paragraphs: [
          "Consistency beats intensity. Three to five sessions per week of 45–60 minutes will carry you through the stages above in about two months. One long Saturday session per week is far less effective: programming skill is built through frequent recall, not occasional marathons.",
          "Finally, expect to forget things. Needing to look up syntax you have already learned is not a sign of failure; it is what programming normally looks like, at every level of experience.",
        ],
      },
    ],
    relatedCourseSlugs: ["python-for-beginners", "pandas-and-numpy", "data-analytics-bootcamp"],
  },
  {
    slug: "python-vs-sql",
    title: "Python vs SQL: Which Should You Learn First?",
    description:
      "A practical comparison of Python and SQL for beginners: what each is for, which to learn first for data analysis or software development, and a recommended order for learning both.",
    intro: [
      "Python and SQL are the two most commonly recommended first languages for anyone entering data work, and one of the most common beginner questions is which to start with. The honest answer is that it depends on what you want to do — but the decision is simpler than it looks once you understand what each language is actually for.",
      "This guide explains the role each language plays, how the choice looks from a data analyst's and a software developer's perspective, and a recommended order if you plan to learn both.",
    ],
    sections: [
      {
        heading: "What each language is for",
        paragraphs: [
          "SQL (Structured Query Language) does one thing: it asks questions of data stored in relational databases. With SQL you select rows, filter them, group them, join tables together, and compute summaries. It is a query language, not a general-purpose programming language — you would not build an application in SQL.",
          "Python is a general-purpose programming language. You can build web applications, automate tasks, train machine learning models — and analyze data, using libraries like Pandas and NumPy. It is broader and deeper than SQL, which also means it takes longer to become productive.",
          "This difference in scope is the key to the whole decision. SQL is narrow and quick to learn to a useful level; Python is broad and slower to learn, but has no ceiling.",
        ],
      },
      {
        heading: "The data analyst's perspective",
        paragraphs: [
          "For aspiring data analysts, SQL first is usually the better choice. Most company data lives in relational databases, and the first thing an analyst does every day is query it. Job listings for analyst roles almost universally require SQL, and many junior analyst tasks can be done entirely in SQL.",
          "SQL is also simply faster to learn. A focused beginner can write genuinely useful queries — filtering, grouping, joining — within two to three weeks. Getting to the equivalent level of usefulness in Python (comfortable with Pandas) typically takes two to three months.",
          "Python then becomes the natural second step, because it covers what SQL cannot: cleaning messy files, building charts, statistical analysis, and automating repetitive reporting.",
        ],
      },
      {
        heading: "The software developer's perspective",
        paragraphs: [
          "For aspiring software developers, the order flips: Python first. Programming fundamentals — variables, conditions, loops, functions, data structures — are the foundation of the entire career, and Python is one of the best languages for learning them.",
          "Developers still need SQL, because almost every application stores data in a database. But for a developer, SQL is a supporting skill learned in a week or two once fundamentals are in place, not the core of the job.",
          "If you are undecided between the analyst and developer paths, Python keeps more doors open: it is the fundamentals language for one path and the primary tool for the other.",
        ],
      },
      {
        heading: "When SQL first makes sense",
        paragraphs: [
          "Choose SQL first if any of these describe you: you want to work with data as soon as possible; your current job already involves data you could query; you are targeting analyst roles specifically; or you tried programming before and found it frustrating — SQL's narrow scope and English-like syntax make early wins come much faster.",
        ],
      },
      {
        heading: "When Python first makes sense",
        paragraphs: [
          "Choose Python first if you want to become a software developer; if you are interested in machine learning or automation, not just analysis; or if you have the patience for a longer ramp-up in exchange for a much broader skill. Python's ecosystem means everything you learn continues to pay off for years.",
        ],
      },
      {
        heading: "The recommended order for learning both",
        paragraphs: [
          "Most data professionals end up needing both, and the good news is that the combination is far easier than either language alone was at the start — the concepts reinforce each other.",
          "For a data-focused path, we recommend: SQL basics first (two to four weeks, through joins and aggregation), then Python fundamentals (six to eight weeks, through functions and data structures), then Pandas — where the two meet, since analysts constantly move query results into DataFrames. Our SQL for Data Analysis and Python for Beginners courses map to the first two stages, and the Data Analytics Bootcamp packages the entire sequence into one curriculum.",
          "Whichever you pick, avoid the trap of trying to learn both simultaneously from zero. Give the first language a few dedicated weeks before adding the second; early confusion between the two costs more time than a staggered start does.",
        ],
      },
    ],
    relatedCourseSlugs: ["sql-for-data-analysis", "python-for-beginners", "data-analytics-bootcamp"],
  },
  {
    slug: "how-to-learn-sql",
    title: "How to Learn SQL for Data Analysis",
    description:
      "A structured path for learning SQL as an analyst: SELECT, filtering, aggregation, joins, subqueries, and how to practice with realistic projects.",
    intro: [
      "SQL is the closest thing data work has to a universal skill. Whether a company runs PostgreSQL, MySQL, BigQuery, or Snowflake, the language for asking questions of its data is some dialect of SQL — and the core of the language has been stable for decades. For data analysis specifically, SQL is arguably the highest-return skill you can learn per hour invested.",
      "This guide walks through the concepts in the order that works best for analysis work, with advice on how to practice each one. It follows the same progression as our SQL for Data Analysis course.",
    ],
    sections: [
      {
        heading: "Start with SELECT: reading data",
        paragraphs: [
          "Everything in SQL analysis starts with SELECT: choosing which columns to retrieve from a table. Together with ORDER BY for sorting and LIMIT for sampling, this is enough to open any table and look around — which is genuinely how analysts start most investigations.",
          "Practice by exploring: pick a sample database and answer simple questions. What columns does this table have? What do the first hundred rows look like? What are the most recent orders? Fluency here makes everything later feel natural.",
        ],
      },
      {
        heading: "Filtering with WHERE",
        paragraphs: [
          "The WHERE clause narrows results to the rows you care about: orders above a certain amount, customers in a specific country, events in the last month. Learn the comparison operators, then AND, OR, and NOT for combining conditions, LIKE for pattern matching, and IN for matching against lists.",
          "Pay special attention to NULL — the marker for missing data. NULL does not behave like other values (it is never equal to anything, even itself), and misunderstanding it is the single most common source of silently wrong results in beginner queries.",
        ],
      },
      {
        heading: "Aggregation: from rows to answers",
        paragraphs: [
          "Analysis questions are usually about groups, not individual rows: revenue per month, signups per channel, average order size per customer. This is what GROUP BY and the aggregate functions — COUNT, SUM, AVG, MIN, MAX — are for.",
          "This stage is the heart of analytical SQL, so give it real practice time. Learn the difference between WHERE (filters rows before grouping) and HAVING (filters groups after), and get comfortable reading a question like \"which product categories had more than 100 orders last quarter?\" and translating it directly into a query.",
        ],
      },
      {
        heading: "JOINs: combining tables",
        paragraphs: [
          "Real databases split data across many tables — customers in one, orders in another, products in a third. JOINs connect them back together. Start with INNER JOIN, which keeps only matching rows, then learn LEFT JOIN, which keeps everything from one side even without a match.",
          "The most valuable exercise here is understanding what happens to row counts. Before running a join, predict how many rows it should return; when the number surprises you, work out why. Analysts who develop this habit catch duplicate-row bugs that others ship into dashboards.",
        ],
      },
      {
        heading: "Subqueries: queries inside queries",
        paragraphs: [
          "Subqueries let you use the result of one query inside another: customers whose total spend is above the average, products that have never been ordered. They are how SQL expresses multi-step reasoning.",
          "Learn subqueries in WHERE first, then subqueries in FROM (treating a query result as a temporary table). Once these are comfortable, common table expressions (WITH clauses) are a short step away and make complex analyses dramatically more readable.",
        ],
      },
      {
        heading: "Practice on realistic data",
        paragraphs: [
          "Syntax knowledge fades quickly without use, so the real curriculum is practice. Work against datasets that resemble actual business data — orders, customers, products, events — rather than toy examples with five rows. Volume matters too: our SQL for Data Analysis course includes more than 100 exercises for exactly this reason.",
          "Effective practice looks like this: read a question in plain English, write the query without looking at hints, check the result, and only then compare against a reference answer. Struggling for a few minutes before checking is not wasted time; it is the mechanism by which the patterns stick.",
        ],
      },
      {
        heading: "Finish with projects",
        paragraphs: [
          "Exercises teach individual concepts; projects teach analysis. A good SQL project starts from a broad question — \"what does customer behavior look like over the last year?\" — and requires you to decide which tables matter, write a sequence of queries, and summarize findings in plain language.",
          "Two or three such projects give you something more valuable than practice: material you can show. Walking an interviewer through a multi-step analysis you designed yourself is far more convincing than any certificate. If you want the fuller analyst toolkit around SQL — Python, Pandas, statistics, and visualization — the Data Analytics Bootcamp continues from here, and Python vs SQL: Which Should You Learn First? can help you plan the order.",
        ],
      },
    ],
    relatedCourseSlugs: ["sql-for-data-analysis", "data-analytics-bootcamp"],
  },
  {
    slug: "data-analyst-roadmap",
    title: "Data Analyst Learning Roadmap",
    description:
      "The complete skill path to becoming a data analyst: spreadsheets, SQL, Python, Pandas, visualization, statistics, and portfolio projects — in the order that works.",
    intro: [
      "Data analyst is one of the most accessible entry points into technical work: the tools are learnable in months, the demand is broad across industries, and the day-to-day work — turning raw data into answers people can act on — is concrete and visible. But the path in can feel confusing because so many skills are mentioned in job listings: SQL, Python, Excel, statistics, visualization, dashboards.",
      "This roadmap puts those skills in a sensible learning order and explains what \"good enough\" looks like at each stage, so you can move forward without wondering whether you have missed something.",
    ],
    sections: [
      {
        heading: "Stage 1: Spreadsheet fundamentals",
        paragraphs: [
          "Spreadsheets are underrated as a learning tool. Excel or Google Sheets teach the core mental model of tabular data — rows are records, columns are attributes — along with filtering, sorting, pivot tables, and basic formulas. These are the same concepts SQL and Pandas formalize later.",
          "If you already use spreadsheets at work, this stage may take a weekend of deliberate practice: build a pivot table, use VLOOKUP or its modern equivalents, and make a simple chart. Do not skip it entirely, though — analysts collaborate with spreadsheet users constantly.",
        ],
      },
      {
        heading: "Stage 2: SQL",
        paragraphs: [
          "SQL is the first serious technical skill on the path, and for most people it should come before Python. Nearly every analyst job requires it, most company data lives in databases it can query, and it is learnable to a useful level in a few weeks.",
          "Aim for confident use of SELECT, WHERE, GROUP BY with aggregate functions, JOINs across multiple tables, and basic subqueries. Our SQL for Data Analysis course covers this scope with over 100 exercises; the guide How to Learn SQL for Data Analysis lays out the same progression if you are self-assembling your path.",
        ],
      },
      {
        heading: "Stage 3: Python fundamentals",
        paragraphs: [
          "Python extends your reach beyond what SQL can do: cleaning messy files, automating repeated work, statistical analysis, and richer visualization. Learn the fundamentals first — variables, conditions, loops, functions, lists, and dictionaries — before touching any data libraries.",
          "Six to eight weeks of consistent practice is a realistic estimate for this stage from zero. Python for Beginners follows this exact sequence, and the guide How to Learn Python as a Complete Beginner breaks the stages down in detail.",
        ],
      },
      {
        heading: "Stage 4: Pandas",
        paragraphs: [
          "Pandas is where Python becomes a data analysis tool. Its DataFrame is the workhorse of analyst work in Python: loading CSVs and query results, filtering rows, creating computed columns, grouping and aggregating, and handling missing values.",
          "The skills transfer beautifully from earlier stages — GROUP BY in SQL and groupby in Pandas are the same idea — so this stage tends to move faster than Stage 3. Pandas and NumPy for Data Analysis covers this stage at the depth working analysts need.",
        ],
      },
      {
        heading: "Stage 5: Data visualization",
        paragraphs: [
          "Analysis only matters if people understand it, and charts are how findings travel. Learn to choose the right chart for a question (trends → lines, comparisons → bars, distributions → histograms), to build charts from DataFrames, and — just as important — to avoid misleading ones: truncated axes, cherry-picked windows, 3D decoration.",
          "Practice by taking analyses you have already done in earlier stages and presenting each one as a single clear chart with a one-sentence takeaway. That takeaway discipline is what separates analysts from chart producers.",
        ],
      },
      {
        heading: "Stage 6: Basic statistics",
        paragraphs: [
          "You do not need advanced mathematics to be a working analyst, but you do need enough statistics to avoid fooling yourself and others. The essentials: distributions and spread (why the mean can mislead), correlation and its limits (and why it is not causation), and how to compare groups honestly.",
          "Learn these concepts alongside real datasets rather than from formulas alone. When you can look at a suspicious average and instinctively ask to see the distribution, this stage has done its job.",
        ],
      },
      {
        heading: "Stage 7: Portfolio projects",
        paragraphs: [
          "Projects are how you convert skills into evidence. A strong portfolio project starts from a genuine question, uses a real messy dataset, shows your process — including cleaning decisions and dead ends — and ends with clearly stated findings and their limitations.",
          "Three well-documented projects beat ten shallow ones. Ideally they show range: one primarily in SQL, one full Python/Pandas analysis, and one polished presentation piece with strong visualization. The capstone structure in our Data Analytics Bootcamp — which packages Stages 3 through 7 into one curriculum with 10 projects — is built around exactly this principle.",
        ],
      },
      {
        heading: "How long does the whole path take?",
        paragraphs: [
          "With five to eight hours per week of consistent study, the full roadmap from zero to portfolio-ready typically takes five to eight months. That estimate assumes steady weekly practice rather than sporadic intensity — skills at every stage decay quickly without use, and frequent short sessions build them fastest.",
          "The most common failure mode is not slowness but circling: repeating beginner tutorials instead of advancing. If you can do the \"good enough\" checkpoints described in each stage above, move forward. The next stage will reinforce the previous one better than another tutorial ever could.",
        ],
      },
    ],
    relatedCourseSlugs: ["data-analytics-bootcamp", "sql-for-data-analysis", "python-for-beginners", "pandas-and-numpy"],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
