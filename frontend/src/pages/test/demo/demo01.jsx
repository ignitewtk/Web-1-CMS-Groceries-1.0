import './demo01.css';
import React from "react"


class ListItem extends React.Component{
  constructor(props) {
    super(props)
    
    this.username = props.username
    this.content = props.username + " says hello."
    this.date = new Date()

    this.updateContent = this.updateContent.bind(this)
  }

  updateContent() {
    this.props.updateContent({
      messageContent: {
        username : this.username,
        content : this.content,
        date: this.date
      }
    })
  }

  render() {
    return (
      <div className='message-list-view-item' 
        style={{margin: "30px 40px"}}
        onClick={this.updateContent}>

        <div> Profile picture </div>
        <div> {this.username} </div>
        {/* <div> {this.date} </div>  */}
      </div>
    )
  }
}


class MessageList extends React.Component {
  constructor(props) {
    super(props)
    this.updateContent = this.props.listItemClick.bind(this)
  }

  render() {
    return (
      <div className='Message-list' >
        <ListItem username="Abort" 
          updateContent={this.updateContent} 
          />
        <ListItem username="Jims Bondy" 
          updateContent={this.updateContent} 
          />
      </div>
    )
  }
}



class ItemContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Message-content'> 
        <div> Message Content </div>
        <div> Username: { this.props.messageDetails.username }</div> 
        <div> content: { this.props.messageDetails.content }</div> 
      </div>
    )
  }

}




class EmailItem extends React.Component {
  constructor(props) {
    super(props)
    this.values = props.values
    // this.values = props.emailDetails
    // console.log("Email Item In  ", this.values)
  }

 
  render() {
    return (
      <li>
        <p> { this.values }  +++  { this.values }</p>
      </li>
    )
  }
}

class EmailList extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.dataList)
    // this.listKeys = [1, 2, 3]
    this.state = {
      dataList : []
    }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  // updateList(props) {
  //   if (props.dataList.length === 0) {
  //     return []
  //   } else {
  //     return props.dataList
  //   }
  // }

  handleItemClick(e) {
    console.log("Click Item", e.target)
  }

  render() {
    console.log("ididid", this.props.dataList[0].id)
    const emailList = this.props.dataList.map((dataListItem) => 
      // <li key={dataListItem.sender}> {dataListItem}</li>
      <EmailItem 
        key={dataListItem} values={dataListItem}
      />
      )
    return (
      // <div  className='Email-list' > 
      //   {this.props.dataList[0].sender} 
      // </div>
      <ul className='Email-list' onClick={this.handleItemClick}>
        {emailList}
      </ul>
    )
  }
}


class EmailContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Email-content'> 
        <div> Email Content </div>
        {/* <div> Sender: { this.props.messageDetails.username }</div> 
        <div> content: { this.props.messageDetails.content }</div>  */}
      </div>
    )
  }

}



class Demo01 extends React.Component {
  constructor(props) {
    super(props)
    this.data_list = props.data_list

    this.state = {
      messageContent: {
        username : props.username,
        content : props.content,
        // date: props.date
      },
    }
    this.listItemClick = this.listItemClick.bind(this)
    this.dataList = [
        "sender 1",
        "sender 2",
        "sender 3"
    ]

    // this.dataList = [
    //   {
    //     sender: "sender 1",
    //     content: "content 1"
    //   },
    //   {
    //     sender: "sender 2",
    //     content: "content 2"
    //   },
    //   {
    //     sender: "sender 3",
    //     content: "content 3"
    //   }
    // ]
  }
  

  listItemClick(props) {
    this.setState(props)
  }

  render() {
    return (
    <div>
      <header>
        <h1> Header </h1>
        {/* <Fn_component name="Function component" /> */}
        <h2>  {new Date().toLocaleTimeString()}  </h2>
        {/* <button onClick={bt_click()}> Click </button> */}
      </header>


      <div className='Email-list-view' style={{backgroundColor:"lightgrey"}}>
      <div> Email List </div>
      <div> Filter and Search Bar </div>
        <EmailList
          dataList = {this.dataList}
            // listItemClick={this.listItemClick}
            />
        <EmailContent
          // messageDetails={this.state.messageContent}
          />
      </div>
      
      <div className='message-list-view' style={{backgroundColor:"grey"}}>
        <div> Message List </div>
        <MessageList
          listItemClick={this.listItemClick}/>
        <ItemContent
          messageDetails={this.state.messageContent}/>
      </div>
    </div>
  );}
}

export default Demo01;
