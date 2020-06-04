import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Input, Button } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { CREATE_JOB, GET_USER } from '../src/queries'
import { useMutation } from '@apollo/react-hooks'
import RIGHT_ICON_MAPPING from '../src/statusIconMap';
import { useSelector } from 'react-redux'
import { IAuthState, IJobIdState } from '../redux/interfaces';

const Listing = ({ navigation }: any) => {
  const jobId = useSelector((state: IJobIdState) => state.job.jobId)
  const [jobTitle, setJobTitle] = React.useState('')
  const [location, setLocation] = React.useState('')
  const [company, setCompany] = React.useState('')
  const [date, setDate] = React.useState("")
  const [notes, setNotes] = React.useState('')
  const [statusText, setStatus] = React.useState('')
  const userId = useSelector((state: IAuthState) => state.auth.userId)
  const [createJobMutation] = useMutation(CREATE_JOB, {
    refetchQueries: [{
      query: GET_USER,
      variables: { userId }
    }],
  })

  const handlePressCreateButton = async () => {
    if (company === '' || jobTitle === '' || statusText === '') {
      Alert.alert('Company, Job Title and Status are required')
      return
    } else {
      const statusId = RIGHT_ICON_MAPPING[statusText]
      await createJobMutation({
        variables: {
          jobTitle,
          location,
          company,
          date,
          notes,
          statusId,
          userId
        }
      })
      setLocation('')
      setJobTitle('')
      setCompany('')
      setNotes('')
      setStatus('')
      navigation.navigate('List View')
    }
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
    <SafeAreaView style={styles.container}>
      <Text style={{ flexDirection: 'row', justifyContent: "flex-end", fontSize: 25, fontWeight: "bold", color: "dodgerblue", alignSelf: 'center' }}>Listing</Text>
      <View style={{ flex: 1, justifyContent: "center", paddingTop: 70, backgroundColor: "#fafafa" }}>
        <View style={styles.input}>
          <Input
            placeholder='Job Title'
            style={styles.inputField}
            onChangeText={text => setJobTitle(text)}
            value={jobTitle}
          />
        </View>

        <View style={styles.input}>
          <Input
            placeholder='Company'
            style={styles.inputField}
            onChangeText={text => setCompany(text)}
            value={company}
          />
        </View>

        <View style={styles.input}>
          <Input
            placeholder='Location'
            style={styles.inputField}
            onChangeText={text => setLocation(text)}
            value={location}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <DatePicker
            style={{ width: 200, borderBottomColor: '#fff' }}
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
            {/* <Text style={{ color: "dodgerblue", fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>Current Status</Text> */}
          </View>

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
            <Button
              style={{ marginRight: 20 }}
              title='Create'
              type="clear"
              raised={true}
              titleStyle={{ color: "#fafafa", fontWeight: "bold" }}
              buttonStyle={{ backgroundColor: "#99ccff", borderRadius: 10 }}
              onPress={handlePressCreateButton}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>

  );
}

export default Listing

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
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


