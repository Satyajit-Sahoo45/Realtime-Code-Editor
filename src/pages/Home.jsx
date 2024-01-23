import React from "react"

const Home = () => {
    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img className="homePageLogo" src="/logo.svg" alt="Logo" />
                <h4 className="mainLabel">Paste Invitation ROOM ID</h4>
                <div className="inputGroup">
                    <input type="text" className="inputBox" placeholder="ROOM ID" />
                    <input type="text" className="inputBox" placeholder="USER NAME" />
                    <button className="btn joinBtn">Join</button>
                    <span className="createInfo">
                        If you don't have invite then create &nbsp;
                        <a href="" className="createNewBtn">New Room</a>
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