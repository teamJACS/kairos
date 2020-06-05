import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Header, Card, Button } from 'react-native-elements';
import { AppliedNumber } from './AppliedNumber';
import { InterviewNumber } from './InterviewNumber';
import { NoResponseNumber } from './NoResponseNumber';
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/actions/authActions';


export const HomePage = () => {
  const dispatch = useDispatch()
  const logout = () => dispatch(setUserId(null))


  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <Text style={{ flexDirection: 'row', justifyContent: "flex-end", fontSize: 25, fontWeight: "bold", color: "dodgerblue", alignSelf: 'center' }}>Kwik Jabs</Text>

      <View style={{ backgroundColor: "#fafafa" }}>
        <Card containerStyle={styles.card
        } dividerStyle={{ width: 0 }} title="Applied" titleStyle={{ color: 'dodgerblue' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
            <AppliedNumber />
            <ScrollView style={{ height: 85, width: 100 }}>
              <View style={{ flexDirection: "column", justifyContent: 'center' }}>
                <Text>reactFlo</Text>
                <Text>Nike</Text>
                <Text>Honey</Text>
              </View>
            </ScrollView>

          </View>
        </Card>

        <Card containerStyle={styles.card} dividerStyle={{ width: 0 }} title="Phone Screen" titleStyle={{ color: 'dodgerblue' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
            <InterviewNumber />

            <ScrollView style={{ height: 85, width: 100 }}>
              <View style={{ flexDirection: "column", justifyContent: 'center' }}>
                <Text>Spearmint</Text>
              </View>
            </ScrollView>

          </View>
        </Card>

        <Card containerStyle={styles.card} dividerStyle={{ width: 0 }} title="Onsite" titleStyle={{ color: 'dodgerblue' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
            <NoResponseNumber />

            <ScrollView style={{ height: 85, width: 100 }}>
              <View style={{ flexDirection: "column", justifyContent: 'center' }}>
                <Text>Chronos</Text>
              </View>
            </ScrollView>
          </View>
        </Card>

        <View style={styles.button}>
          <Button
            title='Logout'
            type="outline"
            raised={true}
            titleStyle={{ color: "#fafafa", fontWeight: "bold" }}
            containerStyle={{ borderWidth: 1 }}
            buttonStyle={{ backgroundColor: "#99ccff", borderRadius: 10, }}
            onPress={logout}
          >
          </Button>
        </View>
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
    shadowOpacity: .2,
    shadowRadius: 3,
    maxHeight: 170
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: '100%',
    marginTop: 144,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#99ccff',
  }
})


