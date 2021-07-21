
import './App.css';
import './styles/components/components.scss';
function App() {
  return (
    <div className="layout">
            <div className="layout__aside">                
                    <div className="layout__headline"><i className="icon icon__bird" />TwitHR</div>
                    <div className="layout__link" ><i className="icon icon__dashboard" />Dashboard</div>
                    <div className="layout__link" ><i className="icon icon__recruitment" />Recruitment</div>
                    <div className="layout__link" ><i className="icon icon__clipboard" />Onboarding</div>
                    <div className="layout__link" ><i className="icon icon__reports" />Reports</div>
                    <div className="layout__link" ><i className="icon icon__calendar" />Calendar</div>
                    <div className="layout__link" ><i className="icon icon__settings" />Settings</div>
                <div className="illustrations__aside"></div>                                         
            </div>
            <div className="layout__main">
                
            </div>
        </div>
  );
}

export default App;
