const Notification = ({ message }) => {
    console.log(message)
    if (message === null || message.message === null) {
        return null;
    }

    const mType = message.type 
        ? "good-message" 
        : "bad-message";

    return ( 
        <div className={mType}>
            {message.message}
        </div>
    );
}

 
export default Notification;