const quizData = {
    java: [
      {
        question: "What is Java Virtual Machine (JVM)?",
        options: ["An actual machine", "A virtual machine", "A compiler", "An interpreter"],
        answer: "A virtual machine"
      },
      {
        question: "Which one of these is not a Java features?",
        options: ["Dynamic", "Architecture Neutral", "Use of pointers", "Object-oriented"],
        answer: "Use of pointers"
      },
      // Add more Java questions here
    ],
    c: [
      {
        question: "Which of the following is not a valid C variable name?",
        options: ["int number;", "float rate;", "int variable_count;", "int _count;"],
        answer: "int variable_count;"
      },
      {
        question: "Which of the following is the correct way to initialize an array in C?",
        options: ["int arr[] = {1, 2, 3};", "int arr[3] = {1, 2, 3};", "int arr[3] = {1, 2};", "int arr[] = {1, 2};"],
        answer: "int arr[] = {1, 2, 3};"
      },
      // Add more C questions here
    ],
    python: [
      {
        question: "Which of the following is not a keyword in Python?",
        options: ["break", "case", "continue", "pass"],
        answer: "case"
      },
      {
        question: "What is the output of print(2 == 2.0) in Python?",
        options: ["True", "False", "Error", "0"],
        answer: "True"
      },
      // Add more Python questions here
    ],
    // Add more subjects
  };

  export default quizData;
