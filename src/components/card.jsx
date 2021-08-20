import React from 'react'
import PropTypes from "prop-types";
import '../assets/card.css';
function Card(props) {
    const { cardData } = props;
    return (
        <div>
            <div className="card">
                <div>
                    Id:{cardData.id}
                </div>
                <div>
                    Title:{cardData.title}
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    cardData: PropTypes.object.isRequired
};
export default Card;
