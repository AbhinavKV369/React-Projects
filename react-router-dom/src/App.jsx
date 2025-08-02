import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayot";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import NotFound from "./components/notFound";
import JobsLayout from "./layout/JobsLayout";
import Jobs from "./pages/Jobs"; 
import { jobDetailaLoader, jobsLoader } from "./loaders/JobsLoader";
import JobDetails from "./layout/JobDetails";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />

        <Route path="contact" element={<ContactLayout />}>
          <Route path="form" element={<ContactForm />} />
          <Route path="info" element={<ContactInfo />} />
        </Route>

        <Route path="jobs" element={<JobsLayout />}>
          <Route index element={<Jobs />} loader={jobsLoader} />
          <Route path=":id" element={<JobDetails/>} loader={jobDetailaLoader}  />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
