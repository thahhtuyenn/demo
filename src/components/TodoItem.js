import { TouchableOpacity } from "react-native";
import {
    View,
    StyleSheet,
    Image,
    Text,
    Pressable,
    TextInput,
} from "react-native";
export const ItemTodo = ({ props, onUpdate, onCompleted }) => {
    return (
        <View style={styles.item}>
            <TouchableOpacity
                onPress={() => { onCompleted(props.id) }}
            >
                <Image source={require("../../assets/icon-check.png")} style={{ marginHorizontal: 10 }} />
            </TouchableOpacity>
            <Text style={styles.textItem}> {props.title} </Text>
            <TouchableOpacity onPress={() => onUpdate()}>
                <Image source={require("../../assets/icon-update.png")} style={{ marginHorizontal: 10 }} />
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderRadius: 25,
        marginHorizontal: 10,
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#d5d8db"
    },
    textItem: {
        color: "#171A1F",
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: "700",
        width: "70%"
    },
    textBtn: {
        fontSize: 16,
        fontWeight: "700",
    }
})