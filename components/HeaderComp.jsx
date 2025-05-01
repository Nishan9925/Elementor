"use client"

import { Layout, Row, Col, Grid, Button, Drawer } from "antd";
import NavBar from "./Navbar";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";

const { Header } = Layout;
const { useBreakpoint } = Grid;

function HeaderComp({ websiteLogo, menuItems }) {
    const screens = useBreakpoint();
    const [drawerVisible, setDrawerVisible] = useState(false);

    const toggleDrawer = () => {
        setDrawerVisible(!drawerVisible);
    };

    return (
        <Header style={{ backgroundColor: "white" }}>
            <Row justify="space-between" align="middle">
                <Col xs={10} sm={8} md={6} lg={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Image 
                        src={websiteLogo} />
                </Col>
                <Col xs={14} sm={16} md={18} lg={20} style={{ textAlign: "right" }}>
                    {screens.md ? (
                        <NavBar menuItems={menuItems} />
                    ) : (
                        <>
                            <Button
                                type="text"
                                icon={<MenuOutlined style={{ fontSize: 24 }} />}
                                onClick={toggleDrawer}
                            />
                            <Drawer
                                title="Menu"
                                placement="right"
                                onClose={toggleDrawer}
                                open={drawerVisible}
                                width={250}
                            >
                                <NavBar
                                    menuItems={menuItems}
                                    isMobile={drawerVisible} />
                            </Drawer>
                        </>
                    )}
                </Col>
            </Row>
        </Header>
    );
}

export default HeaderComp;
