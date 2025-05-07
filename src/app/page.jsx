"use client"

import { Col, Row, Layout } from "antd";
import AppStoreTitleDesc from "../components/AppStoreTitleDesc";
import mockupPhone from "../app/assets/images/mockup_phone.png";
import Image from "next/image";

const { Content } = Layout;

function Home() {
    return (
            <Row gutter={[32, 32]}
                align="middle"
                justify="center">
                <Col xs={24} sm={24} md={12} lg={12}>
                    <AppStoreTitleDesc />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                    <div style={{ display: "flex", alignItems: "middle" }}>
                        <Image
                            src={mockupPhone}
                            alt="Logo"
                            width={430}
                            height={870}
                            style={{ objectFit: "contain", width: "100%", height: "auto", cursor: "pointer" }}
                        />
                    </div>
                </Col>
            </Row>
    )
}

export default Home;
