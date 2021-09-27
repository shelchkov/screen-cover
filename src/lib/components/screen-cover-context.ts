import { createContext, useContext } from "react";
import { noop } from "./utils";

export enum ScreenCoverStage {
  INIT = "INIT",
  START = "START",
  GO_UP = "GO_UP",
  UNCOVER = "UNCOVER"
}

export interface ScreenCoverContextI {
  showCover: (onCover?: () => void, onEnd?: () => void) => void
}

const defaultValue: ScreenCoverContextI = {
  showCover: noop,
}

export const ScreenCoverContext = createContext(defaultValue)

export const useScreenCover = () => useContext(ScreenCoverContext)
