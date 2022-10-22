import { View, Text } from "react-native";
import colors from "./src/theme/colors";
import font from "./src/theme/fonts";

import FontAwesome from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: colors.primary, fontSize: font.size.xxl }}>
        Instagram
        <AntDesign name="home" size={25} />
      </Text>
    </View>
  );
}
