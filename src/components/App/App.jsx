import styles from './App.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import HomePage from '../homePage/homePage';
import AboutMe from '../aboutMe/aboutMe'
import { Outlet } from 'react-router';

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
