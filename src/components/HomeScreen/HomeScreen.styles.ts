import { ScaledSheet, verticalScale, scale } from "react-native-size-matters";

export const s = ScaledSheet.create({
  scrollcontainer: {
    flexGrow: 1, 
    paddingTop: verticalScale(40),
    paddingHorizontal: scale(20),
    paddingBottom: 20, 
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
});
