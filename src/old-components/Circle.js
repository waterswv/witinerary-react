import React, {Component} from 'react';

class ClearButton extends React.Component {
    constructor( props, context ) {
        super( props, context );

        this.handleClearMessages = this.handleClearMessages.bind( this );
    }
    handleClearMessages(e) {
    	this.props.clearMessages(e);
    }
    render() {
        let button = <button id={this.props.btnid} onClick={this.handleClearMessages} >Clear</button>;

        return <div>{button}</div>;
    }
}


const PostMessageForm = props => {
    let nameInput, messageInput;

    const handleSubmit = event => {
        event.preventDefault();
        props.appendChatMessage( nameInput.value, messageInput.value );
        nameInput.value = '';
        messageInput.value = '';
    }

    return (
      <form onSubmit={handleSubmit}>
        <input type="text"
          ref={name => nameInput = name}
          placeholder="Name" />
        <input type="text"
          ref={message => messageInput = message}
          placeholder="Message" />
        <input type="submit" value="Send" />
      </form>
    );
}

class Message extends React.Component {
    render() {
        let now = new Date( this.props.timestamp );
        let hhmmss = now.toISOString().substr(11, 8);
        return (
            <div className="message">
                <span className="message-time">{hhmmss}</span>&nbsp;
                <strong className="message-owner">{this.props.owner}</strong>&nbsp;
                <span className="message-text">{this.props.text}</span>
                <ClearButton
                    clearMessages={this.props.clearMessages}
                    id={this.props.btnid}
                    />
            </div>
        );
    }
}

class MessageList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.messages.map( message =>
                        <Message timestamp={message.timestamp}
                                 owner={message.owner}
                                 text={message.text}
                                 key={message.id}
                                 clearMessages={this.props.clearMessages}
                                 id={this.props.btnid}
                                 />
                      )
                }
            </div>
        );
    }
}

class ChatBox extends React.Component {
    constructor( props, context ) {
        super( props, context );
        this.state = {
            messages: []
        };

        this.appendChatMessage = this.appendChatMessage.bind( this );
        this.clearMessages = this.clearMessages.bind( this );
    }
    appendChatMessage( owner, text ) {
        let newMessage = {
            id: this.state.messages.length + 1,
            timestamp: new Date().getTime(),
            owner: owner,
            text: text
        };
        this.setState({ messages: [ ...this.state.messages, newMessage ] });
    }
    clearMessages(e) {

        this.setState( (prevState) => {
          const newState = Object.assign({}, prevState);
          console.log(e.persist());
          newState.messages = newState.messages.filter( (message) => {
            if(message.id !== message.id){
              return message;
            }
            return
          });
          return newState;
        }
      );
    }
    render() {
        let isDisabled = this.state.messages.length === 0;
        return (
            <div>
                <MessageList
                messages={this.state.messages}
                clearMessages={this.clearMessages}
                id={this.state.messages.length}
                />
                <PostMessageForm appendChatMessage={this.appendChatMessage} />

            </div>
        );
    }
}




export default ChatBox;
