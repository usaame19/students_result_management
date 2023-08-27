export const initialState = JSON.parse(localStorage.getItem("students")) || {
  auth: {
    isAuthenticated: false,
    currentAdmin: null,
  },
  users: [
    {
      username: "usama",
      password: "123",
    },
  ],
  studentsResult: [],
  results: [],
  students: [],
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "LOGIN":
      const user = state.users.find(
        (user) =>
          user.username === action.payload.username &&
          user.password === action.payload.password
      );
      if (user) {
        return {
          ...state,
          auth: {
            isAuthenticated: true,
            currentUser: user,
          },
        };
      } else {
        // If authentication failed, we can set an authError flag
        return {
          ...state,
          auth: {
            isAuthenticated: false,
            currentUser: null,
            authError: true, // New flag to indicate authentication error
          },
        };
      }
    case "LOGOUT":
      return {
        ...state,
        auth: {
          isAuthenticated: false,
          currentUser: null,
        },
      };
    case "ADD_STUDENT": {
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    }
    case "REMOVE_STUDENT":
      return {
        ...state,
        students: state.students.filter(
          (student) => student.studentId !== action.payload
        ),
      };

      case "EDIT_STUDENT":
      return {
        ...state,
        students: state.students.map((student) =>
          student.studentId === action.payload.studentId
            ? { ...action.payload }
            : student
        ),
      };

    case "ADD_RESULT": {
      return {
        ...state,
        results: [...state.results, action.payload],
      };
    }
    case "REMOVE_RESULT":
      return {
        ...state,
        results: state.results.filter(
          (result) => result.examId !== action.payload
        ),
      };
    case "ADD_STUDENT_RESULT": {
      return {
        ...state,
        studentsResult: [...state.studentsResult, action.payload],
      };
    }

    default:
      throw new Error("Invalid action" + action.type);
  }
};
export default globalReducer;
