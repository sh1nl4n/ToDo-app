import React from "react";
import styled from "styled-components/native";

type Props = {
    children: React.ReactNode;
};

const MainView = styled.View`
    height: 100%;
    padding: 24% 7%;

    background-color: #effbff;
`;

export default function Background(props: Props) {
    return <MainView>{props.children}</MainView>;
}
