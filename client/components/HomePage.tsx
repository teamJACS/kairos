import React, { useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Header, Card, Button } from 'react-native-elements';
import { AuthContext } from '../src/AuthProvider';
import { AppliedNumber } from './AppliedNumber';
import { InterviewNumber } from './InterviewNumber';
import { NoResponseNumber } from './NoResponseNumber';

export const HomePage = () => {
  const { setUserId } = useContext(AuthContext)
  const logout = () => setUserId(null)

  return (
    <SafeAreaView>
      <Header containerStyle={styles.header} centerComponent={{
        text: "Job", style: { color: "white", fontWeight: "bold", fontSize: 30, bottom: 15 }
      }} />

      <Card containerStyle={styles.card
      } dividerStyle={{ width: 0 }} title="Applied">
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
          <AppliedNumber />
          <ScrollView>
            <View style={{ flexDirection: "column", justifyContent: 'center' }}>
              <Text>Amazon</Text>
              <Text>Facebook</Text>
              <Text>Google</Text>
              <Text>Google</Text>
              <Text>Google</Text>
              <Text>Google</Text>
            </View>
          </ScrollView>
        </View>
      </Card>

      <Card containerStyle={styles.card} dividerStyle={{ width: 0 }} title="Interview">
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
          <InterviewNumber />
          {/* <View style={{ flexDirection: "column", justifyContent: 'center', left: 32 }}> */}
          <View style={{ flexDirection: "column", justifyContent: 'center' }}>
            <Text>SpeakerBoxx</Text>
            <Text>Activision</Text>
            <Text>Sieun's Company</Text>
            <Text>Netflix</Text>
          </View>
        </View>
      </Card>

      <Card containerStyle={styles.card} dividerStyle={{ width: 0 }} title="No Response">
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
          <NoResponseNumber />
          {/* <View style={{ flexDirection: "column", justifyContent: 'center', right: 20 }}> */}
          <View style={{ flexDirection: "column", justifyContent: 'center' }}>
            <Text>CaryQL</Text>
            <Text>Enron</Text>
          </View>
        </View>
      </Card>

      <View style={styles.button}>
        <Button
          title='logout'
          type="outline"
          raised={true}
          titleStyle={{ color: "#fafafa", fontWeight: "bold" }}
          containerStyle={{ borderWidth: 1 }}
          buttonStyle={{ backgroundColor: "#99ccff", borderRadius: 10, }}
          onPress={logout}
        >
        </Button>
      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: .8,
    shadowRadius: 3,


  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 160
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#99ccff',

  }
})


