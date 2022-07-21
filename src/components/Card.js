import './Card.css'

function Card(props){
    const classes = 'card ' + props.className; // Must be one space after 'card '
    return (
        /*  classes method created for using another css attributes.
            Used for reusable wrapper component (Card.js) */

        // this children keyword used for open and closed tag for wrapper for card.js
        // It make available for using props to use <Card></Card>

        <div className={classes}>{props.children}</div>

        // <div className="card">{props.children}</div>
       
    )
}

export default Card;