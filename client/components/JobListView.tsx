import React from 'react'
import { FlatList, SafeAreaView, Text } from "react-native"
import { ListItem, SearchBar } from 'react-native-elements';
import  { GET_USER }  from '../src/queries'
import { useQuery } from '@apollo/react-hooks'



const JobListing: React.FC = () => {
  let jobs
  const { loading, error, data } = useQuery(GET_USER)

  if (!loading) {
    jobs = data.user.jobs
  }

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
        subtitle={item.location}
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
      {!data? <Text>aaa</Text> :(
        <SafeAreaView>
          <FlatList 
            ListHeaderComponent={renderHeader}
            data={jobs} 
            renderItem={renderItem}
          />
        </SafeAreaView>
      )}
    </>
  )
  
}

export default JobListing;