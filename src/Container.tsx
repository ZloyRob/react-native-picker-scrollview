import React, { FC } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

interface IProps {
  wrapperHeight: number;
  style?: StyleProp<ViewStyle>;
}

const Container: FC<IProps> = ({ children, style, wrapperHeight }) => (
  <View
    style={[
      {
        height: wrapperHeight,
        overflow: "hidden",
        alignSelf: "center",
      },
      style,
    ]}
  >
    {children}
  </View>
);

export default Container;
