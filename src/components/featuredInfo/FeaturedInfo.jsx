import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredInfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Sec</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">1042</span>
          <span className="featuredMoneyRate"></span>
        </div>
        <span className="featuredSub"></span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Tso</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">7</span>
          <span className="featuredMoneyRate">
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub"></span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Attandance</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">99%</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub"></span>
      </div>
    </div>
  );
}
