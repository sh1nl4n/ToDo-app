import * as Font from "expo-font";

export const loadFonts = async () => {
    await Font.loadAsync({
        "Roboto-Regular": require("./Roboto-Regular.ttf"),
        "Roboto-Bold": require("./Roboto-Bold.ttf"),
    });
};
