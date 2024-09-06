import { TimePicker } from 'antd';
import type { TimePickerProps } from 'antd';
import React from 'react';

const onChange: TimePickerProps['onChange'] = (time, timeString) => {
  console.log(time, timeString);
};

const App: React.FC = () => <TimePicker onChange={onChange} needConfirm />;

export default App;
