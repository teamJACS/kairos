import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView } from 'react-native';
import { Header, Card, ListItem, Button } from 'react-native-elements';
import { AuthContext } from '../src/AuthProvider';
import { AppliedNumber } from './AppliedNumber';
import { InterviewNumber } from './InterviewNumber';
import { NoResponseNumber } from './NoResponseNumber';
export const HomePage = () => {
  const { logout } = useContext(AuthContext)
  return (
    <SafeAreaView>
      <Header containerStyle={styles.header} centerComponent={{
        text: "My Job Status's", style: { color: "white", fontWeight: "bold", fontSize: 30, bottom: 15 }
      }} />

      <Card containerStyle={styles.card
      } dividerStyle={{ width: 0 }} title="Applied">
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
          <AppliedNumber />
          <View style={{ flexDirection: "column", justifyContent: 'center' }}>
            <Text>Amazon</Text>
            <Text>Facebook</Text>
            <Text>Google</Text>
          </View>
        </View>
      </Card>

      <Card containerStyle={styles.card} dividerStyle={{ width: 0 }} title="Interview">
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
          <InterviewNumber />
          <View style={{ flexDirection: "column", justifyContent: 'center', left: 32 }}>
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
          <View style={{ flexDirection: "column", justifyContent: 'center', right: 20 }}>
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
          onPress={() => logout()}
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
    shadowRadius: 3

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


