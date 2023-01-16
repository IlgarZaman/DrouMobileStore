import React from "react";
import { Link } from "react-router-dom";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="showCountMainDiv">
      <div className="showCountCenterDiv">
        <div className="textAndTimeDiv">
          <div className="hurryUp">
            <h5>Hurry Up!</h5>
          </div>
          <div className="timeTextDiv">
            <h2>Up To 25% Discount</h2>
            <h2>Check it Out</h2>
          </div>
          <div className="show-counter">
            <div className="time">
              <DateTimeDisplay
                value={days}
                type={"DAYS"}
                isDanger={days <= 3}
              />
            </div>
            <div className="time">
              <DateTimeDisplay value={hours} type={"HRS"} isDanger={false} />
            </div>
            <div className="time">
              <DateTimeDisplay value={minutes} type={"MINS"} isDanger={false} />
            </div>
            <div className="time">
              <DateTimeDisplay value={seconds} type={"SECS"} isDanger={false} />
            </div>
          </div>
          <div>
            <Link className="timeShopNowBtn">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
