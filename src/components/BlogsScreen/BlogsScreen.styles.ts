import { ScaledSheet } from 'react-native-size-matters';

export const s = ScaledSheet.create({
  container: {
    flex: 1,
    paddingTop: '40@vs',
    paddingHorizontal: '20@ms',
    paddingBottom: '20@vs',
    flexDirection: "column",
    alignItems: "center",
  },
  list: {
    width: '310@ms',
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: '30@ms',
    lineHeight: '40@ms',
    letterSpacing: '-1.5@ms',
    color: '#1D1D1D',
    marginBottom: '10@vs',
  },
  card: {
    width: '100%',
    marginVertical: '10@vs',
    padding: '10@ms',
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
    height: '150@vs',
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
});
