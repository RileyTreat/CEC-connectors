import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import AboutPage from '../components/AboutPage'
import DirectoryPage from '../components/DirectoryPage';
import ServiceAreasPage from '../components/ServiceAreasPage'
import TypesOfSupportPage from '../components/TypesOfSupportPage';
import ConnectorProfilePage from '../components/ConnectorProfilePage'
import ResourcesPage from '../components/ResourcesPage'
import ContactPage from '../components/ContactPage'
import Layout from './Layout';
import CECForm from '../components/CECForm/CECForm';
import ManagePage from '../components/ManagePage';
import CECUpdateForm from '../components/CECUpdateForm';


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
        path: "manage",
        element: <ManagePage />,  
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
        path: "/connector/:id",  
        element: <ConnectorProfilePage />,  
      },
      {
        path: "serviceAreas",
        element: <ServiceAreasPage />,  
      },
      {
        path: "/support",
        element: <TypesOfSupportPage />,  
      },
      {
        path: "/CECForm",
        element: <CECForm />,  
      },
      {
        path: "/CECForm/update",
        element: <CECUpdateForm />,  
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
