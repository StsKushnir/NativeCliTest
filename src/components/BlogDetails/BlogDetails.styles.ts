import { ScaledSheet } from "react-native-size-matters";

export const s = ScaledSheet.create({
  background:{
      flex: 1,
      resizeMode: "cover",
  },
  container: {
    position: 'relative',
    flex: 1,
    paddingTop: "40@vs",
    paddingHorizontal: "20@ms",
    paddingBottom: "20@vs",
    flexDirection: "column",
    alignItems: "center",
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: "40@ms",
    marginBottom: "16@ms",
    padding: "10@ms",
    backgroundColor: "#f0f0f0",
    borderRadius: "5@ms",
  },
  backButtonText: {
    color: "#434a4a",
    textAlign: "center",
    fontSize: "16@ms",
  },
  backImg: {
    width: 20,
    height: 15,
  },
  title: {
    fontFamily: "Poppins",
    textAlign: "center",
    fontWeight: "700",
    fontSize: "25@ms",
    lineHeight: "40@ms",
    letterSpacing: "-1.5@ms",
    color: "#1D1D1D",
    marginTop: "30@vs",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: "10@s",
    marginTop: "20@vs",
  },
  desc: {
    marginTop: "20@vs",
    fontFamily: "Source Sans 3",
    fontWeight: "600",
    fontSize: "14@s",
    lineHeight: "19@s",

    color: "#000000",
  },
  blogContent: {
    marginTop: "20@vs",
    fontFamily: "Source Sans 3",
    fontWeight: "400",
    fontSize: "14@s",
    lineHeight: "20@s",
    letterSpacing: "-0.2@s",
  },
  date: {
    width: "100%",
    marginTop: "20@vs",
    textAlign: "left",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14@s",
    lineHeight: "16@s",
    color: "#434a4a",
  },

  // cardTitle: {
  //   fontWeight: "bold",
  // },
  // image: {
  //   width: "100%",
  //   height: '150@vs',
  //   borderRadius: 8,
  //   marginTop: '10@vs',
  // },
  // addInfo: {
  //   marginTop: '10@vs',
  // },
  // presAddInfo: {
  //   color: '#046508',
  //   textDecorationLine: 'underline',
  // },
});
