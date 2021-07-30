import MrSmith from "../assets/photos/MrSmith.jpg";
const Profile = () => {
  return (
    <div className="card card--secondary mt-6">
      <div className="user__container mt-4">
        <div className="user__imagebox">
          <img className="user__image" src={MrSmith} alt="Mr Smith" />
        </div>

        <div className="user__title">Mr Smith</div>
        <div className="user__subtitle">Sr.HR Manager</div>
        <div className="user__icons mt-2">
          <i className="icon icon--base icon__phone" />
          <i className="icon icon--base icon__workerMail " />
          <i className="icon icon--base icon__message" />
        </div>
      </div>
      <div className="user__company">
        <div className=" wuser__company--title mt-2">Company</div>
        <div className="user__company--name mt-2">FoxHr Pvt. Ltd.</div>
      </div>
      <div className="user__joining mt-1">
        <div className="user__joining--title">Joining Date</div>
        <div className="wuser__joining--name">08/08/2020</div>
      </div>
      <div className="user__projects mt-1">
        <div className="user__projects--title">Projects</div>
        <div className="user__projects--name">34 Active</div>
      </div>
    </div>
  );
};

export default Profile;
