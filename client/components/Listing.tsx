import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';

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
      <Text style={{ flexDirection: 'row', justifyContent: "flex-end", paddingLeft: 47, paddingTop: 45, fontSize: 20, fontWeight: "bold" }}>Create/Edit a Listing</Text>
      <View style={{ flex: 1, justifyContent: "center", paddingTop: 70 }}>
        {/* Job Title */}
        <View style={styles.input}>
          <Text>Job Title</Text>
          <TextInput
            placeholder='Job Title'
            style={styles.inputField}
            onChangeText={text => setTitle(text)}
            value={title}
          />
        </View>
        {/* Company */}
        <View style={styles.input}>
          <Text>Company</Text>
          <TextInput
            placeholder='Company'
            style={styles.inputField}
            onChangeText={text => setCompany(text)}
            value={company}
          />
        </View>
        {/* Applied Date */}
        <View style={styles.input}>
          <Text>Applied Date</Text>
          <DatePicker
            style={{ width: 175 }}
            date={date}
            mode="date"
            placeholder="Select Date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
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
          <Text>Notes</Text>
          <TextInput
            placeholder='Notes'
            style={styles.inputField}
            onChangeText={text => setNotes(text)}
            value={notes}
          />
        </View>

        {/* Status */}
        <View style={styles.status}>
          <Text>Current Status</Text>
          <Text>Status</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttons}>
          <View style={styles.fixToText}>

            {/* Create Button */}
            <TouchableOpacity
              style={{ backgroundColor: "#99ccff", padding: 10, borderRadius: 10 }}
              onPress={() => createButton()}
            >
              <Text>Create</Text>
            </TouchableOpacity>

            {/* Save Button */}
            <TouchableOpacity
              style={{ backgroundColor: "#99ffbb", padding: 10, borderRadius: 10 }}
              onPress={() => saveButton()}
            >
              <Text>Save</Text>
            </TouchableOpacity>

            {/* Delete Button */}
            <TouchableOpacity
              style={{ backgroundColor: "#ff9999", padding: 10, borderRadius: 10 }}
              onPress={() => deleteButton()}
            >
              <Text>Delete</Text>
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
    paddingBottom: 15
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
    width: 150,
    textAlign: 'center'
  },
  status: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 150
  }
});


