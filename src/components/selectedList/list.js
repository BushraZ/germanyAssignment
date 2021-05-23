import React from 'react';
import _ from "lodash";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {disabledChannel} from "../../redux/actions/channelsActions";
import Button from '../../common/button/button';
import Menu from '../dropDown/dropDown';
import "./list.scss";

const SelectedList=(props) =>{
   const {selectedChannels, unSelectedChannels} = props;

    const handleClick =(id)=>{
      props.actions.disabledChannel(id);
    }
 
    return (
        <div className="channales">
            <div className="text">selected channels</div>
            <div className="selected_list">
                {
                    selectedChannels.map(element=>(
                        <Button
                            key={element.id} 
                            title={element.title}
                            color={element.color} 
                            disabled={element.disabled} 
                            toggle={()=>handleClick(element.id)}
                         />
                    ))
                }
                <Menu 
                    options={unSelectedChannels}
                    added={props.added}
                />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(
        {
          disabledChannel
        },
        dispatch
      ),
    };
  };
  
export default connect(null, mapDispatchToProps)( SelectedList);
