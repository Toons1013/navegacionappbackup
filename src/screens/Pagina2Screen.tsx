import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { StackActions} from '@react-navigation/native';
import { styles } from '../theme/appTheme';
import { StackNavigator } from '../navigator/StackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';


export const Pagina2Screen = () => {

    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: ''
        })
    }, [])


    return (
        <View style={ styles.globalMargin }>
            <Text style={styles.title }> Pagina2Screen </Text>

            <Button
                title="Ir página 3"
                onPress={ () => navigator.dispatch(StackActions.push('Pagina3Screen'))  }
            />

        </View>
    )
}
