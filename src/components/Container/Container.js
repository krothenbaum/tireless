import styled from 'styled-components';
import Header from './Header';
import Sidebar from './SideBar';
import Main from './Main';
import Footer from './Footer';

const Container = styled.div`
  display: grid;
  padding-bottom: 10px;
  min-height: 100vh;
  background-color: #eee;

  grid-template-areas: 'header header header header' 'sidebar main main main' 'sidebar main main main' 'sidebar main main main' 'footer footer footer footer';
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100px repeat(3, 1fr) 100px;
  grid-row-gap: 2px;
  grid-column-gap: 2px;

  @media screen and (min-width: 36rem) {
    grid-template-areas: 'header header header header header header' 'sidebar main main main main main' 'sidebar main main main main main' 'sidebar main main main main main' 'footer footer footer footer footer footer';
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 100px repeat(3, 1fr) 100px;
  }

  @media screen and (min-width: 48rem) {
    grid-template-areas: 'header header header header header header' 'sidebar main main main main main' 'sidebar main main main main main' 'sidebar main main main main main' 'footer footer footer footer footer footer';
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 100px repeat(3, 1fr) 100px;
  }

  @media screen and (min-width: 75rem) {
    grid-template-areas: 'header header header header header header header header header header header header' 'sidebar sidebar main main main main main main main main main main' 'sidebar sidebar main main main main main main main main main main' 'sidebar sidebar main main main main main main main main main main' 'footer footer footer footer footer footer footer footer footer footer footer footer';
    grid-template-columns: repeat(12, 1fr);
  }
`;

Container.Header = Header;
Container.Sidebar = Sidebar;
Container.Main = Main;
Container.Footer = Footer;

export default Container;
