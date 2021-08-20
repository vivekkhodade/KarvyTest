import React from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Card from '../../components/card'
import '../../assets/card.css';
function CardContainerComponent(props) {
    const {postData}=props
    return (
        <div className='cardContainer'>
            <div className="frame">
            <div className="card-list">
            { postData.length > 0 ?
                postData.map((data,i)=>(
                <Card cardData={data}/> 
                ))
                :
                <div> No Data available </div>
            }    
                <div className="space"></div>
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ cardReducer }) => {
    const { postData } = cardReducer;    
    return {postData};
  };
CardContainerComponent.propTypes = {
    postData: PropTypes.array
};
CardContainerComponent.defaultProps = {
    postData:[]
};
export default connect(mapStateToProps, {})(CardContainerComponent);