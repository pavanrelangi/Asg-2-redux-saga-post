import Title from '../../Components/Title'
import { connect } from'react-redux'
import { bindActionCreators } from 'redux'
import { postdataApi } from '../Actions/TitleActions'

const stateToProps =(store)=>{
    return {titleData: store.peoplevalues.titleData}
}

const actionToProps = (dispatch)=>{
    return bindActionCreators({postdata: postdataApi},dispatch)
}

export const APIHoc = connect(stateToProps,actionToProps)(Title)