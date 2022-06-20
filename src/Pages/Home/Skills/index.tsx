import commonStyles from "./../index.module.css";
import { Row, Col, List, Card } from "antd";
import { OverPack } from "rc-scroll-anim";
import QueueAnim from "rc-queue-anim";
import htmlLogo from "./../../../Images/html_logo.jpg";
import cssLogo from "./../../../Images/css_logo.png";
import jsLogo from "./../../../Images/javascript_logo.png";
import javaLogo from "./../../../Images/java_logo.png";
import gitLogo from "./../../../Images/git_logo.png";
import postgreLogo from "./../../../Images/postgre_logo.png";
import mysqlLogo from "./../../../Images/mysql_logo.png";
import wordLogo from "./../../../Images/word_logo.png";
import excelLogo from "./../../../Images/excel_logo.jpg";
import ppLogo from "./../../../Images/powerpoint_logo.png";

import { Image } from "antd";

export default function Skills() {
  const data = [
    {
      title: "Programming Skills",
      items: [
        { name: "Java", icon: javaLogo },
        { name: "HTML", icon: htmlLogo },
        { name: "CSS", icon: cssLogo },
        { name: "JavaScript", icon: jsLogo },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "PostgreSql", icon: postgreLogo },
        { name: "MySql", icon: mysqlLogo },
      ],
    },
    {
      title: "Version Control System",
      items: [{ name: "Git", icon: gitLogo }],
    },
    {
      title: "Office Skills",
      items: [
        { name: "Word", icon: wordLogo },
        { name: "Excel", icon: excelLogo },
        { name: "PowerPoint", icon: ppLogo },
      ],
    },
  ];

  return (
    <div className={commonStyles.background}>
      <Row className={commonStyles.row}>
        <div className={commonStyles.h2}>Skills</div>
      </Row>

      <Row className={commonStyles.row}>
        <OverPack
          style={{
            width: "100%",
            display: "flex",
            height: "15rem",
          }}
          playScale={0.2}
        >
          <QueueAnim
            key="queue"
            leaveReverse
            className={commonStyles.queue}
            duration={1500}
            type="top"
          >
            <List
              style={{ width: "100%" }}
              grid={{ gutter: 50, column: 4 }}
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item key={index}>
                  <Card
                    title={<div className={commonStyles.h3}>{item.title}</div>}
                    headStyle={{
                      backgroundColor:
                        index === 0
                          ? "#a0c5b4"
                          : index === 1
                          ? "#ffaa80"
                          : index === 2
                          ? "#a0c5b4"
                          : "#ffaa80",
                      color: "#1f1f14",
                      textAlign: "center",
                      borderRadius: "4px",
                    }}
                    bodyStyle={{
                      height: "11rem",
                      lineHeight: "1.6",
                      color: "#1f1f14",
                      fontSize: "1.1rem",
                      fontWeight: "400",
                      padding: "1rem",
                    }}
                    hoverable={true}
                  >
                    {item.items.map((item) => {
                      return (
                        <Row
                          style={{
                            paddingBottom: "0.5rem",
                            paddingLeft: "2rem",
                          }}
                        >
                          <Col span={6}>
                            <Image
                              src={item.icon}
                              preview={false}
                              width="50%"
                            ></Image>
                          </Col>
                          <Col
                            span={14}
                            offset={2}
                            style={{ top: "0.3rem", textAlign: "left" }}
                          >
                            {item.name}
                          </Col>
                        </Row>
                      );
                    })}
                  </Card>
                </List.Item>
              )}
            />
          </QueueAnim>
        </OverPack>
      </Row>
    </div>
  );
}
