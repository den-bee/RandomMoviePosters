import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Text, View, Image, Pressable } from 'react-native';

interface Poster {
  id: number,
  uri: string,
  name: string,
  year: number
}

let randomNumber0To6 = () => {
  let randomNumber = Math.floor(Math.random() * 5);

  return randomNumber;
}

const posters : Poster[] = [
  {
    id: randomNumber0To6(),
    uri: "https://www.movieposters.com/cdn/shop/products/c86a76819022e173e45815007c053217_72df0b75-6dde-4f48-8e4d-05be9c912f58_480x.progressive.jpg?v=1573616009",
    name: "Halloween",
    year: 1978
  },
  {
    id: randomNumber0To6(),
    uri: "https://www.movieposters.com/cdn/shop/products/411bbb6a4cd25e54181e833abcf15bc4_ff094e0b-229a-43ff-8662-e5398d50593a_480x.progressive.jpg?v=1573652593",
    name: "Friday The 13th",
    year: 1980
  },
  {
    id: randomNumber0To6(),
    uri: "https://www.movieposters.com/cdn/shop/products/2343bd4ccd48e952a965ce4c4e0cc48d_814832ab-c92f-41ed-8c63-f2c175eb0709_480x.progressive.jpg?v=1573594800",
    name: "The Thing",
    year: 1982
  },
  {
    id: randomNumber0To6(),
    uri: "https://www.movieposters.com/cdn/shop/products/bd8230fe7408f7ad9a785470e0d95c5c_126d9b42-152c-4ebc-acb6-1b1e96133a3d_480x.progressive.jpg?v=1573588550",
    name: "The Evil Dead",
    year: 1981
  },
  {
    id: randomNumber0To6(),
    uri: "https://www.movieposters.com/cdn/shop/products/51eadd844c8c362c58e30e3545936d1c_08f0d111-9fb3-4cc0-bca5-65446f37ea17_480x.progressive.jpg?v=1573616005",
    name: "The Exorcist",
    year: 1973
  },
  {
    id: randomNumber0To6(),
    uri: "https://www.movieposters.com/cdn/shop/products/cd1cf61b9202a4bf913e44f45d5b69b8_4cccc631-2abe-4308-a785-8392d9d6f8a2_480x.progressive.jpg?v=1573653762",
    name: "Children Of The Corn",
    year: 1984
  }
]

export default function App() {
  return (
    <View style={styles.container}>
      {
        posters.map((poster) => (
          <Pressable onPress={() => {
            Alert.alert(`${poster.name}`, `${poster.year}`)
          }}>
            <Image
              style={styles.image}
              source={{uri: poster.uri}}
            ></Image>
          </Pressable>
        )
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100
  }
});
