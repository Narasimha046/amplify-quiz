const quizData = {
  java: [
    {
      question: "What is Java Virtual Machine (JVM)?",
      options: ["An actual machine", "A virtual machine", "A compiler", "An interpreter"],
      answer: "A virtual machine"
    },
    {
      question: "Which one of these is not a Java feature?",
      options: ["Dynamic", "Architecture Neutral", "Use of pointers", "Object-oriented"],
      answer: "Use of pointers"
    },
    {
      question: "What is the output of 5 + 7 * 2 in Java?",
      options: ["24", "19", "19.0", "24.0"],
      answer: "19"
    },
    {
      question: "Which of the following is a reserved keyword in Java?",
      options: ["string", "program", "super", "this"],
      answer: "super"
    },
    {
      question: "What is the parent class of all classes in Java?",
      options: ["Object", "Class", "Main", "Parent"],
      answer: "Object"
    },
    {
      question: "What will happen if a superclass reference is used to refer to a subclass object in Java?",
      options: ["Compilation error", "Runtime exception", "No error, but cast required", "No error, and no cast required"],
      answer: "No error, but cast required"
    },
    {
      question: "Which keyword is used to prevent method overriding in Java?",
      options: ["override", "final", "private", "static"],
      answer: "final"
    },
    {
      question: "What is the correct way to declare a constant in Java?",
      options: ["const int x = 5;", "final int x = 5;", "int constant x = 5;", "static final int x = 5;"],
      answer: "static final int x = 5;"
    },
    {
      question: "Which of the following is true about Java packages?",
      options: ["A package can contain only one class", "All classes in a package must have unique names", "A package can be renamed easily", "Package names should be unique across all Java projects"],
      answer: "All classes in a package must have unique names"
    },
    {
      question: "What is the default value of a member variable in Java?",
      options: ["0", "null", "undefined", "Depends on the variable type"],
      answer: "Depends on the variable type"
    }

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
      {
        question: "What is the output of printf(\"%d\", sizeof('a')) in C?",
        options: ["1", "2", "4", "8"],
        answer: "4"
      },
      {
        question: "Which operator is used to access the value at the address stored in a pointer variable?",
        options: ["&", "*", "#", "$"],
        answer: "*"
      },
      {
        question: "What is the output of the following code snippet?\n\nint i = 5;\nprintf(\"%d\", i++ + ++i);",
        options: ["10", "11", "12", "13"],
        answer: "12"
      },
      {
        question: "Which keyword is used to define a constant in C?",
        options: ["constant", "define", "const", "constant"],
        answer: "const"
      },
      {
        question: "What will be the output of the following code?\n\nint x = 10, y = 20;\nprintf(\"%d\", x > y ? x : y);",
        options: ["10", "20", "30", "Error"],
        answer: "20"
      },
      {
        question: "What does the sizeof operator return in C?",
        options: ["Size of a variable", "Size of a function", "Size of a pointer", "Size of a structure"],
        answer: "Size of a variable"
      },
      {
        question: "Which standard library function is used to allocate memory dynamically in C?",
        options: ["malloc()", "calloc()", "realloc()", "free()"],
        answer: "malloc()"
      },
      {
        question: "What is the output of the following code?\n\nint a[] = {1, 2, 3};\nprintf(\"%d\", a[3]);",
        options: ["1", "2", "3", "Error"],
        answer: "Error"
      }
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
      {
        question: "Which of the following is not a valid variable name in Python?",
        options: ["my_var", "myVar", "my-var", "my_var_1"],
        answer: "my-var"
      },
      {
        question: "What will be the output of the following code snippet?\n\nx = [1, 2, 3]\nprint(x[1:])",
        options: ["[1]", "[2, 3]", "[1, 2]", "[2]"],
        answer: "[2, 3]"
      },
      {
        question: "Which of the following statements is true about Python's list?",
        options: ["Lists are immutable", "Lists can only contain elements of the same type", "Lists can contain duplicate elements", "Lists are not ordered"],
        answer: "Lists can contain duplicate elements"
      },
      {
        question: "What is the correct way to check if a key exists in a dictionary in Python?",
        options: ["if key in dict", "if dict.contains(key)", "if key.exists(dict)", "if dict[key] != None"],
        answer: "if key in dict"
      },
      {
        question: "What is the output of the following code?\n\ns = 'Python'\nprint(s[1:4])",
        options: ["P", "yth", "ytho", "yth"],
        answer: "yth"
      },
      {
        question: "What is the output of the following code?\n\nprint(5 * 'Hi')",
        options: ["HiHiHiHiHi", "5Hi", "HiHiHiHiHiHiHiHiHiHi", "Error"],
        answer: "HiHiHiHiHi"
      },
      {
        question: "Which of the following is used to create a function in Python?",
        options: ["def", "function", "define", "func"],
        answer: "def"
      },
      {
        question: "What will be the output of the following code?\n\nprint(not (10 > 5))",
        options: ["True", "False", "Error", "0"],
        answer: "False"
      }
    ],
  };

  export default quizData;
