import React,{useEffect} from 'react';
import _ from "lodash";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllChannels, addToSelectedChannel, getSelectedChannels, unSelectedChannels} from '../../redux/actions/channelsActions';
import Chart from '../Chart/chart';
import List from '../selectedList/list';
import Table from '../table/table';
import './app.scss';

const App = (props) => {

//  useEffect(() => {
//     if(props.allChannels.data.length<1)
//      props.actions.getAllChannels();
//  }, [props.allChannels])

const useFetching = someFetchActionCreator => {
  useEffect( () => {
    someFetchActionCreator();
  }, [])
}
useFetching(props.actions.getAllChannels);

    return (
        <div className="app">            
            <List 
              selectedChannels={props.selectedChannels} 
              unSelectedChannels={props.unSelectedChannels} 
              added={props.actions.addToSelectedChannel}
            />    
            <Chart channels={props.selectedChannels} />        
            <Table />          
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedChannels: _.get(state, "channels.selectedChannels", []),
        allChannels:_.get(state,'channels.allChannels.data',[]),
        unSelectedChannels:_.get(state,'channels.unSelectedChannels',[])
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(
        {
          getAllChannels,
          addToSelectedChannel
       //   getSelectedChannels
        },
        dispatch
      ),
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(App);