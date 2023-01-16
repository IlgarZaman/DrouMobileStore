import React from "react";
import { Link } from "react-router-dom";

const BlogAndEvents = () => {
  return (
    <div className="BlogAndEventsMainDiv">
      <div className="BlogAndEventsCenterDiv">
        <div className="BlogAndEventsTextDiv">
          <div>
            <h2>Blog & Events</h2>
          </div>
          <div>
            <Link>View all Events </Link>
          </div>
        </div>

        <div className="BlogAndEventsCardDiv">
          <Link>
            <div className="BlogAndEventsFirstDivParent">
              <div className="BlogAndEventsFirstDiv"></div>
            </div>
            <div className="blogCardText">
              <i className="fa-regular fa-calendar"></i>
              <p>September 06, 2022</p>
            </div>
          </Link>

          <Link>
            <div className="BlogAndEventsFirstDivParent">
              <div className="BlogAndEventsSecondDiv"></div>
            </div>
            <div className="blogCardText">
              <i className="fa-regular fa-calendar"></i>
              <p>September 06, 2022</p>
            </div>
          </Link>

          <Link>
            <div className="BlogAndEventsFirstDivParent">
              <div className="BlogAndEventsThirdDiv"></div>
            </div>
            <div className="blogCardText">
              <i className="fa-regular fa-calendar"></i>
              <p>September 06, 2022</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogAndEvents;
