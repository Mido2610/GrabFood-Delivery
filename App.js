import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {colors} from './src/Global/style'
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle= "light-content"
        backgroundColor={colors.statusbar}
      />
      <RootNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
