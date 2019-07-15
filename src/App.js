import React from 'react';
import './App.css';
import { Layout, Menu, Input } from 'antd';
import TodoList from './list';

const { Header, Content } = Layout;
const { Search } = Input;

// Stateful Component
class App extends React.Component {
  state = {
    inputBox: {
      hello: 'world',
      search: ''
    },
    list: []
  };

  onChanged = e => {
    this.setState({
      inputBox: {
        ...this.state.inputBox,
        search: e.target.value
      }
    });
  };

  onSubmit = () => {
    this.setState({
      list: [...this.state.list, this.state.inputBox]
    });
  };

  onPressEnter = value => {
    this.setState({
      list: [...this.state.list, value]
    });
  };

  onDelete = index => {
    this.setState({
      list: this.state.list.filter((_, idx) => idx !== index)
    });
  };

  render() {
    return (
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Todo List</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ background: '#fff', padding: '25px', margin: 50 }}>
          <div style={{ padding: '24px 0' }}>
            <Search
              placeholder="input search text"
              enterButton="Search"
              size="large"
              value={this.state.inputBox.search}
              onChange={this.onChanged}
              onSearch={this.onPressEnter}
            />
          </div>
          <TodoList list={this.state.list} onDelete={this.onDelete} />
        </Content>
      </Layout>
    );
  }
}

export default App;
