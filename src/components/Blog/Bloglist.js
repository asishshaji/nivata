import React, { Component } from 'react';
import { List, Avatar,Icon } from 'antd';

import './blog.css';


const URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@LanceUlanoff';


export default class BlogList extends Component {


    constructor(props){
        super(props);
        this.state = {
          posts:[]
        };
    }

    componentDidMount(){
      fetch(URL)
          .then((res) => res.json())
              .then((data) => {
                      const items = data.items;
                      const posts = items.filter(item => item.categories.length > 0);
                      const post_arr = [];
                      for (let i = 0; i < 3; i++) {
                        post_arr.push(posts[i]);
                      }
                      this.setState({posts:post_arr});
                     
                  });
    }

  render() {
    return (
      <div className="blogdiv">
        <List
            itemLayout="horizontal"
            dataSource={this.state.posts}
            bordered = "true" 
            style={{padding:'10px',marginBottom:'10px'}}
            renderItem={item => (
            <List.Item style={{padding:'10px',marginBottom:'10px'}}>
                <List.Item.Meta
                avatar={ <Avatar src={item.thumbnail} size = {124} shape ="square"/>}
                title={<a href={item.link} target="_blank" rel="noopener noreferrer" className="title-a">{item.title}</a>}
                description={<span style={{fontWeight:600}}>Published on {item.pubDate.split(" ")[0]} </span> }
                />
            
            
             </List.Item>
              )}
        >
        <a href="medium.com" target="_blank" rel="noopener noreferrer" className="loadmore">Click here to read more!!<Icon type="smile" theme="filled" /> </a>
        </List>
      </div>
    )
  }
}
