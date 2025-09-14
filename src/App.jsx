import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Home from "./components/Home";
import LayOut from "./LayOut";
import Jobs from "./components/Jobs";
import NotFound from "./components/NotFound";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/Companies";
import AdminJobs from "./components/AdminJobs";
import CreateAndEditAdminJobs from "./components/CreateAndEditAdminJobs";
import Applicants from "./components/Applicants";
import Shop from "./components/ui/Shop";
import Skills from "./components/ui/Skills";
import ContactUs from "./components/ui/ContactUs";
import FindJob from "./components/ui/FindJob";

const URL = String(import.meta.env.VITE_URL);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayOut URL={URL} />,
    children: [
      {
        path: "",
        element: <Home URL={URL} />,
      },
      {
        path: "/login",
        element: <Login URL={URL} />,
      },
      {
        path: "/signup",
        element: <SignUp URL={URL} />
      },
      {
        path: "/jobs",
        element: <Jobs URL={URL} />,
      },
      {
        path: "/shop",
        element: <Shop URL={URL} />,
      },
      {
        path: "/skills",
        element: <Skills URL={URL} />,
      },
      {
        path: "/contact-us",
        element: <ContactUs URL={URL} />,
      },
      {
        path: "/job/:jobId",
        element: <JobDescription URL={URL} />,
      },
      {
        path: "/find-job",
        element: <FindJob URL={URL} />,
      },
      {
        path: "/browse",
        element: <Browse URL={URL} />,
      },
      {
        path: "/profile/:id",
        element: <Profile URL={URL} />,
      },
      {
        path: "/admin/companies",
        element: <Companies URL={URL} />,
      },
      {
        path: "/admin/jobs",
        element: <AdminJobs URL={URL} />,
      },
      {
        path: "/admin/jobs/create",
        element: <CreateAndEditAdminJobs URL={URL} />,
      },
      {
        path: "/admin/jobs/:jobId/applicants",
        element: <Applicants URL={URL} />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
