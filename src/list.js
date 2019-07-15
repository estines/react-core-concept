import React from 'react';
import { List, Button } from 'antd';

// Stateless Component
function TodoList(props) {
  return (
    <List
      size="large"
      bordered
      dataSource={props.list}
      renderItem={(item, index) => (
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
              <Button type="danger" onClick={() => props.onDelete(index)}>
                Delete
              </Button>
            </div>
          </div>
        </List.Item>
      )}
    />
  );
}

export default TodoList;
