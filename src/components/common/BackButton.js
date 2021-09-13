import React from 'react'
import { useHistory } from "react-router"






const BackButton = () => {
    const history = useHistory()

    const goBack = () => {
    history.goBack()
    }
    return (
        <a><i className="fa fa-arrow-left w3-class w3-text-white w3-hover-opacity" onClick={goBack}></i></a>
      );
}

export default BackButton
