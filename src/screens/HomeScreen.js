import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {MapPinIcon} from 'react-native-heroicons/solid';
import {BellIcon} from 'react-native-heroicons/outline';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {colors} from '../theme/colors';
import {categories, coffeeItems} from '../constants';
import CoffeeCard from '../components/CoffeeCard';


const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />
      <Image
        source={require('../assets/images/bean.jpg')}
        className="w-full absolute -top-5 opacity-10"
        style={{height: 230}}
      />
      <SafeAreaView className="flex-1">
        {/* avatar  &  icons */}
        <View className="px-4 flex-row justify-between items-center">
          <Image
            source={require('../assets/icons/userIcon.png')}
            className="h-12 w-12 rounded-full"
          />

          <View className="flex-row items-center text-">
            <MapPinIcon color={colors.bgLight} size={30} />
            <Text className="text-base font-bold">New York, NYC</Text>
          </View>
          <BellIcon color={colors.bgLight} size={30} />
        </View>

        {/* search bar */}
        <View className="mx-5 mt-14">
          <View className="flex-row justify-center items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput
              placeholder="Search"
              className="p-4 flex-1 font-semibold text-gray-700"
            />
            <TouchableOpacity
              className="rounded-full p-2"
              style={{backgroundColor: colors.bgLight}}>
              <MagnifyingGlassIcon
                size={30}
                color={colors.white}
                strokeWidth={2}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* categories */}
        <View className="px-5 mt-6">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item => item.id}
            className="overflow-visible"
            renderItem={({item}) => {
              let isActive = item.id == activeCategory;
              let activeTextClass = isActive ? 'text-white' : 'text-gray-700';
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={{
                    backgroundColor: isActive
                      ? colors.bgLight
                      : 'rgba(0,0,0,0.07)',
                  }}
                  className="px-4 p-4 rounded-full mr-3 shadow-xl">
                  <Text className={`font-bold ${activeTextClass}`}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* coffee cards */}
        <View className="mt-16 py-2">
            <FlatList 
            style={{display : "flex"}}
            data={coffeeItems}
            renderItem={({item}) => <CoffeeCard item={item}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            
            
            />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
