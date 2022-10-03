import React, {useEffect, useState, Component} from 'react'
import {Layout, Avatar, Divider, List, Skeleton} from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'

// import './mainboard.less'
import './mainboard.css'

const data = [
    {
        title: "AAA",
    },
    {
        title: "AAA",
    },
    {
        title: "AAA",
    },
    {
        title: "AAA",
    },
    {
        title: "AAA",
    },
    {
        title: "BBB",
    },
    {
        title: "BBB",
    },
    {
        title: "BBB",
    },
    {
        title: "BBB",
    },
    {
        title: "BBB",
    },
    {
        title: "CCC",
    },
    {
        title: "CCC",
    },
    {
        title: "CCC",
    },
    {
        title: "CCC",
    },
    {
        title: "CCC",
    },
]


// const { Header, Content, Footer, Sider} = Layout


export default class MainBoard extends Component {

    constructor(props) {
        super(props)

        this.stateListItemFocus = {isMouseOver: false}
    }

    // loadMoreData = () => {

    //     fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
    //         .then((res) => res.json())
    //         .then((body) => {
    //             setData([...data, ...body.results])
    //             setLoading(false)
    //         })
    //         .catch(() => {
    //             setLoading(false)
    //         })
    // }

    messageFocus = (x) => {
        this.setState({isMouseOver: true})
        console.log(this.stateListItemFocus)
    }
    messageNotFocus = (x) => {
        this.setState({isMouseOver: false})
        console.log(this.stateListItemFocus)
    }

    render () {
       
        const idx = [1, 2, 3]
		const messageData = idx.map((i)=> (
		    {
		        'id': 'i',
		        'sender': `sender${i}`,
		        'title': `title`,
		        'content': `content`,
		        'receiver': `receiver`,
		        'attach': `attach`,
		    }
		))
		console.log(messageData)
		// const messageData = [1, 2, 3, 4, 5]

        return (
            <div className="main">
                <div className='main-header'>
                    <div className='main-header-logo'> Main Board - Logo</div>
                    <div className='main-header-profile'> Login / Username / Log out </div>
                    <div className='main-header-settings'> Settings </div>
                </div>
                <div 
                    className='main-message'>
                    <div className='main-message-list'>
                        <InfiniteScroll 
                            dataLength={data.length}
                            // next={loadMoreData}
                            >
                            <List
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item className='main-message-list-item' onMouseOver={this.messageFocus} onMouseOut={this.messageNotFocus}>
                                        {/* <Link to='/...'></Link> */}
                                        <List.Item.Meta 
                                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                            title={<a href="https://ant.design">{item.title}</a>}
                                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                            
                                    />
                                    </List.Item>)}
                            />
                        </InfiniteScroll>
                        
                    </div>
                    <div 
                        className='main-message-content'
                        > 
                        List term content. List term content. 
                        List term content. List term content. 
                        List term content. List term content. 
                        List term content. List term content. 
                        List term content. List term content. 
                        List term content. List term content. 
                    </div>
                </div>
            </div>
        )
    }
}