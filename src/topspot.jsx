import React from 'react';

// spotLocation(){

// }

export default props => {
    return (
    <div className='well'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a className="btn btn-primary" href={'https://maps.google.com/?q='+props.location} role="button" >Open in Google Maps</a>
    </div>
 )
}
