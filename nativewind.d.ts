// nativewind.d.ts
import { ViewProps } from "react-native";

declare module "react-native" {
  interface ViewProps {
    className?: string;
  }
}
