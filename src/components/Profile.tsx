import MrSmith from "../assets/photos/MrSmith.jpg";
const Profile = () => {
  return (
    <div className="user mt-6">
      <div>
        <div className="user__container">
          <img
            className="profile__image profile__image--squared"
            src={MrSmith}
            alt="Mr Smith"
          />
        </div>

        <div className="user__text user__text--primary">Mr Smith</div>
        <div className="user__text user__text--secondary">Sr.HR Manager</div>
        <div className="user__icons mt-2">
          <i className="icon icon--base icon__phone" />
          <i className="icon icon--base icon__workerMail " />
          <i className="icon icon--base icon__message" />
        </div>
      </div>
      <div>
        <div className="user__border"></div>
        <div className="user__info">
          <span className="user__text user__text--primary">Company:</span>
          <span className="user__text user__text--secondary">
            FoxHr Pvt. Ltd
          </span>
        </div>
        <div className="user__info">
          <span className="user__text user__text--primary">Joining Date:</span>
          <span className="user__text user__text--secondary">08/08/2020</span>
        </div>
        <div className="user__info">
          <span className="user__text user__text--primary">Projects:</span>
          <span className="user__text user__text--secondary">34 Active</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
