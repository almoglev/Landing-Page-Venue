import React from 'react';
import Button from '@material-ui/core/Button'

import TicketIcon from '../../resources/images/icons/ticket.png'

const MyButton = (props) => {
    return(
        <Button
            href={props.link}
            variant="contained"
            // if size is given, use it, otherwise choose default as large
            size = {props.size ? props.size : 'large'}
            style={{
                // default style in case it's not given
                background:'#8e8e8e',
                color:'#ffffff',
                // using the line below we override the default style
                ...props.style
            }}
        >   
            { props.iconTicket ? 
                <img
                    src={TicketIcon}
                    className="iconImage"
                    alt="icon_button"
                />
                : null

            }
 
            {props.text}
        </Button>
    )
}

export default MyButton