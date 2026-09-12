/* =========================================
   YUGMA COMPANY DETAILS
========================================= */


/* =========================================
   COMPANY DATABASE
========================================= */

const companies = {

    google: {

        name: "Google",

        shortName: "G",

        description:
            "Technology and software company with engineering roles across search, cloud, AI, Android, infrastructure and other products.",

        website:
            "https://www.google.com/",

        careers:
            "https://careers.google.com/",

        topFocus:
            "DSA",

        topics: [

            {
                name: "Data Structures & Algorithms",
                icon: "fa-code",
                description:
                    "Arrays, strings, trees, graphs, hashing, recursion, dynamic programming and complexity."
            },

            {
                name: "Algorithms",
                icon: "fa-diagram-project",
                description:
                    "Searching, sorting, greedy algorithms, graph algorithms and optimization."
            },

            {
                name: "Problem Solving",
                icon: "fa-lightbulb",
                description:
                    "Breaking large problems into smaller parts and explaining the solution clearly."
            },

            {
                name: "System Design",
                icon: "fa-server",
                description:
                    "Scalability, reliability, APIs, databases, caching and distributed systems."
            },

            {
                name: "Machine Learning / AI",
                icon: "fa-brain",
                description:
                    "ML fundamentals, model concepts, evaluation and practical AI understanding."
            },

            {
                name: "Computer Science Fundamentals",
                icon: "fa-laptop-code",
                description:
                    "Operating systems, DBMS, networking and software engineering concepts."
            }

        ],

        interviewTopics: [
            "DSA",
            "Problem Solving",
            "Algorithms",
            "System Design",
            "AI / ML",
            "CS Fundamentals",
            "Behavioral / Googliness"
        ],

        questions: [

            {
                topic: "DSA",
                question:
                    "Given an array of integers, how would you find two numbers whose sum equals a target value?",
                answer:
                    "A common approach is to use a hash map. Store previously seen values and check whether target - current value exists. Average time complexity is O(n)."
            },

            {
                topic: "AI / ML",
                question:
                    "What is the difference between supervised and unsupervised learning?",
                answer:
                    "Supervised learning learns from labeled examples, while unsupervised learning attempts to find patterns or structure in unlabeled data."
            },

            {
                topic: "System Design",
                question:
                    "How would you design a URL shortening service?",
                answer:
                    "Discuss requirements, URL generation, storage, caching, scalability, collision handling, availability and database design."
            }

        ],

        testQuestions: [

            {
                topic: "DSA",
                question:
                    "What is the average time complexity of searching for a value in a hash table?",
                options: [
                    "O(1)",
                    "O(log n)",
                    "O(n)",
                    "O(n log n)"
                ],
                answer: "O(1)"
            },

            {
                topic: "Algorithms",
                question:
                    "Which traversal of a Binary Search Tree produces values in sorted order?",
                options: [
                    "Preorder",
                    "Postorder",
                    "Inorder",
                    "Level order"
                ],
                answer: "Inorder"
            },

            {
                topic: "AI / ML",
                question:
                    "Which technique allows a Transformer model to weigh relationships between tokens?",
                options: [
                    "Attention",
                    "Hashing",
                    "Binary search",
                    "Normalization only"
                ],
                answer: "Attention"
            }

        ],

        process: [
            "Online application",
            "Role-specific assessment may apply",
            "Technical interview preparation",
            "Coding / problem-solving discussion",
            "Role-specific technical rounds",
            "Behavioral / communication discussion"
        ],

        history: [
            {
                year: "2025",
                title: "Preparation focus",
                value: "DSA, algorithms, problem solving and role-specific technical knowledge."
            },
            {
                year: "2024",
                title: "Preparation focus",
                value: "Coding, CS fundamentals, problem solving and system/design concepts depending on role."
            },
            {
                year: "2023",
                title: "Preparation focus",
                value: "DSA and software engineering fundamentals were common preparation areas."
            }
        ],

        skills: [
            "DSA",
            "C++",
            "Java",
            "Python",
            "Algorithms",
            "System Design",
            "DBMS",
            "OS",
            "CN",
            "AI / ML"
        ]

    },


    /* =====================================
       MICROSOFT
    ===================================== */

    microsoft: {

        name: "Microsoft",

        shortName: "M",

        description:
            "Technology company with software, cloud, AI, developer platform and enterprise engineering roles.",

        website:
            "https://www.microsoft.com/",

        careers:
            "https://careers.microsoft.com/",

        topFocus:
            "DSA + Problem Solving",

        topics: [

            {
                name: "Data Structures",
                icon: "fa-code",
                description:
                    "Arrays, strings, linked lists, trees, tries, hash maps, graphs and queues."
            },

            {
                name: "Algorithms",
                icon: "fa-diagram-project",
                description:
                    "Sorting, searching, recursion, graph algorithms and Big-O analysis."
            },

            {
                name: "Coding",
                icon: "fa-terminal",
                description:
                    "Writing clean, correct code and explaining implementation decisions."
            },

            {
                name: "System Design",
                icon: "fa-server",
                description:
                    "Architecture, scalability, distributed systems, availability and design trade-offs."
            },

            {
                name: "AI / ML",
                icon: "fa-brain",
                description:
                    "Machine learning concepts, model evaluation and practical AI understanding."
            },

            {
                name: "Behavioral",
                icon: "fa-comments",
                description:
                    "Communication, collaboration, ownership and explaining previous experiences."
            }

        ],

        interviewTopics: [
            "Algorithms",
            "Data Structures",
            "Coding",
            "System Design",
            "AI / ML",
            "Testing",
            "Behavioral"
        ],

        questions: [

            {
                topic: "DSA",
                question:
                    "How would you detect a cycle in a linked list?",
                answer:
                    "Floyd's cycle detection algorithm uses slow and fast pointers. If they meet, a cycle exists."
            },

            {
                topic: "AI / ML",
                question:
                    "What is overfitting in machine learning?",
                answer:
                    "Overfitting occurs when a model learns training data too closely and performs poorly on unseen data."
            },

            {
                topic: "Behavioral",
                question:
                    "Tell me about a difficult technical problem you solved.",
                answer:
                    "Use a structured response such as Situation, Task, Action and Result. Explain your decisions and measurable outcome."
            }

        ],

        testQuestions: [

            {
                topic: "DSA",
                question:
                    "Which data structure is commonly used for BFS?",
                options: [
                    "Stack",
                    "Queue",
                    "Heap",
                    "Set"
                ],
                answer: "Queue"
            },

            {
                topic: "Algorithms",
                question:
                    "What is the typical average-case complexity of quicksort?",
                options: [
                    "O(1)",
                    "O(log n)",
                    "O(n log n)",
                    "O(n²) only"
                ],
                answer: "O(n log n)"
            },

            {
                topic: "AI / ML",
                question:
                    "Which metric is commonly used to evaluate classification models?",
                options: [
                    "Accuracy",
                    "Disk size",
                    "CPU clock",
                    "Network latency only"
                ],
                answer: "Accuracy"
            }

        ],

        process: [
            "Application",
            "Role-specific screening",
            "Technical assessment/interview where applicable",
            "Coding and problem solving",
            "System/design or role-specific discussion",
            "Behavioral and resume discussion"
        ],

        history: [
            {
                year: "2025",
                title: "Preparation focus",
                value: "Algorithms, data structures, coding, system design and competency-based questions."
            },
            {
                year: "2024",
                title: "Preparation focus",
                value: "Problem solving, coding, core technical knowledge and behavioral preparation."
            },
            {
                year: "2023",
                title: "Preparation focus",
                value: "DSA, coding, system design and communication."
            }
        ],

        skills: [
            "DSA",
            "C++",
            "Java",
            "Python",
            "System Design",
            "Azure",
            "DBMS",
            "OS",
            "CN",
            "AI / ML"
        ]

    },


    /* =====================================
       AMAZON
    ===================================== */

    amazon: {

        name: "Amazon",

        shortName: "A",

        description:
            "Global technology and commerce company with software engineering, cloud, AI and infrastructure roles.",

        website:
            "https://www.amazon.com/",

        careers:
            "https://www.amazon.jobs/",

        topFocus:
            "DSA + Coding",

        topics: [

            {
                name: "Data Structures",
                icon: "fa-code",
                description:
                    "Arrays, strings, linked lists, trees, graphs, heaps and hash tables."
            },

            {
                name: "Algorithms",
                icon: "fa-diagram-project",
                description:
                    "Efficient problem solving, complexity, searching, sorting and optimization."
            },

            {
                name: "Coding",
                icon: "fa-terminal",
                description:
                    "Correct, robust and well-tested code with attention to edge cases."
            },

            {
                name: "Object-Oriented Design",
                icon: "fa-cubes",
                description:
                    "Classes, abstraction, inheritance, interfaces and design decisions."
            },

            {
                name: "Databases",
                icon: "fa-database",
                description:
                    "SQL, database design, indexing, transactions and data management."
            },

            {
                name: "Operating Systems",
                icon: "fa-microchip",
                description:
                    "Processes, threads, memory, concurrency and operating-system concepts."
            },

            {
                name: "AI / ML",
                icon: "fa-brain",
                description:
                    "General machine learning and AI concepts relevant to technical roles."
            },

            {
                name: "Leadership Principles",
                icon: "fa-users",
                description:
                    "Behavioral preparation using specific examples and structured answers."
            }

        ],

        interviewTopics: [
            "DSA",
            "Coding",
            "System Design",
            "OOP",
            "Databases",
            "OS",
            "AI / ML",
            "Leadership Principles"
        ],

        questions: [

            {
                topic: "DSA",
                question:
                    "How would you find the longest substring without repeating characters?",
                answer:
                    "A sliding-window approach with a hash set/map can solve the problem efficiently, typically in O(n) time."
            },

            {
                topic: "AI / ML",
                question:
                    "What is the purpose of a validation dataset?",
                answer:
                    "It is used during model development to tune choices such as hyperparameters and help estimate generalization before final testing."
            },

            {
                topic: "Behavioral",
                question:
                    "Tell me about a time you disagreed with a teammate.",
                answer:
                    "Explain the situation objectively, what you did, how you used evidence or communication, and what the final result was."
            }

        ],

        testQuestions: [

            {
                topic: "DSA",
                question:
                    "Which structure generally provides efficient retrieval by key?",
                options: [
                    "Hash table",
                    "Stack only",
                    "Queue only",
                    "Array with no indexing"
                ],
                answer: "Hash table"
            },

            {
                topic: "DBMS",
                question:
                    "Which SQL clause filters rows before grouping?",
                options: [
                    "WHERE",
                    "ORDER BY",
                    "GROUP BY",
                    "HAVING"
                ],
                answer: "WHERE"
            },

            {
                topic: "OOP",
                question:
                    "Which OOP concept allows one interface to represent different implementations?",
                options: [
                    "Polymorphism",
                    "Compilation",
                    "Indexing",
                    "Normalization"
                ],
                answer: "Polymorphism"
            }

        ],

        process: [
            "Online application",
            "Online assessment may apply",
            "Technical screening",
            "Coding / technical interviews",
            "System design depending on role",
            "Behavioral / Leadership Principles"
        ],

        history: [
            {
                year: "2025",
                title: "SDE preparation",
                value: "Coding, DSA, CS fundamentals, system design and Leadership Principles."
            },
            {
                year: "2024",
                title: "SDE preparation",
                value: "Online assessment, coding, technical interviews and behavioral preparation."
            },
            {
                year: "2023",
                title: "SDE preparation",
                value: "DSA, coding, system design and behavioral questions."
            }
        ],

        skills: [
            "DSA",
            "C++",
            "Java",
            "Python",
            "AWS",
            "System Design",
            "OOP",
            "DBMS",
            "OS",
            "AI / ML"
        ]

    },


    /* =====================================
       META
    ===================================== */

    meta: {

        name: "Meta",

        shortName: "M",

        description:
            "Technology company building social, communication, AI and virtual/augmented reality products.",

        website:
            "https://www.meta.com/",

        careers:
            "https://www.metacareers.com/",

        topFocus:
            "DSA + Coding",

        topics: [

            {
                name: "Data Structures & Algorithms",
                icon: "fa-code",
                description:
                    "Arrays, strings, trees, graphs, hashing and algorithmic problem solving."
            },

            {
                name: "Coding",
                icon: "fa-terminal",
                description:
                    "Clean implementation, complexity analysis and communicating your approach."
            },

            {
                name: "System Design",
                icon: "fa-server",
                description:
                    "Scalable services, APIs, data storage and distributed systems."
            },

            {
                name: "Software Engineering",
                icon: "fa-laptop-code",
                description:
                    "Engineering practices, debugging, testing and software architecture."
            },

            {
                name: "Behavioral",
                icon: "fa-comments",
                description:
                    "Communication, teamwork, impact and previous project experience."
            }

        ],

        interviewTopics: [
            "DSA",
            "Coding",
            "System Design",
            "Software Engineering",
            "Behavioral"
        ],

        questions: [

            {
                topic: "DSA",
                question:
                    "How would you merge two sorted linked lists?",
                answer:
                    "Use two pointers and repeatedly attach the smaller current node to the result list."
            },

            {
                topic: "System Design",
                question:
                    "How would you design a scalable notification service?",
                answer:
                    "Discuss requirements, queues, workers, storage, retries, rate limits, delivery guarantees and scalability."
            },

            {
                topic: "Behavioral",
                question:
                    "Tell me about a project where you had significant impact.",
                answer:
                    "Describe the problem, your specific contribution, measurable outcome and what you learned."
            }

        ],

        testQuestions: [

            {
                topic: "DSA",
                question:
                    "Which data structure is commonly used to implement BFS?",
                options: [
                    "Queue",
                    "Stack",
                    "Heap only",
                    "Tree only"
                ],
                answer: "Queue"
            },

            {
                topic: "Algorithms",
                question:
                    "What does Big-O primarily describe?",
                options: [
                    "Algorithm growth rate",
                    "Programming language",
                    "Database size only",
                    "UI design"
                ],
                answer: "Algorithm growth rate"
            },

            {
                topic: "System Design",
                question:
                    "What is caching primarily used for?",
                options: [
                    "Reducing repeated expensive access",
                    "Deleting databases",
                    "Replacing all servers",
                    "Compiling code"
                ],
                answer: "Reducing repeated expensive access"
            }

        ],

        process: [
            "Application",
            "Recruiter / screening stage where applicable",
            "Technical interview",
            "Coding / problem solving",
            "Design discussion for applicable roles",
            "Behavioral discussion"
        ],

        history: [
            {
                year: "2025",
                title: "Preparation focus",
                value: "DSA, coding, system design and behavioral preparation."
            },
            {
                year: "2024",
                title: "Preparation focus",
                value: "Coding, problem solving, design and software engineering."
            }
        ],

        skills: [
            "DSA",
            "C++",
            "Python",
            "Java",
            "React",
            "System Design",
            "Distributed Systems",
            "DBMS",
            "Git"
        ]

    },


    /* =====================================
       APPLE
    ===================================== */

    apple: {

        name: "Apple",

        shortName: "",

        description:
            "Technology company with hardware, software, services, AI, infrastructure and engineering opportunities.",

        website:
            "https://www.apple.com/",

        careers:
            "https://jobs.apple.com/",

        topFocus:
            "DSA + CS Fundamentals",

        topics: [

            {
                name: "Data Structures",
                icon: "fa-code",
                description:
                    "Arrays, strings, trees, graphs, hashing and appropriate structure selection."
            },

            {
                name: "Algorithms",
                icon: "fa-diagram-project",
                description:
                    "Efficient algorithms, complexity analysis and problem solving."
            },

            {
                name: "Operating Systems",
                icon: "fa-microchip",
                description:
                    "Processes, threads, memory and concurrency fundamentals."
            },

            {
                name: "Computer Networks",
                icon: "fa-network-wired",
                description:
                    "Networking concepts, protocols and distributed communication."
            },

            {
                name: "System Design",
                icon: "fa-server",
                description:
                    "Architecture, reliability, scalability and engineering trade-offs."
            },

            {
                name: "AI / ML",
                icon: "fa-brain",
                description:
                    "AI and machine learning fundamentals relevant to the role."
            }

        ],

        interviewTopics: [
            "DSA",
            "Algorithms",
            "OS",
            "CN",
            "System Design",
            "AI / ML"
        ],

        questions: [

            {
                topic: "DSA",
                question:
                    "How would you determine whether two strings are anagrams?",
                answer:
                    "Compare character frequencies using an array or hash map, or sort both strings and compare them."
            },

            {
                topic: "OS",
                question:
                    "What is the difference between a process and a thread?",
                answer:
                    "A process is an independent execution environment, while threads are execution units within a process and generally share its memory."
            },

            {
                topic: "AI / ML",
                question:
                    "What is gradient descent used for?",
                answer:
                    "It is an optimization method commonly used to minimize a model's loss function by updating parameters in the direction of lower loss."
            }

        ],

        testQuestions: [

            {
                topic: "DSA",
                question:
                    "Which structure follows LIFO?",
                options: [
                    "Queue",
                    "Stack",
                    "Graph",
                    "Heap"
                ],
                answer: "Stack"
            },

            {
                topic: "OS",
                question:
                    "Which memory is generally faster than main memory?",
                options: [
                    "Cache",
                    "Hard disk",
                    "USB drive",
                    "Optical disk"
                ],
                answer: "Cache"
            },

            {
                topic: "CN",
                question:
                    "Which protocol is commonly used to translate domain names into IP addresses?",
                options: [
                    "DNS",
                    "FTP",
                    "SMTP",
                    "SSH"
                ],
                answer: "DNS"
            }

        ],

        process: [
            "Application",
            "Role-specific screening",
            "Technical interview",
            "Coding / technical discussion",
            "Role-specific engineering rounds",
            "Behavioral discussion"
        ],

        history: [
            {
                year: "2025",
                title: "Preparation focus",
                value: "DSA, CS fundamentals, system/design concepts and role-specific knowledge."
            },
            {
                year: "2024",
                title: "Preparation focus",
                value: "Algorithms, coding, systems and engineering fundamentals."
            }
        ],

        skills: [
            "DSA",
            "Swift",
            "C++",
            "Python",
            "Algorithms",
            "OS",
            "CN",
            "System Design",
            "AI / ML"
        ]

    },


    /* =====================================
       INFOSYS
    ===================================== */

    infosys: {

        name: "Infosys",

        shortName: "I",

        description:
            "Global IT services and consulting company with software engineering, consulting and technology roles.",

        website:
            "https://www.infosys.com/",

        careers:
            "https://www.infosys.com/careers/",

        topFocus:
            "Programming + Aptitude",

        topics: [

            {
                name: "Programming",
                icon: "fa-code",
                description:
                    "Core programming concepts, problem solving and coding practice."
            },

            {
                name: "DSA",
                icon: "fa-diagram-project",
                description:
                    "Arrays, strings, searching, sorting, stacks, queues and basic trees."
            },

            {
                name: "DBMS & SQL",
                icon: "fa-database",
                description:
                    "SQL queries, normalization, keys, joins and database fundamentals."
            },

            {
                name: "OOP",
                icon: "fa-cubes",
                description:
                    "Classes, objects, inheritance, abstraction, encapsulation and polymorphism."
            },

            {
                name: "Aptitude",
                icon: "fa-calculator",
                description:
                    "Quantitative aptitude, logical reasoning and problem-solving."
            },

            {
                name: "Communication",
                icon: "fa-comments",
                description:
                    "Resume discussion, communication and behavioral preparation."
            }

        ],

        interviewTopics: [
            "Programming",
            "DSA",
            "DBMS",
            "OOP",
            "Aptitude",
            "Communication"
        ],

        questions: [

            {
                topic: "Programming",
                question:
                    "What is the difference between a compiler and an interpreter?",
                answer:
                    "A compiler generally translates a program before execution, while an interpreter executes translated instructions during runtime."
            },

            {
                topic: "DBMS",
                question:
                    "What is normalization in DBMS?",
                answer:
                    "Normalization organizes data to reduce redundancy and improve data integrity."
            },

            {
                topic: "HR",
                question:
                    "Why do you want to join this company?",
                answer:
                    "Connect your answer to the role, your skills, learning goals and the value you can contribute."
            }

        ],

        testQuestions: [

            {
                topic: "OOP",
                question:
                    "Which concept hides internal implementation details?",
                options: [
                    "Encapsulation",
                    "Inheritance",
                    "Looping",
                    "Sorting"
                ],
                answer: "Encapsulation"
            },

            {
                topic: "DBMS",
                question:
                    "Which SQL command retrieves data?",
                options: [
                    "SELECT",
                    "DELETE",
                    "DROP",
                    "ALTER"
                ],
                answer: "SELECT"
            },

            {
                topic: "Aptitude",
                question:
                    "If a product costs ₹100 and is sold for ₹120, what is the profit percentage?",
                options: [
                    "10%",
                    "15%",
                    "20%",
                    "25%"
                ],
                answer: "20%"
            }

        ],

        process: [
            "Application",
            "Online assessment depending on hiring program",
            "Technical discussion",
            "Programming / CS fundamentals",
            "HR / behavioral discussion"
        ],

        history: [
            {
                year: "2025",
                title: "Common preparation",
                value: "Programming, aptitude, logical reasoning, CS fundamentals and communication."
            },
            {
                year: "2024",
                title: "Common preparation",
                value: "Coding, aptitude, DBMS, OOP and interview preparation."
            }
        ],

        skills: [
            "C",
            "C++",
            "Java",
            "Python",
            "SQL",
            "DBMS",
            "OOP",
            "DSA",
            "Aptitude"
        ]

    },


    /* =====================================
       TCS
    ===================================== */

    tcs: {

        name: "TCS",

        shortName: "T",

        description:
            "Global IT services and consulting organization with graduate, software and technology opportunities.",

        website:
            "https://www.tcs.com/",

        careers:
            "https://www.tcs.com/careers",

        topFocus:
            "Programming + Aptitude",

        topics: [

            {
                name: "Programming",
                icon: "fa-code",
                description:
                    "Programming fundamentals, problem solving and coding."
            },

            {
                name: "DSA",
                icon: "fa-diagram-project",
                description:
                    "Arrays, strings, searching, sorting and fundamental data structures."
            },

            {
                name: "DBMS",
                icon: "fa-database",
                description:
                    "SQL, normalization, keys, joins and database concepts."
            },

            {
                name: "OOP",
                icon: "fa-cubes",
                description:
                    "Object-oriented programming fundamentals."
            },

            {
                name: "Aptitude",
                icon: "fa-calculator",
                description:
                    "Quantitative aptitude, reasoning and verbal preparation."
            }

        ],

        interviewTopics: [
            "Programming",
            "DSA",
            "DBMS",
            "OOP",
            "Aptitude",
            "HR"
        ],

        questions: [

            {
                topic: "DSA",
                question:
                    "How can you find the largest element in an array efficiently?",
                answer:
                    "Scan the array once while maintaining the maximum value. This requires O(n) time and O(1) extra space."
            },

            {
                topic: "DBMS",
                question:
                    "What is a primary key?",
                answer:
                    "A primary key uniquely identifies each row in a relational table."
            },

            {
                topic: "HR",
                question:
                    "Where do you see yourself in five years?",
                answer:
                    "Describe a realistic progression of technical expertise, responsibility and contribution."
            }

        ],

        testQuestions: [

            {
                topic: "DSA",
                question:
                    "What is the worst-case complexity of linear search?",
                options: [
                    "O(1)",
                    "O(log n)",
                    "O(n)",
                    "O(n log n)"
                ],
                answer: "O(n)"
            },

            {
                topic: "DBMS",
                question:
                    "Which key can uniquely identify a row?",
                options: [
                    "Primary key",
                    "Foreign key only",
                    "Duplicate key",
                    "Temporary key"
                ],
                answer: "Primary key"
            },

            {
                topic: "OOP",
                question:
                    "Inheritance mainly allows a class to:",
                options: [
                    "Reuse/extend behavior from another class",
                    "Delete a database",
                    "Sort an array",
                    "Create a network"
                ],
                answer: "Reuse/extend behavior from another class"
            }

        ],

        process: [
            "Application",
            "Assessment depending on hiring program",
            "Technical interview",
            "Programming / CS fundamentals",
            "HR / behavioral round"
        ],

        history: [
            {
                year: "2025",
                title: "Common preparation",
                value: "Programming, aptitude, DSA, DBMS, OOP and communication."
            },
            {
                year: "2024",
                title: "Common preparation",
                value: "Coding, aptitude, technical fundamentals and HR."
            }
        ],

        skills: [
            "C",
            "C++",
            "Java",
            "Python",
            "SQL",
            "DSA",
            "DBMS",
            "OOP"
        ]

    },


    /* =====================================
       WIPRO
    ===================================== */

    wipro: {

        name: "Wipro",

        shortName: "W",

        description:
            "Global technology services and consulting organization with software and graduate technology roles.",

        website:
            "https://www.wipro.com/",

        careers:
            "https://careers.wipro.com/",

        topFocus:
            "Programming + CS Fundamentals",

        topics: [

            {
                name: "Programming",
                icon: "fa-code",
                description:
                    "Programming fundamentals and problem solving."
            },

            {
                name: "DSA",
                icon: "fa-diagram-project",
                description:
                    "Basic and intermediate data structures and algorithms."
            },

            {
                name: "DBMS",
                icon: "fa-database",
                description:
                    "SQL, keys, joins and database fundamentals."
            },

            {
                name: "OOP",
                icon: "fa-cubes",
                description:
                    "Core object-oriented concepts."
            },

            {
                name: "Computer Networks",
                icon: "fa-network-wired",
                description:
                    "Networking fundamentals and common protocols."
            },

            {
                name: "Aptitude",
                icon: "fa-calculator",
                description:
                    "Quantitative and logical reasoning."
            }

        ],

        interviewTopics: [
            "Programming",
            "DSA",
            "DBMS",
            "OOP",
            "CN",
            "Aptitude"
        ],

        questions: [

            {
                topic: "Programming",
                question:
                    "What is recursion?",
                answer:
                    "Recursion occurs when a function calls itself with a base condition that eventually stops the recursive calls."
            },

            {
                topic: "CN",
                question:
                    "What is the role of DNS?",
                answer:
                    "DNS translates human-readable domain names into IP addresses."
            },

            {
                topic: "HR",
                question:
                    "Why should we hire you?",
                answer:
                    "Connect your strongest relevant skills, projects and learning ability to the role."
            }

        ],

        testQuestions: [

            {
                topic: "Programming",
                question:
                    "Which loop is guaranteed to execute its body at least once?",
                options: [
                    "for",
                    "while",
                    "do-while",
                    "none"
                ],
                answer: "do-while"
            },

            {
                topic: "CN",
                question:
                    "HTTP is primarily used for:",
                options: [
                    "Web communication",
                    "Memory allocation",
                    "CPU scheduling",
                    "Database normalization"
                ],
                answer: "Web communication"
            },

            {
                topic: "OOP",
                question:
                    "Which is an example of polymorphism?",
                options: [
                    "Same interface with different implementations",
                    "Deleting a class",
                    "Creating a database",
                    "Sorting numbers"
                ],
                answer: "Same interface with different implementations"
            }

        ],

        process: [
            "Application",
            "Assessment depending on program",
            "Technical discussion",
            "Programming / CS fundamentals",
            "HR discussion"
        ],

        history: [
            {
                year: "2025",
                title: "Common preparation",
                value: "Programming, aptitude, DSA, DBMS, OOP and communication."
            },
            {
                year: "2024",
                title: "Common preparation",
                value: "Coding, technical fundamentals and aptitude."
            }
        ],

        skills: [
            "C",
            "C++",
            "Java",
            "Python",
            "SQL",
            "DSA",
            "DBMS",
            "OOP"
        ]

    },


    /* =====================================
       COGNIZANT
    ===================================== */

    cognizant: {

        name: "Cognizant",

        shortName: "C",

        description:
            "Technology and consulting company with software development, digital engineering and IT services roles.",

        website:
            "https://www.cognizant.com/",

        careers:
            "https://careers.cognizant.com/",

        topFocus:
            "Programming + SQL",

        topics: [

            {
                name: "Programming",
                icon: "fa-code",
                description:
                    "Programming concepts and coding problem solving."
            },

            {
                name: "DSA",
                icon: "fa-diagram-project",
                description:
                    "Arrays, strings, searching, sorting and basic data structures."
            },

            {
                name: "SQL",
                icon: "fa-database",
                description:
                    "Queries, joins, aggregation, keys and database concepts."
            },

            {
                name: "OOP",
                icon: "fa-cubes",
                description:
                    "Core object-oriented concepts and design."
            },

            {
                name: "Aptitude",
                icon: "fa-calculator",
                description:
                    "Quantitative and logical reasoning."
            }

        ],

        interviewTopics: [
            "Programming",
            "DSA",
            "SQL",
            "OOP",
            "Aptitude",
            "HR"
        ],

        questions: [

            {
                topic: "SQL",
                question:
                    "What is the difference between WHERE and HAVING?",
                answer:
                    "WHERE filters rows before grouping, while HAVING filters grouped results."
            },

            {
                topic: "DSA",
                question:
                    "What is the difference between an array and a linked list?",
                answer:
                    "Arrays provide contiguous storage and efficient indexed access, while linked lists use nodes connected by links and support easier insertion/deletion at known positions."
            },

            {
                topic: "HR",
                question:
                    "Explain one of your projects.",
                answer:
                    "Explain the problem, technology used, your contribution, challenges and final outcome."
            }

        ],

        testQuestions: [

            {
                topic: "SQL",
                question:
                    "Which SQL function is commonly used to count rows?",
                options: [
                    "COUNT()",
                    "SUMTEXT()",
                    "ROWS()",
                    "NUMBER()"
                ],
                answer: "COUNT()"
            },

            {
                topic: "DSA",
                question:
                    "Which data structure follows FIFO?",
                options: [
                    "Stack",
                    "Queue",
                    "Tree",
                    "Graph"
                ],
                answer: "Queue"
            },

            {
                topic: "OOP",
                question:
                    "Which concept combines data and methods inside a class?",
                options: [
                    "Encapsulation",
                    "Sorting",
                    "Searching",
                    "Indexing"
                ],
                answer: "Encapsulation"
            }

        ],

        process: [
            "Application",
            "Assessment where applicable",
            "Technical interview",
            "Programming / SQL discussion",
            "HR / behavioral discussion"
        ],

        history: [
            {
                year: "2025",
                title: "Common preparation",
                value: "Programming, SQL, DSA, aptitude and communication."
            },
            {
                year: "2024",
                title: "Common preparation",
                value: "Coding, database concepts, aptitude and technical fundamentals."
            }
        ],

        skills: [
            "C",
            "C++",
            "Java",
            "Python",
            "SQL",
            "DBMS",
            "DSA",
            "OOP"
        ]

    },


    /* =====================================
       NVIDIA
    ===================================== */

    nvidia: {

        name: "NVIDIA",

        shortName: "N",

        description:
            "Technology company focused on accelerated computing, graphics, AI, software and high-performance computing.",

        website:
            "https://www.nvidia.com/",

        careers:
            "https://www.nvidia.com/en-us/about-nvidia/careers/",

        topFocus:
            "DSA + C++ + AI",

        topics: [

            {
                name: "DSA",
                icon: "fa-code",
                description:
                    "Algorithmic problem solving, data structures and complexity."
            },

            {
                name: "C / C++",
                icon: "fa-terminal",
                description:
                    "Programming, memory, pointers, object-oriented programming and performance."
            },

            {
                name: "Operating Systems",
                icon: "fa-microchip",
                description:
                    "Processes, threads, memory and concurrency."
            },

            {
                name: "Computer Architecture",
                icon: "fa-memory",
                description:
                    "CPU/GPU concepts, memory hierarchy and performance."
            },

            {
                name: "AI / ML",
                icon: "fa-brain",
                description:
                    "Machine learning, deep learning and AI fundamentals."
            },

            {
                name: "CUDA / Parallel Computing",
                icon: "fa-bolt",
                description:
                    "Parallel processing and GPU programming concepts for applicable roles."
            }

        ],

        interviewTopics: [
            "DSA",
            "C++",
            "OS",
            "Computer Architecture",
            "AI / ML",
            "Parallel Computing"
        ],

        questions: [

            {
                topic: "C++",
                question:
                    "What is the difference between stack memory and heap memory?",
                answer:
                    "Stack memory is commonly used for automatic/local storage, while heap memory is dynamically allocated and managed during program execution."
            },

            {
                topic: "AI / ML",
                question:
                    "What is the difference between training and inference?",
                answer:
                    "Training learns model parameters from data, while inference uses the trained model to generate predictions or outputs."
            },

            {
                topic: "Computer Architecture",
                question:
                    "Why is memory hierarchy important for performance?",
                answer:
                    "Different memory levels have different capacities, costs and access speeds. Efficient programs try to exploit faster memory and locality."
            }

        ],

        testQuestions: [

            {
                topic: "C++",
                question:
                    "Which concept allows runtime method selection in many OOP designs?",
                options: [
                    "Runtime polymorphism",
                    "Sorting",
                    "Indexing",
                    "Normalization"
                ],
                answer: "Runtime polymorphism"
            },

            {
                topic: "AI / ML",
                question:
                    "What is a neural network primarily composed of?",
                options: [
                    "Connected computational units/layers",
                    "Only SQL tables",
                    "Only CPU registers",
                    "HTML tags"
                ],
                answer: "Connected computational units/layers"
            },

            {
                topic: "OS",
                question:
                    "What does a thread represent?",
                options: [
                    "A unit of execution within a process",
                    "A database",
                    "A network protocol",
                    "A compiler"
                ],
                answer: "A unit of execution within a process"
            }

        ],

        process: [
            "Application",
            "Technical screening",
            "Coding / DSA",
            "Role-specific technical rounds",
            "AI/ML or systems discussion depending on role"
        ],

        history: [
            {
                year: "2025",
                title: "Preparation focus",
                value: "DSA, C/C++, systems, architecture and AI/ML for relevant roles."
            },
            {
                year: "2024",
                title: "Preparation focus",
                value: "Programming, systems, algorithms and role-specific technical knowledge."
            }
        ],

        skills: [
            "C",
            "C++",
            "Python",
            "CUDA",
            "DSA",
            "AI",
            "Machine Learning",
            "Deep Learning",
            "OS",
            "Computer Architecture"
        ]

    }

};


/* =========================================
   DOM ELEMENTS
========================================= */

const companyGrid =
    document.getElementById("companyGrid");

const companySelect =
    document.getElementById("companySelect");

const roleSelect =
    document.getElementById("roleSelect");

const typeButtons =
    document.querySelectorAll(".type-btn");

const nextBtn =
    document.getElementById("nextBtn");

const selectionError =
    document.getElementById("selectionError");

const detailsSection =
    document.getElementById("detailsSection");

let selectedType = "interview";


/* =========================================
   INITIALIZE
========================================= */

function initializePage() {

    renderCompanyCards();

    populateCompanySelect();

    setupTypeButtons();

}


/* =========================================
   COMPANY CARDS
========================================= */

function renderCompanyCards() {

    const entries =
        Object.entries(companies);

    companyGrid.innerHTML =
        entries.map(([key, company]) => {

            return `

                <div
                    class="company-card"
                    data-company="${key}"
                >

                    <div class="company-card-logo">
                        ${escapeHTML(company.shortName)}
                    </div>

                    <h3>
                        ${escapeHTML(company.name)}
                    </h3>

                    <p>
                        Focus:
                        ${escapeHTML(company.topFocus)}
                    </p>

                    <span class="arrow">
                        Prepare
                        <i class="fa-solid fa-arrow-right"></i>
                    </span>

                </div>

            `;

        }).join("");


    document
        .querySelectorAll(".company-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const key =
                        card.dataset.company;

                    companySelect.value =
                        key;

                    document
                        .getElementById(
                            "companySelector"
                        )
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                }
            );

        });

}


/* =========================================
   COMPANY SELECT
========================================= */

function populateCompanySelect() {

    Object.entries(companies)
        .forEach(([key, company]) => {

            const option =
                document.createElement("option");

            option.value = key;

            option.textContent =
                company.name;

            companySelect.appendChild(option);

        });

}


/* =========================================
   TYPE BUTTONS
========================================= */

function setupTypeButtons() {

    typeButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                typeButtons.forEach(btn => {

                    btn.classList.remove("active");

                });

                button.classList.add("active");

                selectedType =
                    button.dataset.type;

            }
        );

    });

}


/* =========================================
   NEXT
========================================= */

nextBtn.addEventListener(
    "click",
    () => {

        const companyKey =
            companySelect.value;

        const role =
            roleSelect.value;

        if (!companyKey) {

            selectionError.textContent =
                "Please select a company first.";

            companySelect.focus();

            return;

        }

        selectionError.textContent = "";

        generateCompanyDetails(
            companyKey,
            selectedType,
            role
        );

        detailsSection.classList.remove(
            "hidden"
        );

        setTimeout(() => {

            detailsSection.scrollIntoView({
                behavior: "smooth"
            });

        }, 100);

    }
);


/* =========================================
   GENERATE DETAILS
========================================= */

function generateCompanyDetails(
    companyKey,
    type,
    role
) {

    const company =
        companies[companyKey];

    document.getElementById(
        "companyLogo"
    ).textContent =
        company.shortName;

    document.getElementById(
        "detailsCompanyName"
    ).textContent =
        company.name;

    document.getElementById(
        "detailsCompanyDescription"
    ).textContent =
        company.description;


    /* Website */

    const website =
        document.getElementById(
            "companyWebsite"
        );

    website.href =
        company.website;


    const career =
        document.getElementById(
            "officialCareerLink"
        );

    career.href =
        company.careers;


    /* Stats */

    document.getElementById(
        "topFocus"
    ).textContent =
        company.topFocus;

    document.getElementById(
        "topicCount"
    ).textContent =
        company.topics.length;

    document.getElementById(
        "questionCount"
    ).textContent =
        company.questions.length +
        company.testQuestions.length;

    document.getElementById(
        "selectedMode"
    ).textContent =
        type === "interview"
            ? "Interview"
            : "Test / Paper";


    renderRoadmap(company, type);

    renderTopics(company);

    renderInterviewQuestions(
        company
    );

    renderTestQuestions(
        company
    );

    renderProcess(company);

    renderHistory(company);

    renderSkills(company);

}


/* =========================================
   ROADMAP
========================================= */

function renderRoadmap(
    company,
    type
) {

    const roadmap =
        document.getElementById(
            "roadmap"
        );

    let steps;

    if (type === "interview") {

        steps = [

            [
                "Research",
                "Understand the company, role and job description."
            ],

            [
                "Core Topics",
                `Prepare ${company.topFocus} and important CS fundamentals.`
            ],

            [
                "Practice",
                "Solve representative coding and technical questions."
            ],

            [
                "Interview",
                "Practice explaining your solution and project experience."
            ]

        ];

    } else {

        steps = [

            [
                "Syllabus",
                "Identify programming, aptitude and role-specific topics."
            ],

            [
                "Concepts",
                `Strengthen ${company.topFocus}.`
            ],

            [
                "Mock Test",
                "Practice timed questions under test conditions."
            ],

            [
                "Review",
                "Analyze mistakes and repeat weak topics."
            ]

        ];

    }


    roadmap.innerHTML =
        steps.map((step, index) => {

            return `

                <div class="roadmap-item">

                    <div class="roadmap-number">
                        ${index + 1}
                    </div>

                    <h4>
                        ${escapeHTML(step[0])}
                    </h4>

                    <p>
                        ${escapeHTML(step[1])}
                    </p>

                </div>

            `;

        }).join("");

}


/* =========================================
   TOPICS
========================================= */

function renderTopics(company) {

    const container =
        document.getElementById(
            "topicsList"
        );

    container.innerHTML =
        company.topics.map(topic => {

            return `

                <div class="topic-item">

                    <div class="topic-icon">
                        <i class="fa-solid ${topic.icon}"></i>
                    </div>

                    <div>

                        <h4>
                            ${escapeHTML(topic.name)}
                        </h4>

                        <p>
                            ${escapeHTML(
                                topic.description
                            )}
                        </p>

                    </div>

                </div>

            `;

        }).join("");

}


/* =========================================
   INTERVIEW QUESTIONS
========================================= */

function renderInterviewQuestions(
    company
) {

    const container =
        document.getElementById(
            "questionsList"
        );

    container.innerHTML =
        company.questions.map(question => {

            return `

                <div class="question-item">

                    <div class="question-top">

                        <span class="question-topic">
                            ${escapeHTML(
                                question.topic
                            )}
                        </span>

                    </div>

                    <h4>
                        ${escapeHTML(
                            question.question
                        )}
                    </h4>

                    <div class="question-answer">

                        <strong>
                            Preparation direction:
                        </strong>

                        ${escapeHTML(
                            question.answer
                        )}

                    </div>

                </div>

            `;

        }).join("");

}


/* =========================================
   TEST QUESTIONS
========================================= */

function renderTestQuestions(
    company
) {

    const container =
        document.getElementById(
            "testQuestionsList"
        );

    container.innerHTML =
        company.testQuestions.map(
            question => {

                return `

                    <div class="question-item">

                        <div class="question-top">

                            <span class="question-topic">
                                ${escapeHTML(
                                    question.topic
                                )}
                            </span>

                        </div>

                        <h4>
                            ${escapeHTML(
                                question.question
                            )}
                        </h4>

                        <div class="question-answer">

                            <strong>
                                Example answer:
                            </strong>

                            ${escapeHTML(
                                question.answer
                            )}

                        </div>

                    </div>

                `;

            }
        ).join("");

}


/* =========================================
   PROCESS
========================================= */

function renderProcess(company) {

    const container =
        document.getElementById(
            "processList"
        );

    container.innerHTML =
        company.process.map(item => {

            return `

                <div class="process-item">

                    <i class="fa-solid fa-circle-check"></i>

                    <span>
                        ${escapeHTML(item)}
                    </span>

                </div>

            `;

        }).join("");

}


/* =========================================
   HISTORICAL DATA
========================================= */

function renderHistory(company) {

    const container =
        document.getElementById(
            "historicalData"
        );

    container.innerHTML =
        company.history.map(item => {

            return `

                <div class="history-item">

                    <strong>
                        ${escapeHTML(
                            item.year
                        )}
                        —
                        ${escapeHTML(
                            item.title
                        )}
                    </strong>

                    <span>
                        ${escapeHTML(
                            item.value
                        )}
                    </span>

                </div>

            `;

        }).join("");

}


/* =========================================
   SKILLS
========================================= */

function renderSkills(company) {

    const container =
        document.getElementById(
            "skillsList"
        );

    container.innerHTML =
        company.skills.map(skill => {

            return `

                <span class="skill-tag">
                    ${escapeHTML(skill)}
                </span>

            `;

        }).join("");

}


/* =========================================
   ESCAPE HTML
========================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================
   START
========================================= */

initializePage();