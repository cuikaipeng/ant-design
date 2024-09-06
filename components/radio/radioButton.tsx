import * as React from 'react';

import { ConfigContext } from '../config-provider';
import { RadioOptionTypeContextProvider } from './context';
import Radio from './radio';
import type { AbstractCheckboxProps } from '../checkbox/Checkbox';
import type { RadioChangeEvent, RadioRef } from './interface';

export type RadioButtonProps = AbstractCheckboxProps<RadioChangeEvent>;

const RadioButton: React.ForwardRefRenderFunction<RadioRef, RadioButtonProps> = (props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigContext);

  const { prefixCls: customizePrefixCls, ...radioProps } = props;
  const prefixCls = getPrefixCls('radio', customizePrefixCls);

  return (
    <RadioOptionTypeContextProvider value="button">
      <Radio prefixCls={prefixCls} {...radioProps} type="radio" ref={ref} />
    </RadioOptionTypeContextProvider>
  );
};

export default React.forwardRef<RadioRef, RadioButtonProps>(RadioButton);
