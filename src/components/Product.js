import React from 'react'
import Radium from 'radium';
import { Link } from 'react-router-dom';
const styles = {
    root: {
        flexBasis: '120px',
        margin: '8px',
        flexGrow: 1,
        '@media (min-width: 480px)': {
            flexGrow: 0,
            flexBasis: '180px',
        }
    },
}

const Product = (props) => {
    return (
       
            <div style={styles.root} >
                <Link to={"./details/"+props.id}>
                <div className="w3-card" cover={<img alt="dress" />}>
                    <img src={props.image} alt="prod" style={{
                        width: '100%', height: '150px', maxHeight: '150px',
                        overflowY: 'hidden'
                    }} />
                    <div className="w3-container" style={{ height: '52px', maxHeight: '52px', overflowY: 'hidden' }}>
                        <h6 style={{ color: props.price_color, margin: 0, textAlign: 'center' }}>{props.price}</h6>
                        <p className="w3-text-dark-gray" style={{ margin: 0, textAlign: 'center' }}>{props.title}</p>
                    </div>
                </div>
                </Link>
            </div>
        

    )
}

export default Radium(Product)
