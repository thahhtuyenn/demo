import { useEffect, useState } from "react"
import { Alert, Dimensions, Image, TextInput, ToastAndroid } from "react-native"
import { TouchableOpacity } from "react-native";
import { FlatList, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import IconA from 'react-native-vector-icons/AntDesign';
import { useAuth } from "../../hook/useAuth";
import { addTodo, updateTodos } from "../../redux-tool-kit/slices/TodoSlice";
import { useDispatch } from "react-redux";
export const Screen_03_Toolkit = ({ navigation, route }) => {
    const { action, itemUpdate } = route.params;
    const [job, setJob] = useState(itemUpdate?.title || '');
    const { user } = useAuth();
    const dispatch = useDispatch();
    const finish = async () => {
        if (job === '') {
            Alert.alert('Error', 'Please input your job')
            return;
        }

        const body = {
            id: itemUpdate?.id || '',
            title: job,
            completed: false
        }

        if (action === 'add') {
            const res = await dispatch(addTodo({ body: body }));
            console.log(res)
            if (res) { 
                navigation.navigate({ 
                    name: 'screen2',
                    params: { action: `Add job ${job} success` },
                    merge: true,
                });
            }
        } else {
            const res = await dispatch(updateTodos({ id: itemUpdate.id, body: body }));
            if (res) {
                navigation.navigate({
                    name: 'screen2',
                    params: { action: `Update job ${job} with id ${itemUpdate.id}` },
                    merge: true,
                });
            }

        }


    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ width: '100%' }}
                renderItem={({ item }) =>
                    <></>
                }
                ListEmptyComponent={(
                    <View style={{ flex: 1, marginVertical: 50 }}>
                        <Text style={{
                            fontSize: 30,
                            color: '#000',
                            fontWeight: 'bold',
                            marginStart: 20,
                            flex: 1,
                            paddingVertical: 10,
                            textAlign: 'center'
                        }}>
                            {action === 'add' ? 'ADD YOUR JOB' : 'UPDATE YOUR JOB'}
                        </Text>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 10, marginVertical: 30, alignItems: 'center', justifyContent: 'flex-start', borderWidth: 1, borderColor: '#9095A0', borderRadius: 10 }}>
                            <Image
                                source={require("./../../../assets/fxemoji_note.png")} resizeMode="contain" />
                            <TextInput
                                value={job}
                                placeholder="Input your job"
                                onChangeText={(job) => { setJob(job) }}
                                style={{
                                    fontSize: 16,
                                    color: '#000',
                                    fontWeight: 'regular',
                                    marginStart: 20,
                                    flex: 1,
                                    paddingVertical: 10
                                }}
                            />
                        </View>
                    </View>
                )}
                ListHeaderComponent={(
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Image source={require('./../../../assets/Avatar 31.png')} />
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

                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <IconA name="arrowleft" size={24} color='#000' />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                ListFooterComponent={(
                    <View style={{ flex: 1, alignItems: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => finish()} style={{ flexDirection: 'row', backgroundColor: '#00BDD6', borderRadius: 20, width: 200, alignItems: 'center', justifyContent: 'center' }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    textAlign: 'center',
                                    color: '#fff',
                                    fontWeight: 'medium',
                                    paddingVertical: 15,
                                    marginRight: 5
                                }}
                            >
                                FINISH
                            </Text>
                            <IconA name="arrowright" size={24} color='#fff' />
                        </TouchableOpacity>
                        <Image style={{ marginTop: 60 }} resizeMode="contain" source={require('./../../../assets/Image 95.png')} />

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