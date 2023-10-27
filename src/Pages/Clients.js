import React from "react";
import ReactCardCarousel from "react-card-carousel";
import "react-multi-carousel/lib/styles.css";

function CONTAINER_STYLE() {
    return {
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "middle"
    };
}

function CARD_STYLE() {
    return {
        height: "200px",
        width: "200px",
        paddingTop: "80px",
        textAlign: "center",
        background: "#52C0F5",
        color: "#FFF",
        fontFamily: "sans-serif",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "10px",
        boxSizing: "border-box"
    };
}

function Clients() {
    return (
        <div style={CONTAINER_STYLE()}>
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                <div style={CARD_STYLE()}>First Card</div>
                <div style={CARD_STYLE()}>Second Card</div>
                <div style={CARD_STYLE()}>Third Card</div>
                <div style={CARD_STYLE()}>Fourth Card</div>
                <div style={CARD_STYLE()}>Fifth Card</div>
            </ReactCardCarousel>
        </div>
    );
}
export default Clients;