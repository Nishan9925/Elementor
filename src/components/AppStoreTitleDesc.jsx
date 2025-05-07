"use client"

import { Col, Row, Space, Typography } from "antd";
import TitleAppStores from "./TitleAppStores";

const { Title, Paragraph } = Typography;


function AppStoreTitleDesc() {
    return (
        <Row justify="center" gutter={[16, 56]} align="center">
            <Col>
                <Space direction="vertical" size="middle">
                    <Title level={2}>
                        The Most Complete Health Solution in your Hand
                    </Title>
                    <Paragraph type="secondary">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </Paragraph>
                </Space>
            </Col>
            <Col>
                <TitleAppStores />
            </Col>
        </Row>
    )
}

export default AppStoreTitleDesc;
