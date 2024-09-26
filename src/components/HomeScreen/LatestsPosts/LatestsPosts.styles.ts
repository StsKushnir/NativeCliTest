import { ScaledSheet } from 'react-native-size-matters';

export const s = ScaledSheet.create({
  title: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: '30@ms',
    lineHeight: '40@ms',
    letterSpacing: '-1.5@ms',
    color: '#1D1D1D',
    marginTop: '40@vs',
    marginBottom: '10@vs',
  },
  card: {
    width: '100%',
    height: '250@vs',
    marginVertical: '10@vs',
    padding: '15@ms',
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  cardTitle: {
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: '80%',
    borderRadius: 8,
    marginTop: '10@vs',
  },
  addInfo: {
    marginTop: '10@vs',
  },
  presAddInfo: {
    color: '#046508',
    textDecorationLine: 'underline',
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: '10@vs',
  },
  paginationDot: {
    width: '8@ms',
    height: '8@ms',
    borderRadius: '4@ms',
    backgroundColor: "#000",
    marginHorizontal: '4@ms',
  },
});
