import commonStyles from "./../index.module.css";
import { Row, Timeline } from "antd";

export default function Education() {
  return (
    <div className={commonStyles.background}>
      <Row className={commonStyles.row}>
        <div className={commonStyles.h2}>Education</div>
      </Row>
      <Row className={commonStyles.row}>
        <Timeline>
          <Timeline.Item>
            <div className={commonStyles.h3}>
              Bachelor of Computer Science from Regional College
            </div>
            <div className={commonStyles.h4}>2007 - 2011</div>
            <div className={commonStyles.h5}>
              Override the digital divide with additional clickthroughs from
              DevOps. Nanotechnology immersion along the information highway
              will close the loop on focusing solely on the bottom line.
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <div className={commonStyles.h3}>
              Science and Mathematics from Mt. High Scool
            </div>
            <div className={commonStyles.h4}>1995 - 2007</div>
            <div className={commonStyles.h5}>
              User generated content in real-time will have multiple touchpoints
              for offshoring. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </div>
          </Timeline.Item>
        </Timeline>
      </Row>
    </div>
  );
}
