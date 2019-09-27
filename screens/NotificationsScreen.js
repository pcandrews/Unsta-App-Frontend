import React from 'react';
import { StyleSheet , View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import { Container, Content, Accordion, Text } from "native-base";

const NotificationsScreen = props => {
    const dataArray = [
        { title: "Humanistica V", content: "consulta a las 17:30" },
        { title: "Matematica II", content: "nueva fecha de examen 17/03/2019" },
        { title: "Algebra I", content: "no hay clases" }
      ];
    return (
        <Container>
            <Content>
                <Text>Notificaciones 27/09/2019</Text>
                <Content padder>
                    <Accordion dataArray={dataArray} expanded={0}/>
                </Content>
            </Content>
      </Container>
    );
}
NotificationsScreen.navigationOptions = {
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: '#194b9c',
        height: 50,
    },  
}
const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default NotificationsScreen;