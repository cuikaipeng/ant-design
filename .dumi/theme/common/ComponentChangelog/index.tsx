import React from 'react';

import ComponentChangelog from './ComponentChangelog';
import type { ComponentChangelogProps } from './ComponentChangelog';

export default (props: ComponentChangelogProps) => (
  <React.Suspense fallback={null}>
    <ComponentChangelog {...props} />
  </React.Suspense>
);
