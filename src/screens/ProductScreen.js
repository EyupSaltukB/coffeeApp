import { View, Text, StatusBar, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ArrowLeftCircleIcon, HeartIcon, MinusIcon, PlusIcon, ShoppingBagIcon, StarIcon } from 'react-native-heroicons/solid'
import { colors } from '../theme/colors'
import { useNavigation } from '@react-navigation/native'

const ProductScreen = (props) => {

    const item = props.route.params;
    const navigation = useNavigation();
    const [size, setSize] = useState();
  return (
    <View className="flex-1">
        <StatusBar style="light"/>
        <Image source={require("../assets/images/beanDark.jpg")}
        style={{height :300, borderBottomLeftRadius : 50, borderBottomRightRadius: 50}}
        className="w-full absolute"
        />
        <SafeAreaView className="space-y-4">
            <ScrollView contentContainerStyle={{paddingBottom: 30}} showsVerticalScrollIndicator={false}>
            <View className="mx-4 flex-row justify-between items-center">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeftCircleIcon size={50} color="#fff"/>
                </TouchableOpacity>

                <TouchableOpacity className="rounded-full border-2 border-white p-2">
                    <HeartIcon size={30} color="#fff"/>
                </TouchableOpacity>
            </View>

            <View className="flex-row justify-center"
            style={{
                shadowColor : colors.bgLight,
                shadowRadius : 30,
                shadowOffset : {width : 0 ,height : 0},
                shadowOpacity : 0.89
            }}>
                <Image source={item.image} style={{height : 400, width : 400}}/>
            </View>

            <View
          style={{backgroundColor: colors.bgLight}}
          className="flex-row mx-4 items-center rounded-3xl p-1 px-1 space-x-1 w-16 opacity-90">
          <StarIcon size={25} color={colors.latte} />
          <Text className="text-base font-semibold text-white">
            {item.stars}
          </Text>
        </View>
        <View className="mx-4 flex-row justify-between items-center">
            <Text className="text-3xl font-semibold">{item.name}</Text>
            <Text style={{color : colors.text}} className="text-xl font-semibold">$ {item.price}</Text>
        </View>

        <View className="mx-4 space-y-2">
            <Text className="text-lg font-bold" style={{color : colors.text}}>
                Coffee Size
            </Text>
            <View className="flex-row justify-between">
            <TouchableOpacity 
            onPress={() => setSize("small")}
            style={{backgroundColor : size == "small" ?  colors.bgLight : "rgba(0,0,0,0.07)"}} className="px-8 p-3 rounded-full">
                <Text className={size == "small" ? "text-white" : "text-gray-700"}>Small</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => setSize("Medium")}
            style={{backgroundColor : size == "Medium" ?  colors.bgLight : "rgba(0,0,0,0.07)"}} className="px-8 p-3 rounded-full">
                <Text className={size == "Medium" ? "text-white" : "text-gray-700"}>Medium</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => setSize("Large")}
            style={{backgroundColor : size == "Large" ?  colors.bgLight : "rgba(0,0,0,0.07)"}} className="px-8 p-3 rounded-full">
                <Text className={size == "Large" ? "text-white" : "text-gray-700"}>Large</Text>
            </TouchableOpacity>
            </View>
        </View>

        <View className="mx-4 space-y-2 h-28">
            <Text style={{color : colors.text}} className="text-lg font-bold">About</Text>
            <Text className="text-gray-600">{item.desc}</Text>
        </View>
        <View className="flex-row justify-between items-center mx-4 mb-2">
            <View className="flex-row items-center space-x-1">
                <Text className="text-base text-gray-700 font-semibold opacity-60">Volume</Text>
                <Text className="text-base text-black font-semibold">{item.volume}</Text>
            </View>
            <View className="flex-row items-center space-x-4 border-gray-500 border  rounded-full p-1 px-4">
                <TouchableOpacity>
                    <MinusIcon size={30} color={colors.text}/>
                </TouchableOpacity>
                <Text style={{color : colors.text}} className="font-extrabold text-lg">2</Text>
                <TouchableOpacity>
                    <PlusIcon size={30} color={colors.text}/>
                </TouchableOpacity>
            </View>
        </View>

        {/* buy now */}
        <View className="flex-row justify-between items-center mx-4">
            <TouchableOpacity className="p-4 rounded-full border border-gray-500">
                <ShoppingBagIcon size={30} color={colors.text}/>
            </TouchableOpacity>
            <TouchableOpacity className="p-5 rounded-full flex-1 ml-3" style={{backgroundColor : colors.bgLight}}>
                <Text className="text-center text-base font-semibold text-white">Buy Now!</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        </SafeAreaView>
    </View>
  )
}

export default ProductScreen