"use client"

import { Col, Menu, Row } from "antd";

function NavBar({ menuItems, isMobile }) {
    return (

        <Col span={24}>
        {/* <Row justify="space-between" align="middle" gutter={12}> */}
                <Menu
                    style={{
                        ...(!isMobile && { display: "flex", justifyContent: "flex-end" }),
                        borderBottom: "none",
                        boxShadow: "none",
                    }}
                    items={menuItems}
                    mode={isMobile ? "inline" : "horizontal"}
                    triggerSubMenuAction="click"
                    defaultSelectedKeys={['home']}
                />
        {/* </Row> */}
            </Col>
    );
}

export default NavBar;
