import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../theme/colors';
import {PlusIcon, StarIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const CoffeeCard = ({item}) => {

    const navigation = useNavigation();
  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: colors.coffee,
        height: 420,
        width: 300,
        marginHorizontal: 65,
      }}>
      <View
        className="flex-row justify-center -mt-14"
        style={{
          shadowColor: 'black',
          shadowRadius: 30,
          shadowOffset: {width: 0, height: 30},
          shadowOpacity: 0.8,
        }}
        >
        <Image source={item.image} className="h-40 w-40"  />
      </View>
      <View className="px-5 mt-5 space-y-3">
        <Text className="text-3xl text-white font-semibold z-10">
          {item.name}
        </Text>
        <View
          style={{backgroundColor: 'rgba(255,255,255,0.2)'}}
          className="flex-row items-center rounded-3xl p-1 px-1 space-x-1 w-16">
          <StarIcon size={25} color={colors.latte} />
          <Text className="text-base font-semibold text-white">
            {item.stars}
          </Text>
        </View>
        <View className="flex-row space-x-1 z-10 mb-6">
          <Text className="text-base text-white font-semibold">
            {item.volume}
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: 5,
            paddingVertical: 4,
            borderRadius: 50,
            backgroundColor: colors.bgLight,
            shadowColor: colors.coffee,
            shadowRadius: 25,
            shadowOffset: {width: -20, height: 50},
            shadowOpacity: 1,
          }}
          className="flex-row justify-between items-center">
          <Text className="text-white font-bold text-lg">$ {item.price}</Text>

          <TouchableOpacity 
          onPress={() => navigation.navigate("Product", {...item})}
          style={{
            shadowColor : colors.coffee,
            shadowRadius : 40 , 
            shadowOffset : {width : -20 , height : -10},
            shadowOpacity : 1
          }}
          className="p-4 bg-white rounded-full">
            <PlusIcon color={colors.coffee} size={25} strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CoffeeCard;
