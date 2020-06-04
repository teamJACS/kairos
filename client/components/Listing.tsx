import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Constants from 'expo-constants';
import { Input, Button} from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { CREATE_JOB } from '../src/queries'
import { useMutation } from '@apollo/react-hooks'
import RIGHT_ICON_MAPPING from '../src/statusIconMap';

export const Listing = () => {
  const [title, setTitle] = React.useState('')
  const [company, setCompany] = React.useState('')
  const [date, setDate] = React.useState("")
  const [notes, setNotes] = React.useState('')
  const [statusText, setStatus] = React.useState('')
  // const userId = 
  const [createJobMutation] = useMutation(CREATE_JOB)

  const handlePressCreateButton = async () => {
    if(company === '' || title === '' || statusText === '') {
    } else {
      const statusId = RIGHT_ICON_MAPPING[statusText]
      await createJobMutation({
        variables: {
          title,
          company,
          date,
          notes,
          statusId,
          userId
        }
      })
    }
    //redirect to listview
    return;
  }

  let options = [
    { value: 'Interested' }, 
    { value: 'Applied' }, 
    { value: 'Phone Screen' }, 
    { value: 'Take Home' }, 
    { value: 'Onsite' }, 
    { value: 'Rejected' }, 
    { value: 'Offer $' }
  ]

  return (
    <SafeAreaView>
      <Text style={{ flexDirection: 'row', justifyContent: "flex-end", fontSize: 25, fontWeight: "bold", color: "dodgerblue", alignSelf: 'center' }}>Listing</Text>
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
        <View style={{ paddingTop: 50 }}>
          <View>
            <Text style={{ color: "dodgerblue", fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>Current Status</Text>
          </View>

          {/* Status */}
          <View style={styles.status}>
            <Dropdown
              label='Status'
              data={options}
              style={{ width: 50 }}
              onChangeText={(el) => setStatus(el)}
            />
          </View>
        </View>

        <View style={styles.buttons}>
          <View style={styles.fixToText}>
            {/* <Button
            style={ {marginRight: 40}}
              title="Delete"
              type="clear"
              raised={true}
              titleStyle={{ color: "#fafafa", fontWeight: "bold" }}
              buttonStyle={{ backgroundColor: "#ff7676", borderRadius: 10 }}
              onPress={deleteButton}
            /> */}
            <Button
              style={ {marginRight: 20}}
              title='Create'
              type="clear"
              raised={true}
              titleStyle={{ color: "#fafafa", fontWeight: "bold" }}
              buttonStyle={{ backgroundColor: "#99ccff", borderRadius: 10 }}
              onPress={handlePressCreateButton}
            />

            {/* <Button
              title='Update'
              type="clear"
              raised={true}
              titleStyle={{ color: "#fafafa", fontWeight: "bold" }}
              // containerStyle={{ borderWidth: 1 }}
              buttonStyle={{ backgroundColor: "#43F45B", borderRadius: 10, }}
              onPress={saveButton}
            /> */}

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
    flexDirection: 'column-reverse',
    paddingBottom: 40,
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15
  }
});


