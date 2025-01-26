import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import AboutPage from '../components/AboutPage'
import DirectoryPage from '../components/DirectoryPage';
import ResourcesPage from '../components/ResourcesPage'
import ContactPage from '../components/ContactPage'
import Layout from './Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <h1>Welcome!</h1>,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "about",
        element: <AboutPage />,  
      },
      {
        path: "directory",
        element: <DirectoryPage />,  
      },
      {
        path: "resources",
        element: <ResourcesPage />,  
      },
      {
        path: "contact",
        element: <ContactPage />,  
      },
    ],
  },
]);
