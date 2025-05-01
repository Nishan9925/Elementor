"use client"

import { Col, Menu, Row } from "antd";

function NavBar({ menuItems, isMobile }) {
    return (
            <Col span={24} >
                <Menu
                    style={
                        !isMobile &&
                        { display: "flex", justifyContent: "flex-end" }
                    }
                    items={menuItems}
                    mode={isMobile ? "inline" : "horizontal"}
                    triggerSubMenuAction="click"
                    defaultSelectedKeys={['home']}
                />
            </Col>
    );
}

export default NavBar;
