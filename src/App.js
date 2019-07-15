import React from 'react';
import './App.css';
import { Layout, Menu, Input, List, Button } from 'antd';

const { Header, Content } = Layout;
const { Search } = Input;

function App() {
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
            onSearch={value => console.log(value)}
          />
        </div>
        <List
          size="large"
          bordered
          dataSource={['test']}
          renderItem={item => (
            <List.Item>
              <div style={{ display: 'flex', flex: 1 }}>
                <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                  {item}
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                  }}
                >
                  <Button type="primary" style={{ marginRight: 15 }}>
                    Edit
                  </Button>
                  <Button type="danger">Delete</Button>
                </div>
              </div>
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
}

export default App;
