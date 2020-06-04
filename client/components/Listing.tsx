import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Constants from 'expo-constants';
import { Header, Input, Button, Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

export const Listing = () => {
  const [title, setTitle] = React.useState('')
  const [company, setCompany] = React.useState('')
  const [date, setDate] = React.useState("")
  const [notes, setNotes] = React.useState('')

  const saveButton = () => {
    return;
  }
  const createButton = () => {
    return;
  }
  const deleteButton = () => {
    return;
  }

  return (
    <SafeAreaView>
      <Text style={{ flexDirection: 'row', justifyContent: "flex-end", paddingLeft: 47, paddingTop: 45, fontSize: 25, fontWeight: "bold", color: "dodgerblue" }}>Create/Edit a Listing</Text>
      <View style={{ flex: 1, justifyContent: "center", paddingTop: 70, backgroundColor: "#fafafa" }}>
        {/* Job Title */}
        <View style={styles.input}>
          {/* <Text>Job Title</Text> */}
          <Input
            placeholder='Job Title'
            style={styles.inputField}
            onChangeText={text => setTitle(text)}
            value={title}
          />
        </View>
        {/* Company */}
        <View style={styles.input}>
          <Input
            placeholder='Company'
            style={styles.inputField}
            onChangeText={text => setCompany(text)}
            value={company}
          />
        </View>
        {/* Applied Date */}
        <View style={styles.input}>
          <DatePicker
            style={{ width: 175 }}
            date={date}
            mode="date"
            placeholder="Applied Date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={true}
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 5,
                top: 4,
              },
              dateInput: {
                marginLeft: 10
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={date => setDate(date)}
          />
        </View>
        {/* Notes */}
        <View style={styles.input}>
          <Input
            placeholder='Notes'
            style={styles.inputField}
            onChangeText={text => setNotes(text)}
            value={notes}
          />
        </View>

        {/* Status */}
        <View style={styles.status}>
          <Text style={{ color: "dodgerblue", fontWeight: 'bold', fontSize: 18 }}>Current Status:</Text>
          <Text style={{ color: "dodgerblue", fontWeight: 'bold', fontSize: 18 }}>Status</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttons}>
          <View style={styles.fixToText}>

            {/* Create Button */}
            <Button
              title='Create'
              type="outline"
              raised={true}
              titleStyle={{ color: "#fafafa", fontWeight: "bold" }}
              containerStyle={{ borderWidth: 1 }}
              buttonStyle={{ backgroundColor: "#99ccff", borderRadius: 10 }}

              // style={{ backgroundColor: "#99ccff", padding: 10, borderRadius: 10 }}
              onPress={() => createButton()}
            >
            </Button>

            {/* Save Button */}
            <Button
              title='Save'
              type="outline"
              raised={true}
              titleStyle={{ color: "#fafafa", fontWeight: "bold" }}
              containerStyle={{ borderWidth: 1 }}
              buttonStyle={{ backgroundColor: "#43F45B", borderRadius: 10, }}
              // style={{ backgroundColor: "#99ccff", padding: 10, borderRadius: 10 }}
              onPress={() => createButton()}
            >
            </Button>

            {/* Delete Button */}
            <Button
              title="Delete"
              type="outline"
              raised={true}
              titleStyle={{ color: "#fafafa", fontWeight: "bold" }}
              containerStyle={{ borderWidth: 1 }}
              buttonStyle={{ backgroundColor: "#ff7676", borderRadius: 10 }}
              onPress={() => deleteButton()}
            >
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttons: {
    flex: 1,
    flexDirection: 'column-reverse',
    paddingBottom: 15,
    marginLeft: 12,
    marginRight: 12
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  inputField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 100,
    textAlign: 'center'
  },
  status: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 110
  }
});


