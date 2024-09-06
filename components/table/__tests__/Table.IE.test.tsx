import React from 'react';

import Table from '..';
import { render } from '../../../tests/utils';
import type { TableRef } from '..';

describe('Table.IE', () => {
  beforeAll(() => {
    window.Proxy = undefined as any;
    globalThis.Proxy = undefined as any;
  });

  it('support reference', () => {
    const tblRef = React.createRef<TableRef>();
    const { container } = render(<Table ref={tblRef} />);

    const wrapDom = container.querySelector('.ant-table-wrapper')!;

    expect(tblRef.current).toBe(wrapDom);
    expect(tblRef.current?.nativeElement).toBe(wrapDom);
  });
});
