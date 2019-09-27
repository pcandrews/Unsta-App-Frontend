import React from 'react';
import { View, Text, Button, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { Item, Input } from 'native-base';

const LoginScreen = props => {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <Image
                style={{width: 200, height: 200}}
                    source={require('../assets/imgs/unstaLogo.png')}
            />
            <Item>
                <Input placeholder="Usuario" />
            </Item>
            <Item last>
                <Input  secureTextEntry={true}
                        placeholder="Contraseña" />
            </Item>
            <View style={styles.separador}>
                <Button color='#194b9c' title="Iniciar sesion" onPress={ () => { props.navigation.navigate('Home')}}/>
            </View>
        </KeyboardAvoidingView>

    );
}
LoginScreen.navigationOptions = {
    headerStyle: {
        backgroundColor: '#194b9c',
        height: 50,
    },  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',    
    },
    separador: {
        marginTop: 20
    },
    input: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        width: 300
    },
}); 

export default LoginScreen;