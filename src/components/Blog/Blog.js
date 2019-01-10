import React, { Component } from 'react'
import {  Icon } from 'antd';
import List from './Bloglist';


export default class componentName extends Component {
  render() {
    return (
      <div style={{marginTop:'20px'}}>
          
          <h1 className="blog"><Icon type="read" />  Blog</h1>

          <div style={{marginTop:'10px',textAlign:'center',justifyContent:'center'}}>
              <List/>
          </div>
      </div>
    )
  }
}
