import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import IconF from 'react-native-vector-icons/Fontisto';
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import IconA from 'react-native-vector-icons/AntDesign';
import { useAuth } from "../hook/useAuth";
export const Screen_01 = ({ navigation }) => {
    const [name, setName] = useState('chung')
    const {setUser} = useAuth();
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 4, padding: 30 }}>
                <Image style={{}} resizeMode="contain" source={require('../../assets/Image 95.png')} />
            </View>
            <View style={{ flex: 6, width: '100%' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{
                        fontSize: 24,
                        textAlign: 'center',
                        color: '#8353E2',
                        fontWeight: 'bold'

                    }}>
                        MANAGE YOUR {`\n`} TASK

                    </Text>
                </View>
                <View style={{ flex: 1, paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', justifyContent: 'flex-start', borderWidth: 1, borderColor: '#9095A0', borderRadius: 10 }}>
                        <IconF size={24} name="email" />
                        <TextInput
                            value={name}
                            onChangeText={setName}
                            placeholder="Enter your name"
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
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {setUser(name); navigation.navigate('screen2'); }} style={{ flexDirection: 'row', backgroundColor: '#00BDD6', borderRadius: 20, width: 200, alignItems: 'center', justifyContent: 'center' }}>
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
                            GET STARTED
                        </Text>
                        <IconA name="arrowright" size={24} color='#fff' />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('screen')
    }
})