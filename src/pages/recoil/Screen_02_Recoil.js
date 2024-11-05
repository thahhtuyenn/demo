import { useEffect, useState } from "react"
import { Alert, Dimensions, Image, TextInput, ToastAndroid } from "react-native"
import { TouchableOpacity } from "react-native";
import { FlatList, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import IconA from 'react-native-vector-icons/AntDesign';
import {useAuth} from "../../hook/useAuth";
import { ItemTodo } from "../../components/TodoItem";
import { fetchTodosApi, updateData } from "../../recoil/todoAPI";
import { useRecoilState } from "recoil";
import { todosState } from "../../recoil/todoAtoms";
export const Screen_02_Recoil = ({ route, navigation }) => {
    const [search, setSearch] = useState("");

    const [todos, setTodos] = useRecoilState(todosState);
    const fetchTodos = async () => {
        const data = await fetchTodosApi();
        setTodos(data);
    };

    const updateTodos = async (id, body) => {
        console.log("id", id)
        console.log("body", body)
        const data = await updateData(id, body);
        fetchTodos(); 
    } 

    /**
     * Khi search thay đổi thì filter ra những item có title chứa search
     */
    const { user } = useAuth();


    useEffect(() => {
        console.log("search", search)
        if (search.trim() === "") {
            fetchTodos()
        } else {
            todosSearch = todos.filter((item) => {
                return item.title.includes(search)
            })  
            setTodos(todosSearch)
        }
    }, [search])
 
    /**
     * Lấy dữ liệu từ API
     */
    useEffect(() => {
        fetchTodos()
    }, [route.params?.action])

    useEffect(() => {}, [])
    /**
     * Hàm cập nhật trạng thái của item
     * @param {*} id 
     */
    const onUpdateCompleted = async (id) => {
        const item = todos.find((item) => item.id === id)
        let body = {
            title: item.title,
            completed: true
        }
        await updateTodos(id, body);
    }
    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ width: '100%' }}
                data={todos}
                renderItem={({ item }) =>
                    <ItemTodo
                        onCompleted={() => {onUpdateCompleted(item.id)}}
                        props={item}
                        onUpdate={() => navigation.navigate("screen3", { action: 'update', itemUpdate: item })} />
                }
                keyExtractor={(item) => item.id}
                ListHeaderComponent={(
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <IconA name="arrowleft" size={24} color='#000' />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Image source={require('../../../assets/Avatar 31.png')} />
                                <View style={{ paddingStart: 20 }}>
                                    <Text style={{
                                        fontSize: 20,
                                        textAlign: 'center',
                                        color: '#000',
                                        fontWeight: 'bold'

                                    }}>Hi, {user}</Text>
                                    <Text style={{
                                        fontSize: 16,
                                        textAlign: 'center',
                                        color: '#9095A0',
                                        fontWeight: 'medium'
                                    }}>Have agrate day a head</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', paddingVertical: 30 }}>
                            <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', justifyContent: 'flex-start', borderWidth: 1, borderColor: '#9095A0', borderRadius: 10 }}>
                                <Image
                                    source={require("../../../assets/icon-search.png")} resizeMode="contain"/>
                                <TextInput  
                                    value={search}
                                    placeholder="Search"
                                    onChangeText={(text) => { setSearch(text) }}
                                    style={{
                                        fontSize: 20,
                                        color: '#000',
                                        fontWeight: 'regular',
                                        marginStart: 20,
                                        flex: 1,
                                        paddingVertical: 10
                                    }}
                                />
                            </View>

                        </View>

                    </View>
                )} 
                ListFooterComponent={(
                    <View style={{ flex: 0.5, marginVertical: 20 }}>
                        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { navigation.navigate("screen3", { action: 'add' }) }}>
                            <Image source={require('../../../assets/icon-add.png')} />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('screen'),
        paddingHorizontal: 15
    },
    textInput: {
        flexDirection: "row",
        alignItems: "center",
        height: 45,
        width: "90%",
        borderWidth: 1,
        borderColor: "#9095A0",
        borderRadius: 5,
    },

})