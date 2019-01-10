import React from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class CustomMenu extends React.Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Icon type="home" style={{ fontSize: '24px', color: '#08c' }}/>
        </Menu.Item>
        <Menu.Item key="blog">
         <Icon type="read" />
        </Menu.Item>
      </Menu>
    );
  }
}

export default CustomMenu;