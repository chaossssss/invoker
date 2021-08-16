antd组件默认英文
```
import React from 'react';
import { Button, DatePicker,ConfigProvider } from 'antd';

import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
export default class Antd extends React.Component {
  render() {
    return (
      <div>
        <Button>默认</Button>
        <Button type="primary">确认</Button>
        <ConfigProvider locale={zhCN}>
          <DatePicker></DatePicker>
        </ConfigProvider>
      </div>
    );
  }
}
```
要用到`ConfigProvider`组件