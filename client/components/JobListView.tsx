import React, { useContext } from 'react'
import { FlatList, SafeAreaView, Text, View, StyleSheet } from "react-native"
import { ListItem, SearchBar } from 'react-native-elements';
import  { GET_USER }  from '../src/queries'
import { useQuery } from '@apollo/react-hooks'
import { AuthContext } from "../src/AuthProvider";

const JobListing: React.FC = () => {
  let jobs
  const { userId } = useContext(AuthContext)
  const { loading, error, data } = useQuery(GET_USER, {variables: {userId}})

  if (!loading && data && data.user && data.user.jobs) {
    jobs = data.user.jobs
  }

  const handleClickListItem = () => {
    console.log('Clicked')
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
  const emptyListView = () => {
    return (
      <View style={styles.emptyView}>
        <Text>Your Job Listview is Empty</Text>
      </View>
    )
  }

  return (  
    <>
      {!data? <Text>Loading...</Text> :(
        <SafeAreaView>
          <FlatList 
            ListEmptyComponent={emptyListView}
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

const styles = StyleSheet.create({
  emptyView: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  },
})