import MrSmith from "../assets/photos/MrSmith.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
        <span>Dashboard</span>
      </div>
      <div className="header__alignment">
        <div className="header__actions">
          <i className="icon icon__searchIcon icon--small" />
          <i className="icon icon__mail icon--small ml-7" />
          <i className="icon icon__bell icon--small ml-7" />
        </div>
        <div className="profile">
          <div>
            <span className="profile__name">Mr Smith</span>
          </div>
          <div>
            <img className="profile__image ml-3" src={MrSmith} alt="Mr Smith" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
