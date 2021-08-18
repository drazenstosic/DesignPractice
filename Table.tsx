import Mary from "../assets/photos/Mary.jpg";
import Lawrence from "../assets/photos/Lawrence.jpg";
import Jimmy from "../assets/photos/Jimmy.jpg";
import Vivian from "../assets/photos/Vivian.jpg";

const Table = () => {
  return (
    <div className="table">
      <div className="table__caption">
        <span>Recruitment Progress</span>
        <div className="button button--primary">
          <span>View all</span>
        </div>
      </div>

      <div className="table__header">
        <div className="table__column">
          <span>Full name</span>
        </div>
        <div className="table__column">
          <span>Designation</span>
        </div>
        <div className="table__column">
          <span>Status</span>
        </div>
        <div></div>
      </div>

      <div className="table__row mt-3 ">
        <div className="table__column">
          <img
            className="profile__image profile__image--secondary"
            src={Mary}
            alt="Mary"
          />
          <div className="profile__name ">
            <span>Mary G. Scheulke</span>
          </div>
        </div>

        <div className="table__column">
          <div className="table__tag table__tag--red ">
            <span>Project Manager</span>
          </div>
        </div>
        <div className="table__column">
          <div className="dots dots--red mr-2"></div>
          <span>Tech Interview</span>
        </div>
        <div>
          <i className="icon icon__threedots" />
        </div>
      </div>
      <div className="table__row mt-3">
        <div className="table__column">
          <img
            className="profile__image profile__image--secondary"
            src={Lawrence}
            alt="Lawrence"
          />
          <div className="profile__name">
            <span>Lawrence A. Mason</span>
          </div>
        </div>

        <div className="table__column">
          <div className="table__tag table__tag--orange ">
            <span>For Developer</span>
          </div>
        </div>
        <div className="table__column">
          <div className="dots dots--orange mr-2"></div>
          <span>Task</span>
        </div>
        <div>
          <i className="icon icon__threedots" />
        </div>
      </div>

      <div className="table__row mt-3">
        <div className="table__column">
          <img
            className="profile__image profile__image--secondary"
            src={Jimmy}
            alt="Jimmy"
          />
          <div className="profile__name ">
            <span>Jimmy C. Wilson</span>
          </div>
        </div>

        <div className="table__column">
          <div className="table__tag table__tag--purple ">
            <span>React JS Developer</span>
          </div>
        </div>
        <div className="table__column">
          <div className="dots dots--purple mr-2"></div>{" "}
          <span>Resume Interview</span>
        </div>
        <div>
          <i className="icon icon__threedots" />
        </div>
      </div>

      <div className="table__row mt-3">
        <div className="table__column">
          <img
            className="profile__image profile__image--secondary"
            src={Vivian}
            alt="Vivian"
          />
          <div className="profile__name ">
            <span>Vivian J. Joseph</span>
          </div>
        </div>

        <div className="table__column">
          <div className="table__tag table__tag--green ">
            <span>Node JS Developer</span>
          </div>
        </div>
        <div className="table__column">
          <div className="dots dots--green mr-2"></div>
          <span>Final Interview</span>
        </div>
        <div>
          <i className="icon icon__threedots" />
        </div>
      </div>
    </div>
  );
};

export default Table;
