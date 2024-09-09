import * as React from 'react';

import type { ButtonProps } from '../button';
import Button from '../button';

const PickerButton: React.FC<Readonly<ButtonProps>> = (props) => (
  <Button size="small" type="primary" {...props} />
);

export default PickerButton;
