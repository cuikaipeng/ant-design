/**
 * Fallback of IE.
 * Safe to remove.
 */

// Style as inline component
import { genSubStyleComponent } from '../../theme/internal';
import type { GenerateStyle } from '../../theme/internal';
import { prepareToken } from '.';
import type { FormToken } from '.';

// ============================= Fallback =============================
const genFallbackStyle: GenerateStyle<FormToken> = (token) => {
  const { formItemCls } = token;

  return {
    '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)': {
      // Fallback for IE, safe to remove we not support it anymore
      [`${formItemCls}-control`]: {
        display: 'flex',
      },
    },
  };
};

// ============================== Export ==============================
export default genSubStyleComponent(['Form', 'item-item'], (token, { rootPrefixCls }) => {
  const formToken = prepareToken(token, rootPrefixCls);

  return [genFallbackStyle(formToken)];
});
