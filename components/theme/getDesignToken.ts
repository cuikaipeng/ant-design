import { createTheme, getComputedToken } from '@ant-design/cssinjs';

import defaultDerivative from './themes/default';
import seedToken from './themes/seed';
import formatToken from './util/alias';
import type { ThemeConfig } from '../config-provider/context';
import type { AliasToken } from './interface';

const getDesignToken = (config?: ThemeConfig): AliasToken => {
  const theme = config?.algorithm ? createTheme(config.algorithm) : createTheme(defaultDerivative);
  const mergedToken = {
    ...seedToken,
    ...config?.token,
  };
  return getComputedToken(mergedToken as any, { override: config?.token }, theme, formatToken);
};

export default getDesignToken;
