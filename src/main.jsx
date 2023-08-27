import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import "./index.css";
import SearchResultsPage from "./pages/SearchResultsPage.jsx";
import HeroPage from "./pages/AdminPage/HeroPage.jsx";
import AddStudentPage from "./pages/AdminPage/AddStudentPage.jsx";
import AddResultPage from "./pages/AdminPage/AddResultPage.jsx";
import StudentsPage from "./pages/AdminPage/StudentsPage.jsx";
import { GlobalProvider } from "./context/AppContext.jsx";
import EditStudentPage from "./pages/AdminPage/EditStudentPage.jsx";
import ExamsResultPage from "./pages/AdminPage/ExamsResultPage.jsx";
import AddStudentResultPage from "./pages/AdminPage/AddStudentResultPage.jsx";
import ExamsPage from "./pages/ExamsPage.jsx";

const routerProvider = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/search-results",
        element: <SearchResultsPage />,
      },
      {
        index: true,
        element: <SearchResultsPage />,
      },
      {
        path: "/admin",
        element: <HeroPage />,
      },
      {
        path: "/add-student",
        element: <AddStudentPage />,
      },
      {
        path: "/admin/edit-student/:id",
        element: <EditStudentPage />,
      },
      {
        path: "/exams-result/:rollNumber",
        element: <ExamsResultPage />,
      },
      {
        path: "/add-student-result/:className",
        element: <AddStudentResultPage />,
      },
      {
        path: "/add-result",
        element: <AddResultPage />,
      },
      {
        path: "/admin/exams",
        element: <ExamsPage />,
      },
      {
        path: "/admin/students",
        element: <StudentsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={routerProvider} />
    </GlobalProvider>
  </React.StrictMode>
);
