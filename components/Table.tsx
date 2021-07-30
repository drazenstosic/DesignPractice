import Mary from "../assets/photos/Mary.jpg";
import Lawrence from "../assets/photos/Lawrence.jpg";
import Jimmy from "../assets/photos/Jimmy.jpg";
import Vivian from "../assets/photos/Vivian.jpg";

const Table = () => {
  return (
    <div className="table">
      <div className="table__caption">
        Recruitment Progress
        <div className="button button--primary">View all</div>
      </div>

      <div className="table__header">
        <div className="table__column">Full name</div>
        <div className="table__column">Designation</div>
        <div className="table__column">Status</div>
        <div></div>
      </div>

      <div className="table__row mt-3 ">
        <div className="table__column">
          <img
            className="profile profile__image profile__image--secondary"
            src={Mary}
            alt="Mary"
          />
          <div className="profile profile__name ">Mary G. Scheulke</div>
        </div>

        <div className="table__column">
          <div className="table__tag table__tag--red ">
            <span>Project Manager</span>
          </div>
        </div>
        <div className="table__column">
          <div className="dots dots--red mr-2"></div> Tech Interview
        </div>
        <div>
          <i className="icon icon__threedots" />
        </div>
      </div>
      <div className="table__row mt-3">
        <div className="table__column">
          <img
            className="profile profile__image profile__image--secondary"
            src={Lawrence}
            alt="Lawrence"
          />
          <div className="profile profile__name">Lawrence A. Mason</div>
        </div>

        <div className="table__column">
          <div className="table__tag table__tag--orange ">
            <span>For Developer</span>
          </div>
        </div>
        <div className="table__column">
          <div className="dots dots--orange mr-2"></div>Task
        </div>
        <div>
          <i className="icon icon__threedots" />
        </div>
      </div>

      <div className="table__row mt-3">
        <div className="table__column">
          <img
            className="profile profile__image profile__image--secondary"
            src={Jimmy}
            alt="Jimmy"
          />
          <div className="profile profile__name ">Jimmy C. Wilson</div>
        </div>

        <div className="table__column">
          <div className="table__tag table__tag--purple ">
            <span>React JS Developer</span>
          </div>
        </div>
        <div className="table__column">
          <div className="dots dots--purple mr-2"></div>Resume Interview
        </div>
        <div>
          <i className="icon icon__threedots" />
        </div>
      </div>

      <div className="table__row mt-3">
        <div className="table__column">
          <img
            className="profile profile__image profile__image--secondary"
            src={Vivian}
            alt="Vivian"
          />
          <div className="profile profile__name ">Vivian J. Joseph</div>
        </div>

        <div className="table__column">
          <div className="table__tag table__tag--green ">
            <span>Node JS Developer</span>
          </div>
        </div>
        <div className="table__column">
          <div className="dots dots--green mr-2"></div>Final Interview
        </div>
        <div>
          <i className="icon icon__threedots" />
        </div>
      </div>
    </div>
  );
};

export default Table;
