import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./styles/App.scss";
import { ReactComponent as SidebarIllustration } from "./assets/illustrations/Sidebar-illustration.svg";
import { useState } from "react";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import Profile from "./components/Profile";
import Table from "./components/Table";
import HeroCard from "./components/HeroCard";

function App() {
  return (
    <div className="layout">
      <div className="layout__aside">
        <div className="sidebar">
          <div className="sidebar__title">
            <i className="icon mr-5 icon__bird" />
            <span>TwitHR</span>
          </div>
          <div className="sidebar__link">
            <i className="icon mr-5 icon--small sidebar__link__dashboard" />
            <span>Dashboard</span>
          </div>
          <div className="sidebar__link">
            <i className="icon mr-5 icon--small sidebar__link__recruitment" />
            <span>Recruitment</span>
          </div>
          <div className="sidebar__link">
            <i className="icon mr-5 icon--small sidebar__link__clipboard" />
            <span>Onboarding</span>
          </div>
          <div className="sidebar__link">
            <i className="icon mr-5 icon--small sidebar__link__reports" />
            <span>Reports</span>
          </div>
          <div className="sidebar__link">
            <i className="icon mr-5 icon--small sidebar__link__calendar" />
            <span>Calendar</span>
          </div>
          <div className="sidebar__link">
            <i className="icon mr-5 icon--small sidebar__link__settings" />
            <span>Settings</span>
          </div>
          <div className="card card--secondary mt-8 ml-8">
            <div className="card__text card__text--secondary">
              <span>Use our premium features now!</span>
              <i className="ml-4 icon icon-small icon__enter" />
            </div>
            <div className="illustration__aside">
              <SidebarIllustration />
            </div>
          </div>
        </div>
      </div>

      <div className="layout__main">
        <Header />
        <div className="row">
          <div className="col col-main">
            <HeroCard />
            <Table />
          </div>
          <div className="col col-aside">
            <Calendar />
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
