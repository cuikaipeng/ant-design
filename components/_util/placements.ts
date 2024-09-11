import type { AlignType, BuildInPlacements } from '@rc-component/trigger';

import { getArrowOffsetToken } from '../style/placementArrow';

export interface AdjustOverflow {
  adjustX?: 0 | 1;
  adjustY?: 0 | 1;
}

export interface PlacementsConfig {
  arrowWidth: number;
  arrowPointAtCenter?: boolean;
  autoAdjustOverflow?: boolean | AdjustOverflow;
  offset: number;
  borderRadius: number;
  visibleFirst?: boolean;
}

export function getOverflowOptions(
  placement: string,
  arrowOffset: ReturnType<typeof getArrowOffsetToken>,
  arrowWidth: number,
  autoAdjustOverflow?: boolean | AdjustOverflow,
) {
  if (autoAdjustOverflow === false) {
    return {
      adjustX: false,
      adjustY: false,
    };
  }

  const overflow =
    autoAdjustOverflow && typeof autoAdjustOverflow === 'object' ? autoAdjustOverflow : {};

  const baseOverflow: AlignType['overflow'] = {};

  if (placement === 'top' || placement === 'bottom') {
    baseOverflow.shiftX = arrowOffset.arrowOffsetHorizontal * 2 + arrowWidth;
    baseOverflow.shiftY = true;
    baseOverflow.adjustY = true;
  } else if (placement === 'left' || placement === 'right') {
    baseOverflow.shiftY = arrowOffset.arrowOffsetVertical * 2 + arrowWidth;
    baseOverflow.shiftX = true;
    baseOverflow.adjustX = true;
  }

  const mergedOverflow = {
    ...baseOverflow,
    ...overflow,
  };

  // Support auto shift
  if (!mergedOverflow.shiftX) {
    mergedOverflow.adjustX = true;
  }
  if (!mergedOverflow.shiftY) {
    mergedOverflow.adjustY = true;
  }

  return mergedOverflow;
}

type PlacementType = keyof BuildInPlacements;

const PlacementAlignMap: BuildInPlacements = {
  left: {
    points: ['cr', 'cl'],
  },
  right: {
    points: ['cl', 'cr'],
  },
  top: {
    points: ['bc', 'tc'],
  },
  bottom: {
    points: ['tc', 'bc'],
  },
  topLeft: {
    points: ['bl', 'tl'],
  },
  leftTop: {
    points: ['tr', 'tl'],
  },
  topRight: {
    points: ['br', 'tr'],
  },
  rightTop: {
    points: ['tl', 'tr'],
  },
  bottomRight: {
    points: ['tr', 'br'],
  },
  rightBottom: {
    points: ['bl', 'br'],
  },
  bottomLeft: {
    points: ['tl', 'bl'],
  },
  leftBottom: {
    points: ['br', 'bl'],
  },
};

const ArrowCenterPlacementAlignMap: BuildInPlacements = {
  topLeft: {
    points: ['bl', 'tc'],
  },
  leftTop: {
    points: ['tr', 'cl'],
  },
  topRight: {
    points: ['br', 'tc'],
  },
  rightTop: {
    points: ['tl', 'cr'],
  },
  bottomRight: {
    points: ['tr', 'bc'],
  },
  rightBottom: {
    points: ['bl', 'cr'],
  },
  bottomLeft: {
    points: ['tl', 'bc'],
  },
  leftBottom: {
    points: ['br', 'cl'],
  },
};

const DisableAutoArrowList: Set<keyof BuildInPlacements> = new Set([
  'topLeft',
  'topRight',
  'bottomLeft',
  'bottomRight',
  'leftTop',
  'leftBottom',
  'rightTop',
  'rightBottom',
]);

export default function getPlacements(config: PlacementsConfig) {
  const { arrowWidth, autoAdjustOverflow, arrowPointAtCenter, offset, borderRadius, visibleFirst } =
    config;
  const halfArrowWidth = arrowWidth / 2;

  const placementMap: BuildInPlacements = {};

  Object.keys(PlacementAlignMap).forEach((key: PlacementType) => {
    const template =
      (arrowPointAtCenter && ArrowCenterPlacementAlignMap[key]) || PlacementAlignMap[key];

    const placementInfo = {
      ...template,
      offset: [0, 0],
      dynamicInset: true,
    };
    placementMap[key] = placementInfo;

    // Disable autoArrow since design is fixed position
    if (DisableAutoArrowList.has(key)) {
      placementInfo.autoArrow = false;
    }

    if (key.startsWith('top')) {
      placementInfo.offset = [0, -halfArrowWidth - offset];
    } else if (key.startsWith('bottom')) {
      placementInfo.offset = [0, halfArrowWidth + offset];
    } else if (key.startsWith('left')) {
      placementInfo.offset = [-halfArrowWidth - offset, 0];
    } else if (key.startsWith('right')) {
      placementInfo.offset = [halfArrowWidth + offset, 0];
    }

    // Dynamic offset
    const arrowOffset = getArrowOffsetToken({
      contentRadius: borderRadius,
      limitVerticalRadius: true,
    });

    if (arrowPointAtCenter) {
      if (key === 'topLeft' || key === 'bottomLeft') {
        placementInfo.offset[0] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
      } else if (key === 'topRight' || key === 'bottomRight') {
        placementInfo.offset[0] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
      } else if (key === 'leftTop' || key === 'rightTop') {
        placementInfo.offset[1] = -arrowOffset.arrowOffsetHorizontal * 2 + halfArrowWidth;
      } else if (key === 'leftBottom' || key === 'rightBottom') {
        placementInfo.offset[1] = arrowOffset.arrowOffsetHorizontal * 2 - halfArrowWidth;
      }
    }

    // Overflow
    placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);

    // VisibleFirst
    if (visibleFirst) {
      placementInfo.htmlRegion = 'visibleFirst';
    }
  });

  return placementMap;
}
