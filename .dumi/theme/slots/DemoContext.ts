import { createContext } from 'react';

export interface DemoContextProps {
  showDebug?: boolean;
  codeType?: string;
}

const DemoContext = createContext<{
  showDebug?: boolean;
  setShowDebug?: (showDebug: boolean) => void;
  codeType?: string;
  setCodeType?: (codeType: string) => void;
}>({});

export default DemoContext;
