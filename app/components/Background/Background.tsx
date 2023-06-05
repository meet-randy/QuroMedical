import {
  StyleSheet,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

export default function Background(props: { children: React.ReactNode }) {
  return  <LinearGradient colors={['rgb(187, 0, 255)', '#4169E1']} style={styles.gradient}>{props.children}</LinearGradient>;
}

const styles = StyleSheet.create({
  image: {
    flex:1,
    resizeMode: "cover",
    width: "100%",
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
});
