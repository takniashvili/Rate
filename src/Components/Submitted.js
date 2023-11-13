import onlinePayment from '../images/illustration-thank-you.svg'

function Submitted(props) {
    return (
        <div className='submitted'>
            <img src={onlinePayment} alt="payment" />
            <div>
                You selected {props.num} out of 5
            </div>
            <h1>Thank You!</h1>
            <p>
                We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
            </p>
        </div>
    )
}


export default Submitted;