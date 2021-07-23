import './styles/App.scss';
import {ReactComponent as SidebarIllustration} from "./assets/illustrations/Sidebar-illustration.svg";
import {ReactComponent as HeroIllustration} from "./assets/illustrations/Hero-illustration.svg";
import MrSmith from "./assets/photos/MrSmith.jpg";

function App() {
  return (
    <div className="layout">
            <div className="layout__aside">
              <div className="sidebar">                
                      <div className="sidebar__title"><i className="icon icon__bird" />TwitHR</div>
                      <div className="sidebar__link" ><i className="icon icon--small sidebar__link__dashboard" />Dashboard</div>
                      <div className="sidebar__link" ><i className="icon icon--small sidebar__link__recruitment" />Recruitment</div>
                      <div className="sidebar__link" ><i className="icon icon--small sidebar__link__clipboard" />Onboarding</div>
                      <div className="sidebar__link" ><i className="icon icon--small sidebar__link__reports" />Reports</div>
                      <div className="sidebar__link" ><i className="icon icon--small sidebar__link__calendar" />Calendar</div>
                      <div className="sidebar__link" ><i className="icon icon--small sidebar__link__settings" />Settings</div>
                    <div className="card__aside">
                      <div className="card__title">Use our premium features now!</div>
                      <div className="illustration__aside"><SidebarIllustration />                   
                      </div>
                    </div>
              </div>                                                                              
            </div>

            <div className="layout__main">
              <div className="header">
                <div className="header__title">Dashboard</div>
                <div className="header__alignment">
                  <div className="header__content">
                    <i className="icon icon__searchIcon icon--small" />
                    <i className="icon icon__mail icon--small" />
                    <i className="icon icon__bell icon--small" />
                  </div> 
                    <div className="profile profile__name">Mr Smith
                      <div>
                      <img className="profile profile__header" src={MrSmith} alt="Mr Smith" />
                      </div>
                    </div>
                </div>                                                                                                                                   
              </div>
              
              <div className="card__main">
                <div className="card__text">
                  <div className="card__title2">Hello Mr Smith!</div>
                  
                    <div className="card card--small">Today you have 9 new applications.            
                      <br></br>Also you need to hire ROR developer,React JS. developer.
                    </div>
                        <div className="button button__card">Read more</div>                         
                </div>                                     
                  <div className="illustration__main"><HeroIllustration />
                  </div> 
              </div>
              
                <div className="workers">              
                    <div className="workers__title">
                      Recruitment Progress
                      <div className="button button__workers">View all</div>
                    </div>
                    <div className="workers__information">
                      <div>Full name</div>
                      <div>Designation</div>
                      <div>Status</div>
                    </div>
                                                                                                
                </div>                           
            </div>            
     </div>
    
  );
}

export default App;
