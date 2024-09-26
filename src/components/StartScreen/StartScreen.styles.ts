import { ScaledSheet } from 'react-native-size-matters';

export const s = ScaledSheet.create({
  container: {
    width: "100%",
    paddingTop: '40@ms',
    paddingHorizontal: '40@ms',
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  startWrap: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    marginTop: '30@ms',
  },
  welcomeText: {
    fontSize: '24@ms',
    fontWeight: "bold",
    marginTop: '20@vs',
  },
  descriptionText: {
    fontSize: '16@ms',
    textAlign: "center",
    marginTop: '10@vs',
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loginBts: {
    marginTop: '60@vs',
    marginBottom: '20@vs',
    justifyContent: "center",
    flexDirection: "row",
    gap: '50@ms',
  },
  button: {
    backgroundColor: "black",
    padding: '10@ms',
    borderRadius: '10@ms',
    width: '120@ms',
    alignItems: "center",
    justifyContent: 'center',
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: '16@ms',
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
  guestBts: {
    marginTop: '40@vs',
  }
});
