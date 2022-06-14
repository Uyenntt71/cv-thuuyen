import commonStyles from "./../index.module.css";
import { Row, Timeline } from "antd";

export default function Experience() {
  return (
    <div className={commonStyles.background}>
      <Row className={commonStyles.row}>
        <div className={commonStyles.h2}>Work Experience</div>
      </Row>
      <Row className={commonStyles.row}>
        <Timeline>
          <Timeline.Item>
            <div className={commonStyles.h3}>
              Frontend Developer at Creative Agency
            </div>
            <div className={commonStyles.h4}>May, 2015 - Present</div>
            <div className={commonStyles.h5}>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <div className={commonStyles.h3}>
              Graphic Designer at Design Studio
            </div>
            <div className={commonStyles.h4}>June, 2013 - May, 2015</div>
            <div className={commonStyles.h5}>
              Override the digital divide with additional clickthroughs from
              DevOps. Nanotechnology immersion along the information highway
              will close the loop on focusing solely on the bottom line.
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <div className={commonStyles.h3}>
              Junior Web Developer at Indie Studio
            </div>
            <div className={commonStyles.h4}>Jan, 2011 - May, 2013</div>
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
