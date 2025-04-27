"use client"

import { Layout } from "antd";

const { Content, Header, Footer } = Layout;


function RootPage({ children }) {
    return (
        <div>
            <Layout>
                <Header>Header</Header>
                <Content>{children}Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    )
}

export default RootPage;
