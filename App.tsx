import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { loadFonts } from "./assets/font/loadFont";

import Background from "./components/Background";
import BlockCards from "./components/BlockCards";

export default function App() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        async function loadApp() {
            await loadFonts();
            setLoaded(true);
        }

        loadApp();
    }, []);

    if (!loaded) {
        return null;
    }

    return (
        <Background>
            <BlockCards />
            <StatusBar style="auto" />
        </Background>
    );
}
