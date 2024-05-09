const quizData = {
  C: [
    {
      question: 'What does printf() do in C?',
      options: ['Prints a message to the console', 'Allocates memory', 'Reads a file', 'None of the above'],
      answer: 'Prints a message to the console'
    },
    {
      question: 'What is the syntax for declaring a variable in C?',
      options: ['var', 'let', 'int', 'string'],
      answer: 'int'
    },
    {
      question: 'Which of the following is not a valid data type in C?',
      options: ['int', 'string', 'float', 'boolean'],
      answer: 'boolean'
    },
    {
      question: 'What is the result of 5 + 3 * 2 in C?',
      options: ['10', '16', '11', '13'],
      answer: '11'
    },
    {
      question: 'Which symbol is used to indicate a single-line comment in C?',
      options: ['//', '/*', '#', '--'],
      answer: '//'
    },
    {
      question: 'What is the output of the following code snippet? \n\n#include <stdio.h>\nint main() {\n  int x = 10;\n  printf("%d", x);\n  return 0;\n}',
      options: ['10', '0', 'Garbage value', 'Compilation error'],
      answer: '10'
    },
    {
      question: 'Which function is used to read input from the standard input device in C?',
      options: ['scanf()', 'printf()', 'gets()', 'puts()'],
      answer: 'scanf()'
    },
    {
      question: 'Which header file is required for using functions like printf() and scanf() in C?',
      options: ['<stdio.h>', '<stdlib.h>', '<math.h>', '<string.h>'],
      answer: '<stdio.h>'
    },
    {
      question: 'What is the size of int data type in C?',
      options: ['2 bytes', '4 bytes', '8 bytes', 'Depends on the system architecture'],
      answer: 'Depends on the system architecture'
    },
    {
      question: 'What is the result of the following code snippet? \n\nint main() {\n  printf("%d", sizeof(int));\n  return 0;\n}',
      options: ['2', '4', '8', 'Depends on the system architecture'],
      answer: 'Depends on the system architecture'
    }
  ],
  Java: [
    {
      question: 'What is the JVM?',
      options: ['Java Virtual Machine', 'Just Very Magnificent', 'Jellybean Vending Machine', 'None of the above'],
      answer: 'Java Virtual Machine'
    },
    {
      question: 'Which of the following is not a Java feature?',
      options: ['Dynamic', 'Architecture Neutral', 'Use of pointers', 'Object-oriented'],
      answer: 'Use of pointers'
    },
    {
      question: 'What is the output of 5 + 7 * 2 in Java?',
      options: ['24', '19', '19.0', '24.0'],
      answer: '19'
    },
    {
      question: 'Which of the following is a reserved keyword in Java?',
      options: ['string', 'program', 'super', 'this'],
      answer: 'super'
    },
    {
      question: 'What is the parent class of all classes in Java?',
      options: ['Object', 'Class', 'Main', 'Parent'],
      answer: 'Object'
    },
    {
      question: 'What will happen if a superclass reference is used to refer to a subclass object in Java?',
      options: ['Compilation error', 'Runtime exception', 'No error, but cast required', 'No error, and no cast required'],
      answer: 'No error, but cast required'
    },
    {
      question: 'Which keyword is used to prevent method overriding in Java?',
      options: ['override', 'final', 'private', 'static'],
      answer: 'final'
    },
    {
      question: 'What is the correct way to declare a constant in Java?',
      options: ['const int x = 5;', 'final int x = 5;', 'int constant x = 5;', 'static final int x = 5;'],
      answer: 'static final int x = 5;'
    },
    {
      question: 'Which of the following is true about Java packages?',
      options: ['A package can contain only one class', 'All classes in a package must have unique names', 'A package can be renamed easily', 'Package names should be unique across all Java projects'],
      answer: 'All classes in a package must have unique names'
    },
    {
      question: 'What is the default value of a member variable in Java?',
      options: ['0', 'null', 'undefined', 'Depends on the variable type'],
      answer: 'Depends on the variable type'
    }
  ],
  Python: [
    {
      question: 'What is Python?',
      options: ['A snake', 'A programming language', 'A web browser', 'A type of pasta'],
      answer: 'A programming language'
    },
    // Add more questions for Python
  ],
  'C++': [
    {
      question: 'What is C++?',
      options: ['A programming language', 'A type of car', 'A coffee brand', 'A mathematical operator'],
      answer: 'A programming language'
    },
    // Add more questions for C++
  ],
  'C#': [
    {
      question: 'What is C#?',
      options: ['A musical note', 'A programming language', 'A type of food', 'A type of clothing'],
      answer: 'A programming language'
    },
    // Add more questions for C#
  ],
  Algorithms: [
    {
      question: 'What is an algorithm?',
      options: ['A programming language', 'A set of rules for solving a problem', 'A data structure', 'A software tool'],
      answer: 'A set of rules for solving a problem'
    },
    {
      question: 'What is the time complexity of the bubble sort algorithm?',
      options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'],
      answer: 'O(n^2)'
    },
    {
      question: 'Which algorithm is used for searching in a sorted array?',
      options: ['Bubble Sort', 'Selection Sort', 'Linear Search', 'Binary Search'],
      answer: 'Binary Search'
    },
    {
      question: 'What is the best-case time complexity of the merge sort algorithm?',
      options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(n log n)'],
      answer: 'O(n log n)'
    },
    {
      question: 'What is dynamic programming?',
      options: ['A programming paradigm', 'A programming language', 'A data structure', 'A sorting algorithm'],
      answer: 'A programming paradigm'
    },
    {
      question: 'What is the purpose of the greedy algorithm?',
      options: ['To find the maximum value', 'To find the minimum value', 'To find the best solution at each step', 'To find the worst solution at each step'],
      answer: 'To find the best solution at each step'
    },
    {
      question: 'What is the time complexity of the quicksort algorithm in the worst case?',
      options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(n log n)'],
      answer: 'O(n^2)'
    },
    {
      question: 'What is a divide-and-conquer algorithm?',
      options: ['An algorithm that divides the problem into smaller subproblems', 'An algorithm that solves the problem in one step', 'An algorithm that combines solutions from subproblems', 'An algorithm that selects the best solution'],
      answer: 'An algorithm that divides the problem into smaller subproblems'
    },
    {
      question: 'Which algorithm is used for finding the shortest path in a graph?',
      options: ['Dijkstra\'s algorithm', 'Bellman-Ford algorithm', 'Prim\'s algorithm', 'Kruskal\'s algorithm'],
      answer: 'Dijkstra\'s algorithm'
    },
    {
      question: 'What is the time complexity of the selection sort algorithm?',
      options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(n log n)'],
      answer: 'O(n^2)'
    }
  ],
  'Data Structures': [
    {
      question: 'What are data structures?',
      options: ['A way to organize and store data', 'A type of computer monitor', 'A type of building', 'A type of plant'],
      answer: 'A way to organize and store data'
    },
    // Add more questions for Data Structures
  ],
  'Operating Systems': [
    {
      question: 'What is an operating system?',
      options: ['Software that manages computer hardware and software resources', 'A type of animal', 'A type of book', 'A type of music'],
      answer: 'Software that manages computer hardware and software resources'
    },
    // Add more questions for Operating Systems
  ],
  'Database Management': [
    {
      question: 'What is database management?',
      options: ['Organizing and managing data in databases', 'Managing a baseball team', 'Managing a restaurant', 'Managing a hotel'],
      answer: 'Organizing and managing data in databases'
    },
    // Add more questions for Database Management
  ],
  // Add more subjects and questions as needed
};

export default quizData;
