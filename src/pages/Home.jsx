import React, { useState } from "react"
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [roomId, setRoomId] = useState('');
    const [userName, setUserName] = useState('');

    const createNewRoom = (e) => {
        e.preventDefault();

        const id = uuidV4();

        setRoomId(id);
        toast.success('Created a new room')
    }

    const joinRoom = () => {
        if (!roomId || !userName) {
            toast.error("ROOM ID & Username is required")
            return
        }

        // redirect
        navigate(`/editor/${roomId}`, {
            state: {
                userName
            }
        })
    }

    const handleInputEnter = (e) => {
        if (e.code === "Enter") {
            joinRoom()
        }
    }

    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img className="homePageLogo" src="/logo.svg" alt="Logo" />
                <h4 className="mainLabel">Paste Invitation ROOM ID</h4>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="ROOM ID"
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                        onKeyUp={handleInputEnter}
                    />
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="USER NAME"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        onKeyUp={handleInputEnter}
                    />
                    <button
                        className="btn joinBtn"
                        onClick={joinRoom}
                    >Join</button>
                    <span className="createInfo">
                        If you don't have invite then create &nbsp;
                        <a href="" className="createNewBtn" onClick={createNewRoom}>New Room</a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>Built with ❤️ by&nbsp; <a href="https://www.linkedin.com/in/satyajit-sahoo-28052001/"> Satyajit Sahoo </a></h4>
            </footer>
        </div>
    )
}

export default Home