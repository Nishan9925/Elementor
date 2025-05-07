"use client";

import { Row, Col, Grid, Button, Drawer } from "antd";
import NavBar from "./Navbar";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const { useBreakpoint } = Grid;

function HeaderComp({ websiteLogo, menuItems }) {
    const screens = useBreakpoint();
    const [drawerVisible, setDrawerVisible] = useState(false);

    const toggleDrawer = () => setDrawerVisible(!drawerVisible);

    return (
        <Row justify="space-between" align="middle" gutter={[16,16]}>
            <Col xs={12} sm={8} md={6} lg={4}>
                <Link href="/">
                    <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                }}>
                    <Image
                        src={websiteLogo}
                        alt="Logo"
                        // width={120}
                        // height={40}
                        sizes="100%"
                        style={{ cursor: "pointer" }}
                    />
                    </div>
                </Link>
            </Col>
            <Col xs={12} sm={16} md={18} lg={20} style={{ textAlign: "right" }}>
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
                            <NavBar menuItems={menuItems} isMobile={true} />
                        </Drawer>
                    </>
                )}
            </Col>
        </Row>
    );
}

export default HeaderComp;
