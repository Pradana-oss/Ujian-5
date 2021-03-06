import React from 'react';
import {Text} from 'react-native';
import config from '../../config';

export default Sm2 = (props) => {
    
    const {style} = props;
    const defaultStyle = {
        fontFamily: config.defaultFont,
        fontSize: config.defaultFontSize*0.99,
        marginBottom: 1,
        color: config.defaultFontColor
    };

    return (
        <Text style={[defaultStyle, style]}>{props.children}</Text>
    );
}