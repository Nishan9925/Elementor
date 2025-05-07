import { Col, Row } from "antd";
import AppStoreCards from "./AppStoreButtons";

const appStoreContents = [
    { subTitle: "Available on the", title: "App Store", backgroundColor: "#FFFFFF", textColor: "#000000" },
    { subTitle: "GET IT ON", title: "Google Play", backgroundColor: "#000000", textColor: "#FFFFFF" }
];

function TitleAppStores () {
    return (
        <Row>
            {/* <Col> */}
                <AppStoreCards 
                    appStoreContents={appStoreContents}
                />
            {/* </Col> */}
        </Row>
    )
}

export default TitleAppStores;
