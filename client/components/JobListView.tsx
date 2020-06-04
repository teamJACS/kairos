import React from 'react'
import { FlatList, SafeAreaView, Text, View, StyleSheet } from "react-native"
import { ListItem, SearchBar } from 'react-native-elements';
import { GET_USER } from '../src/queries'
import { useQuery } from '@apollo/react-hooks'
import { useSelector } from 'react-redux'
import { IAuthState, IJobIdState } from '../redux/interfaces';
import { useDispatch } from 'react-redux'
import { getJob } from '../redux/actions/jobActions'

const JobListing: React.FC = ({ navigation }: any) => {
  let jobs
  const dispatch = useDispatch()
  const userId = useSelector((state: IAuthState) => state.auth.userId)
  const { loading, error, data, refetch } = useQuery(GET_USER, {
    variables: { userId }
  })

  if (!loading && data && data.user && data.user.jobs) {
    jobs = data.user.jobs
  }

  const handleClickListItem = () => {
    return (
      navigation.navigate('Add/Update')
    )
  }

  const renderHeader = () => {
    return <SearchBar placeholder='Search Here...'
      lightTheme round editable />
  }
  const renderItem = ({ item }: any) => {
    return (
      <ListItem
        title={item.company}
        onPress={() => {
          dispatch(getJob(item.id))
          handleClickListItem()
        }}
        subtitle={item.location}
        key={item.id}
        rightIcon={{
          name: 'playlist-add-check',
          type: 'material',
          color: '#517fa4'
        }}
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
      {!data ? <Text>Loading...</Text> : (
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