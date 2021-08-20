import React, { Component } from 'react';
import { connect } from "react-redux";
import CardContainerComponent from '../container/cardcontainer';
import {addUpdateCardData} from '../../redux/actions/cardacction'
import  webService from '../../services/services';
class Layout extends Component {
    getPostData = ()=>{
        try {
            const postData = Promise.resolve(
                webService.getPostData()
            );
            postData.then(async (resultData) => {
              if (resultData !== null) {
                    this.props.addUpdateCardData({
                        postData:resultData
                    })
              } 
            });
          } catch (e) {
            console.log(e);
          }
    }
    componentDidMount() {
        this.getPostData();
    }
    render() {
        return (
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                   <CardContainerComponent />
            </div>
        )
    }
}

const mapStateToProps = ({ cardReducer }) => {
    const { postData } = cardReducer;    
    return {postData};
  };
export default connect(mapStateToProps, { addUpdateCardData })(Layout);
  