import { TreeNode } from 'rc-tree';
import type RcTree from 'rc-tree';
import type { BasicDataNode } from 'rc-tree';
import type { DataNode } from 'rc-tree/lib/interface';

import DirectoryTree from './DirectoryTree';
import TreePure from './Tree';
import type { TreeProps } from './Tree';

export type {
  DirectoryTreeProps,
  ExpandAction as DirectoryTreeExpandAction,
} from './DirectoryTree';
export type {
  AntdTreeNodeAttribute,
  AntTreeNode,
  AntTreeNodeCheckedEvent,
  AntTreeNodeExpandedEvent,
  AntTreeNodeMouseEvent,
  AntTreeNodeProps,
  AntTreeNodeSelectedEvent,
  TreeProps,
} from './Tree';
export type { EventDataNode } from 'rc-tree/lib/interface';
export type { BasicDataNode, DataNode };

type CompoundedComponent = (<T extends BasicDataNode | DataNode = DataNode>(
  props: React.PropsWithChildren<TreeProps<T>> & React.RefAttributes<RcTree>,
) => React.ReactElement) & {
  TreeNode: typeof TreeNode;
  DirectoryTree: typeof DirectoryTree;
};

const Tree = TreePure as unknown as CompoundedComponent;
Tree.DirectoryTree = DirectoryTree;
Tree.TreeNode = TreeNode;

export default Tree;
