import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [calcData, setCalcData] = useState({ num: '', result: null });

  const docalc = () => {
    const num = parseFloat(calcData.num); // Convert to number
    if (isNaN(num)) {
      setCalcData({ ...calcData, result: 'Invalid Number' });
      return;
    }

    const sqr = num * num;
    setCalcData({ ...calcData, result: `Result of ${num} is ${sqr}` });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Square Calc Application</Text>
      <TextInput
        value={calcData.num}
        keyboardType="numeric"
        placeholder="Enter number"
        onChangeText={(data) => setCalcData({ ...calcData, num: data })}
        style={styles.input}
      />
      <Button title="Find Square" onPress={docalc} />
      {calcData.result && <Text>{calcData.result}</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    textAlign: 'center',
  },
});
