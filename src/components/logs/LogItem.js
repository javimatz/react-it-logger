import React from 'react';
import Moment from 'moment/moment';

import PropTypes from 'prop-types';

const LogItem = ({ log }) => {
  
	const dateToFormat = '1976-04-19T12:59-0500';

	return (
	<li className='collection-item'>
	  <div>
	    <a 
	      href='#edit-log-modal' 
	      className={`modal-trigger ${log.attention? 'red-text' : 'blue-text' }`} 
	      >{log.message}
	     </a>
	     <br />
	     <span className='grey-text'>
	     	<span className='black-text'>ID #{log.id}</span> last updated by{' '}
	     	<span className='black-text'>{log.tech}</span> on{' '}
	     	{Moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
	  	</span>
	  	<a href='#!' className='secondary-content'>
	  		<i className='material-icons grey-text' >delete</i>
	  	</a>
	  </div> 
	</li>
	);
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired
};

export default LogItem;
