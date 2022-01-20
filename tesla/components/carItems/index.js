import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../styleButton';

const CarItem = ({car})=>{
    return (
        <View style={styles.carContainer}>

        <ImageBackground
         source={require(`../../images/${car.image}`)}
         style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>{car.name}</Text>
          <Text style={styles.subtitle}>
            {car.tagline} {' '}
            <Text style={styles.subtitleCta}>{car.taglineCTA}</Text>
          </Text>
        </View>
        
        <View style={styles.buttoncontainer}>
        <StyledButton
          type="primary"
          content="custo order"
          onPress={()=>{}}
        />
        <StyledButton
          type="secondary"
          content="existing inventory" 
          onPress={()=>{}}
        />
        </View>

      </View>
    )
}

export default CarItem;