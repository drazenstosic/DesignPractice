import { ReactComponent as HeroIllustration } from "../assets/illustrations/Hero-illustration.svg";
const HeroCard = () => {
  return (
    <div className="card card--primary ">
      <div className="card__text">
        <div className="card__text--primary">Hello Mr Smith!</div>
        <div className="card__subtitle">
          <span>Today you have 9 new applications.</span>

          <span>Also you need to hire ROR developer,React JS. developer.</span>
        </div>
        <div>
          <div className="button button--secondary mt-6">
            <span>Read more</span>
          </div>
        </div>
      </div>
      <div className="illustration__main">
        <HeroIllustration />
      </div>
    </div>
  );
};

export default HeroCard;
