import React from 'react'
import { FlatList, SafeAreaView } from "react-native"
import { ListItem, SearchBar } from 'react-native-elements';

const JobListing: React.FC = () => {
  const fakeData = [
    {
      id: "1",
      company: 'FB',
      status: 'Applied'
    },
    {
      id: "2",
      company: 'AMZN',
      status: 'Interested'
    },
    {
      id: "3",
      company: 'AB',
      status: 'Received an offer'
    },
    {
      id: "4",
      company: 'CaryQL',
      status: 'Rejected'
    },
    {
      id: "5",
      company: 'FB',
      status: 'Applied'
    },
    {
      id: "6",
      company: 'AMZN',
      status: 'Interested'
    },
    {
      id: "7",
      company: 'AB',
      status: 'Received an offer'
    },
    {
      id: "8",
      company: 'CaryQL',
      status: 'Rejected'
    },
    {
      id: "9",
      company: 'FB',
      status: 'Applied'
    },
    {
      id: "10",
      company: 'AMZN',
      status: 'Interested'
    },
    {
      id: "11",
      company: 'AB',
      status: 'Received an offer'
    },
    {
      id: "12",
      company: 'CaryQL',
      status: 'Rejected'
    },
  ]

  const handleClickListItem = () => {
    console.log('Clicked')
  }

  const RIGHT_ICON_MAPPING = {
    1: 'feedback',
    2: 'feedback,',
    3: 'call,',
    4: 'file-document-edit,',
    5: 'group,',
    6: 'thumb-down,',
    7: 'thumb-up,',
  }

  const renderHeader = () => {
    return <SearchBar placeholder='Search Here...'
      lightTheme round editable />
  }
  const renderItem = ({item}: any)  => {
    return (
      <ListItem
        title={item.company}
        onPress={handleClickListItem}
        subtitle={item.status}
        key={item.id}
        rightIcon={{  
          name:'playlist-add-check',
          type:'material',
          color:'#517fa4'}}
      />  
    )
  }


  return (
    <>
      <SafeAreaView>
        <FlatList 
          ListHeaderComponent={renderHeader}
          data={fakeData} 
          renderItem={renderItem}
        />
      </SafeAreaView>
    </>
  )
}

export default JobListing;