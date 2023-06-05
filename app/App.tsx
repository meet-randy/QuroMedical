import { StatusBar } from "expo-status-bar";
import { Alert, Button, FlatList, Image, Linking, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Background from "./components/Background/Background";
import { useCallback, useEffect, useState } from "react";
import { Poppins_400Regular, Poppins_700Bold, Poppins_300Light } from '@expo-google-fonts/poppins'
import * as Font from 'expo-font'
import Loader from "./components/AppLoader/Loader";
import api from "./helpers/apiHelper";

export default function App() {
  const [appIsReady, setAppIsReady] = useState<Boolean>(false)
  const [list, setList] = useState<{name: string}[]>([])
  const [visible, setVisibility] = useState<Boolean>(false)
  const [url, setUrl] = useState<{url: string}>()

  const loadFonts = useCallback(async () => {
    try {
      await Font.loadAsync({
        Poppins_400Regular,
        Poppins_700Bold,
        Poppins_300Light
      })
      setAppIsReady(true)
    } catch (err) {
      console.log(err)
    }
  }, [list])

  useEffect(() => {

    loadFonts()
  }, [])

  const handleInput = ((text: string) => {
    setUrl({url: text})
  })

  const handleSubmit = (async() => {
    setAppIsReady(false)
    try {
      const data = {
        "long_url": url?.url
      }
      const response = await api.post('/shorten', data)
      setList((prev) => [...prev, {name: response.data.shortUrl}])
      if(list.length > 0){
        setVisibility(true)
      }
      setAppIsReady(true)
    } catch (error) {
      setAppIsReady(true)
      console.log(error)
    }
   
  })


  const showAlert = async(item: string) => {
    const shortcode = removeFirstPartOfUrl(item)
    const long_url = await api.get("/unshorten"+`${shortcode}`)

    Alert.alert(
      'Notice',
      'By accepting you will be redirected to the following address \n'+ `${long_url.data.longUrl}`,
      [
        {
          text: 'OK',
          onPress: () => redirectToUrl(item),
        },
      ],
      { cancelable: false }
    );
  };

  function removeFirstPartOfUrl(url: String) {
    const regex = /^https?:\/\/[^/]+/;
    return url.replace(regex, "");
  }

  const redirectToUrl = (async(item: String) => {
    try {
      const shortcode = removeFirstPartOfUrl(item)
      var URL: string = "https://api.meetrandy.co.za/api"
      URL += "/shorten" +`${shortcode}`
      Linking.openURL(URL)
      .catch((error) => {
        console.error("Error opening URL: ", error);
      });
      //const response = await api.get('/shorten'+`${ shortcode }`)
      //setList((prev) => [...prev, {name: response.data.shortUrl}])
      // if(list.length > 0){
      //   setVisibility(true)
      // }
      setAppIsReady(true)
    } catch (error) {
      setAppIsReady(true)
      console.log(error)
    }
  })

  if(!appIsReady){
    return (
      <Loader/>
    )
  }else{
    return (
      <Background>
        <SafeAreaView>
        <View style={styles.container}>

          <Image source={require('../app/assets/icon.png')} style={{width: 100, height: 100, marginVertical: 20}} />

          <TextInput 
            placeholder="enter long url..."
            style={styles.input}
            value={url?.url}
            onChangeText={(text) => handleInput(text)}
            autoCapitalize="none"
          />
          <View style={{backgroundColor: "#fff", width: "40%", marginVertical: 20, borderRadius: 20}}>
            <Button title="GO..." onPress={() => handleSubmit()}/>
          </View>
          {/* {visible?  */}
          <FlatList
            data={list}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => showAlert(item.name)}  
              >
                 <Text style={styles.textStyle}>{item.name}</Text>
              </TouchableOpacity>
             
            )}
            
            style={{width: 300, marginVertical: 20}}
            //extraData={appIsReady}
          />
          {/* :
          <></> */}
            {/* } */}
          <StatusBar style="auto" />
        </View>
        </SafeAreaView>
      </Background>

    );
  }

 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: '#fff',
    textAlign: 'center',
    color: 'black',
    backgroundColor: '#fff',
    maxWidth: '80%',
    minWidth: '80%',
    borderRadius: 10,
    alignSelf: 'center'
  },
  textStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Poppins_300Light',
    marginVertical: 10
    
  }
});
