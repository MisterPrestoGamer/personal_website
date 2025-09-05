import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './components/App/App.jsx';
import './index.css';
import HomePage from './components/homePage/homePage.jsx';
import AboutMe from './components/aboutMe/aboutMe.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <HomePage />},
      {path: 'aboutMe', element: <AboutMe />}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
