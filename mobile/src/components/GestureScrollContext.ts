import { createContext } from 'react';
import type { NativeGesture } from 'react-native-gesture-handler';
/** Child wheel gestures must block scrolling while a word is being traced. */
export const GestureScrollContext = createContext<NativeGesture | null>(null);
