import { StyleSheet, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Mainheader from '../../components/Mainheader'
import Feather from 'react-native-vector-icons/Feather'
import Colors from '../../utilities/Colors'
import { getAllProduct } from './duck/operation'
import { Box, Image, Text, ScrollView, Input, Icon, FlatList } from 'native-base'
const Home = () => {
  const [productData, setProductData] = useState([])
  useEffect(() => {
    getProducts()
  }, [])
  const getProducts = () => {
    getAllProduct().then((res) => setProductData(res))
      .catch((err) => console.log(err))
  }
  return (
    <View style={{ backgroundColor: Colors.white, height: "100%" }}>
      <Mainheader />
      <ScrollView>
        <Box m={5} mt={0} mb={0}>
          <Image
            resizeMode="contain"
            alt=""
            source={require("../../assets/Grocery.png")}
          />
        </Box>
        <Box m={5} mt={0}>
          <Text fontWeight="bold" color="black">Shop By Catogery</Text>
          <Input mb='5' mt={3} size="md" InputLeftElement={<Icon as={Feather} ml='2' name="search" size="md" color="grey" />}
            w='95%' alignSelf='center' borderColor='grey' borderRadius={20} placeholder='Search by product..' bg={Colors.main} />

        </Box>
        <Box mt='2'>
          <FlatList
            data={productData}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item}) => {
              return (
                <Box mr='4' borderRadius={10} >
                  <Text >{item?.productCategory}</Text>
                  <Text>
                    {item?.productDescription}
                  </Text>
                  {/* <TouchableOpacity
                    onPress={() => navigate("Videos", {
                      Video: item
                    })}>
                    <Box borderRadius={10} alt='' h='140' w='240' resizeMode='center'>
                      <VideoPlayer
                        video={{ uri: item?.video }}
                        showDuration={true}
                        videoWidth={70}
                        videoHeight={40}
                        thumbnail={{ uri: item?.videoImage }}
                        endThumbnail={{ uri: item?.videoImage }}
                      />
                    </Box>
                  </TouchableOpacity> */}

                </Box>
              )
            }}
            keyExtractor={(item, index) => index.toString()}

          />
        </Box>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})