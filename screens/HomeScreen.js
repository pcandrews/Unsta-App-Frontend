import React from 'react';
import { StyleSheet, Button, View, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
const HomeScreen = props => {
    return (
        <Container>
            <Content>
                <Card>
                <CardItem header>
                    <Text>Charla informativa 17:40</Text>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text>
                        Gente de la nasa viene a contar su vida
                    </Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Text>GeekyAnts</Text>
                </CardItem>
                </Card>
                <Card>
                <CardItem header>
                    <Text>Charla informativa 17:40</Text>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text>
                        Gente de la nasa viene a contar su vida
                    </Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Text>GeekyAnts</Text>
                </CardItem>
                </Card>
                <Card>
                <CardItem header>
                    <Text>Charla informativa 17:40</Text>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text>
                        Gente de la nasa viene a contar su vida
                    </Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Text>GeekyAnts</Text>
                </CardItem>
                </Card>
                <Card>
                <CardItem header>
                    <Text>Charla informativa 17:40</Text>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text>
                        Gente de la nasa viene a contar su vida
                    </Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Text>GeekyAnts</Text>
                </CardItem>
                </Card>
            </Content>
      </Container>
    );
}
HomeScreen.navigationOptions = navData => {
    console.log(navData.navigation);
    return {
        headerStyle: {
            backgroundColor: '#194b9c',
            height: 50,
        }, 
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item   title='Menu' 
                        iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} 
                        onPress={() => {
                            navData.navigation.openDrawer();
                        }}
                        />
            </HeaderButtons>
        ),
    }
}
const styles = StyleSheet.create({
    
});

export default HomeScreen;