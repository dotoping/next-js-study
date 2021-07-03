import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
    return (
        <div>
            <div style={{ display: "flex", paddingTop: 20 }}>
                <div style={{ flex: "100px 0 0" }}>
                    <img
                        src="/images/logo.png"
                        alt="logo"
                        style={{ display: "block", width: 120 }}
                    />
                </div>
                <Header as="h1">Ping Cosmetic</Header>
            </div>
            <Gnb />
        </div>
    );
}