import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Constants from 'expo-constants';

export const Listing = () => {
  const [title, setTitle] = React.useState('Job Title')
  const [company, setCompany] = React.useState('Company')
  const [date, setDate] = React.useState("2016-05-15")
  const [notes, setNotes] = React.useState('Notes')

  return (
    <SafeAreaView>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {/* Job Title */}
        <View style={styles.input}>
          <Text>Job Title</Text>
          <TextInput
            style={styles.inputField}
            onChangeText={text => setTitle(text)}
            value={title}
          />
        </View>
        {/* Company */}
        <View style={styles.input}>
          <Text>Company</Text>
          <TextInput
            style={styles.inputField}
            onChangeText={text => setCompany(text)}
            value={company}
          />
        </View>
        {/* Applied Date */}
        <View style={styles.input}>
          <Text>Applied Date</Text>
          <DatePicker style={styles.inputField}
            style={{ width: 200 }}
            date={date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={date => setDate(date)}
          />
        </View>
        {/* Notes */}
        <View style={styles.input}>
          <Text>Notes</Text>
          <TextInput
            style={styles.inputField}
            onChangeText={text => setNotes(text)}
            value={notes}
          />
        </View>

        {/* Status */}
        <View style={styles.input}>
          <Text>Current Status</Text>
          <Text>Status</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttons}>
          <View style={styles.fixToText}>
            <TouchableOpacity
              color="#841584"
              onPress={() => Alert.alert('Left button pressed')}
            >
              <Text>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              color="#841584"
              onPress={() => Alert.alert('Right button pressed')}
            >
              <Text>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              color="#841584"
              onPress={() => Alert.alert('Right button pressed')}
            >
              <Text>Create</Text>
            </TouchableOpacity>
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
    justifyContent: 'flex-end',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttons: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 35,
  },
  input: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  inputField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 150
  }
});


