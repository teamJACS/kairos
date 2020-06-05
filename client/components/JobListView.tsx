import React from 'react'
import { FlatList, SafeAreaView, Text, View, StyleSheet } from "react-native"
import { ListItem, SearchBar } from 'react-native-elements';
import { GET_USER, GET_JOB } from '../src/queries'
import { useQuery } from '@apollo/react-hooks'
import { useSelector } from 'react-redux'
import { IAuthState, IJobIdState } from '../redux/interfaces';
import { useDispatch } from 'react-redux'
import { getJob } from '../redux/actions/jobActions'



const JobListing: React.FC = ({ navigation }: any) => {
  const ICON_MAPPING: any = {
    "1": "star",
    "2": "inbox",
    "3": "smartphone",
    "4": "file-document-edit",
    "5": "group",
    "6": "clear",
    "7": "thumb-up",
  }

  let jobs

  const dispatch = useDispatch()

  const userId = useSelector((state: IAuthState) => state.auth.userId)
  const jobId = useSelector((state: IJobIdState) => state.job.jobId)
  const { loading, error, data, refetch } = useQuery(GET_USER, {
    variables: { userId }
  })

  // const [getJobInfo, { loading: jLoading, error: jError, data: jData }] = useLazyQuery(GET_JOB, {
  //   variables: {
  //     userId,
  //     jobId
  //   }
  // });

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
        onPress={async () => {
          dispatch(getJob(item.id))
          // const jobState = await getJobInfo()
          // console.log('jobState', jobState)
          handleClickListItem()
        }}
        subtitle={item.location}
        key={item.id}
        rightIcon={{
          name: ICON_MAPPING[item.statusId],
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