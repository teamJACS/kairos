import React, { useState } from 'react'
import { View, TextInput } from 'react-native'

export const Listing = () => {
  const [title, setTitle] = React.useState('Job Title')
  const [company, setCompany] = React.useState('Company')
  const [date, setDate] = React.useState('Application Date')
  const [notes, setNotes] = React.useState('Notes')

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setTitle(text)}
        value={title}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setCompany(text)}
        value={company}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setDate(text)}
        value={date}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setNotes(text)}
        value={notes}
      />
    </View>

  )

}
