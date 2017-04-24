import React, { PropTypes } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const propTypes = {
    navigation: PropTypes.object.isRequired
};
const DrawerButton = (navigation) => {
    console.log(navigation);
    return (
        < TouchableOpacity onPress={() => navigation.navigation.navigate('DrawerOpen')}>
            <Icon name = 'md-menu' size = {30}/>
        </TouchableOpacity >
    );
}

DrawerButton.propTypes = propTypes;
export { DrawerButton };
