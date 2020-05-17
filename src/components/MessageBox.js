import React, { Component } from "react";

class MessageBox extends Component {
    render() {
        return (
            <form>
                <textarea className="textarea" placeholder="Type a message" cols="100">

                </textarea>
            </form>
        )
    }
}

export default MessageBox; 