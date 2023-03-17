import React, { useRef, useEffect } from "react";
import styled from "styled-components/native";
import Trash from "../assets/Image/Trash.svg";
import Edit from "../assets/Image/Edit.svg";

const CardView = styled.View`
    width: 100%;
    height: 80px;
    margin: 10px 0 0 0;
    padding: 4%;

    background-color: #fff;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const LeftBlock = styled.View`
    height: 100%;
    width: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const ImportanceCard = styled.View`
    width: 80px;
    height: 45%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #f9e2e2;
    border-radius: 5px;
`;
const MessageImportance = styled.Text`
    font-size: 14px;
    font-family: "Roboto-Bold;
`;
const TitleCard = styled.Text`
    font-size: 16px;
    font-family: "Roboto-Regular;
`;

const RightBlock = styled.View`
    height: auto;
    width: auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

type Props = {
    title: string;
    type: string;
};

export default function Card(props: Props) {
    return (
        <CardView
            style={{
                shadowColor: "#000",
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 5,
                elevation: 5,
            }}
        >
            <LeftBlock>
                <TitleCard>{props.title}</TitleCard>
                <ImportanceCard
                    style={{
                        shadowColor: "#000",
                        shadowOffset: { width: 2, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 5,
                        elevation: 5,
                    }}
                >
                    <MessageImportance
                        style={
                            props.type === "A"
                                ? { color: "#169C00" }
                                : props.type === "B"
                                ? { color: "#C1B46E" }
                                : { color: "#C81818" }
                        }
                    >
                        {props.type}
                    </MessageImportance>
                </ImportanceCard>
            </LeftBlock>
            <RightBlock>
                <Edit width={30} height={30} />
                <Trash style={{ marginLeft: 20 }} width={30} height={30} />
            </RightBlock>
        </CardView>
    );
}
