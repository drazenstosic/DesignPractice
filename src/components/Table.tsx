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
        <div className="table-w1">
          <span>Full name</span>
        </div>
        <div className="table-w2">
          <span>Designation</span>
        </div>
        <div className="table-w3">
          <span>Status</span>
        </div>
        <div className="table-w4"></div>
      </div>

      <div className="table__row mt-3 ">
        <div className="table__name table-w1">
          <img
            className="profile__image profile__image--secondary mr-3"
            src={Mary}
            alt="Mary"
          />
          <span>Mary G. Scheulke</span>
        </div>

        <div className="table__tag table__tag--red table-w2 ">
          <span>Project Manager</span>
        </div>
        <div className="table__status table-w3">
          <div className="dots dots--red mr-2 "></div>
          <span>Tech Interview</span>
        </div>
        <div className="table-w4">
          <i className="icon icon__threedots" />
        </div>
      </div>

      <div className="table__row mt-3">
        <div className="table__name table-w1">
          <img
            className="profile__image profile__image--secondary mr-3"
            src={Lawrence}
            alt="Lawrence"
          />

          <span>Lawrence A. Mason</span>
        </div>

        <div className="table__tag table__tag--orange table-w2 ">
          <span>For Developer</span>
        </div>

        <div className="table__status table-w3">
          <div className="dots dots--orange mr-2"></div>
          <span>Task</span>
        </div>
        <div className="table-w4">
          <i className="icon icon__threedots" />
        </div>
      </div>

      <div className="table__row mt-3">
        <div className="table__name table-w1">
          <img
            className="profile__image profile__image--secondary mr-3"
            src={Jimmy}
            alt="Jimmy"
          />

          <span>Jimmy C. Wilson</span>
        </div>

        <div className="table__tag table__tag--purple table-w2 ">
          <span>React JS Developer</span>
        </div>

        <div className="table__status table-w3">
          <div className="dots dots--purple mr-2"></div>{" "}
          <span>Resume Interview</span>
        </div>
        <div className="table-w4">
          <i className="icon icon__threedots" />
        </div>
      </div>

      <div className="table__row mt-3">
        <div className="table__name table-w1">
          <img
            className="profile__image profile__image--secondary mr-3"
            src={Vivian}
            alt="Vivian"
          />

          <span>Vivian J. Joseph</span>
        </div>

        <div className="table__tag table__tag--green table-w2 ">
          <span>Node JS Developer</span>
        </div>

        <div className="table__status table-w3">
          <div className="dots dots--green mr-2"></div>
          <span>Final Interview</span>
        </div>
        <div className="table-w4">
          <i className="icon icon__threedots" />
        </div>
      </div>
    </div>
  );
};

export default Table;
