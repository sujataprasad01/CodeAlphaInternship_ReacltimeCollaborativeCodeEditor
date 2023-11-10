export default function JoinRoom() {

    function handleRoomSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className="joinBoxWrapper">
            <form className="joinBox" onSubmit={handleRoomSubmit}>
                <p>Paste your invitation code down below</p>

                <div className="joinBoxInputWrapper">
                    <input
                        className="joinBoxInput"
                        id="roomIdInput"
                        type="text"
                    
                    />
                    <label htmlFor="roomIdInput" className="joinBoxWarning"></label>
                </div>

                <div className="joinBoxInputWrapper">
                    <input
                        className="joinBoxInput"
                        id="usernameInput"
                        type="text"
                    
                    />
                    <label htmlFor="usernameInput" className="joinBoxWarning"></label>
                </div>

                <button className="joinBoxBtn" type="submit">Join</button>
            
            </form>
        </div>
    )
}