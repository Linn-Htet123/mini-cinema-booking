import React from "react";
import Drawer from "react-modern-drawer"; // Import the Drawer component from the library
import "react-modern-drawer/dist/index.css"; // Import necessary styles
import "./Drawer.scss";
interface MovieDrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
  children: React.ReactNode;
}

const MovieDrawer: React.FC<MovieDrawerProps> = ({ isOpen, toggleDrawer, children }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      className="drawer"
      size="100%"
    >
      <img src="/assets/back.png" alt="back btn" onClick={() => toggleDrawer()}  className="back-btn"/>
      {children}
    </Drawer>
  );
};

export default MovieDrawer;
