"use client"
import { Layout } from "antd";
import Link from "next/link";
import HeaderComp from "../components/HeaderComp";
import websiteLogo from "../app/assets/images/logo.svg";

const { Header, Content, Footer } = Layout;

const menuItems = [
    { key: 'home', label: <Link href="/">Home</Link> },
    { key: 'about', label: <Link href="/about">About</Link> },
    { key: 'features', label: <Link href="/features">Features</Link> },
    { key: 'contact', label: <Link href="/contact">Contact</Link> },
    {
        key: 'submenu',
        label: 'Pages',
        children: [
            { key: 'detailFeatures', label: <Link href="/detailFeatures">Detail Features</Link> },
            { key: 'teams', label: <Link href="/teams">Teams</Link> },
            { key: 'careers', label: <Link href="/careers">Careers</Link> },
            { key: 'joindoctors', label: <Link href="/joindoctors">Join the Doctors</Link> },
            { key: 'blogs', label: <Link href="/blogs">Blogs</Link> },
            { key: 'singlepost', label: <Link href="/singlepost">Single Post</Link> },
        ],
    },
];

function AppLayout({ children }) {
    return (
        <Layout style={{ backgroundColor: "white" }}>
            <Header style={{ backgroundColor: "white" }}>
                <HeaderComp
                    websiteLogo={websiteLogo}
                    menuItems={menuItems}
                />
            </Header>
            <Content style={{ padding: "0 50px" }}>{children}</Content>
            <Footer>Footer</Footer>
        </Layout>
    )
}

export default AppLayout;
