import type { GenerateStyle } from '../../theme/internal';
import type { UploadToken } from '.';

// =========================== Motion ===========================
const genRtlStyle: GenerateStyle<UploadToken> = (token) => {
  const { componentCls } = token;

  return {
    [`${componentCls}-rtl`]: {
      direction: 'rtl',
    },
  };
};

export default genRtlStyle;
