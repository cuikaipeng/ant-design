import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import type { Dayjs } from 'dayjs';
import React from 'react';

const onChange: DatePickerProps<Dayjs[]>['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const App: React.FC = () => <DatePicker onChange={onChange} needConfirm />;

export default App;
