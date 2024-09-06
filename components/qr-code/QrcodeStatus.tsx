import React from 'react';
import { ReloadOutlined } from '@ant-design/icons';

import Button from '../button';
import Spin from '../spin';
import type { Locale } from '../locale';
import type { QRCodeProps, StatusRenderInfo } from './interface';

export interface QRcodeStatusProps {
  prefixCls: string;
  locale?: Locale['QRCode'];
  onRefresh?: QRCodeProps['onRefresh'];
  statusRender?: QRCodeProps['statusRender'];
  status: StatusRenderInfo['status'];
}

const defaultSpin = <Spin />;

export default function QRcodeStatus({
  prefixCls,
  locale,
  onRefresh,
  statusRender,
  status,
}: QRcodeStatusProps) {
  const defaultExpiredNode = (
    <>
      <p className={`${prefixCls}-expired`}>{locale?.expired}</p>
      {onRefresh && (
        <Button type="link" icon={<ReloadOutlined />} onClick={onRefresh}>
          {locale?.refresh}
        </Button>
      )}
    </>
  );

  const defaultScannedNode = <p className={`${prefixCls}-scanned`}>{locale?.scanned}</p>;

  const defaultNodes = {
    expired: defaultExpiredNode,
    loading: defaultSpin,
    scanned: defaultScannedNode,
  };

  const defaultStatusRender: QRCodeProps['statusRender'] = (info) => defaultNodes[info.status];

  const mergedStatusRender = statusRender ?? defaultStatusRender;

  return mergedStatusRender({
    status,
    locale,
  });
}
