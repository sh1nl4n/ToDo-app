import * as fs from "expo-file-system";

export interface Note {
    id: number;
    title: string;
    message: string;
    date: string;
    type: string;
}

export async function setData(data: object) {
    try {
        await fs.writeAsStringAsync(
            fs.documentDirectory + "Note.json",
            JSON.stringify(data)
        );
    } catch (e) {
        console.log(e);
    }
}

export async function getData() {
    try {
        const isFile = await fs.getInfoAsync(
            fs.documentDirectory + "Note.json"
        );
        if (!isFile.exists) return null;
        else {
            var data = JSON.parse(
                await fs.readAsStringAsync(fs.documentDirectory + "Note.json")
            );
        }
        if (typeof data != typeof { obj: 1 }) return null;
        return data;
    } catch (e) {
        console.log(e);
    }
}
