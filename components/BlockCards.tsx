import React from "react";
import styled from "styled-components/native";

import Card from "./Card";

const BlockCard = styled.View`
    height: auto;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export default function BlockCards() {
    return (
        <BlockCard>
            <Card title="Учить JSs" type="A" />
            <Card title="Учить awdawdaw" type="B" />
            <Card title="Учить awdawdawd" type="C" />
        </BlockCard>
    );
}
