import { Col, Row } from "antd";



function AppStoreCards( {appStoreContents} ) {
    return (
        <Row gutter={24}>
            {
                appStoreContents.map((appStoreContent) => (
                    <Col key={appStoreContent.title} span={12} style={{backgroundColor: appStoreContent.backgroundColor, color: appStoreContent.textColor}}>
                        <p>{appStoreContent.subTitle}</p>
                        <h2>{appStoreContent.title}</h2>
                    </Col>
                ))
            }
        </Row>
    )
}

export default AppStoreCards;
