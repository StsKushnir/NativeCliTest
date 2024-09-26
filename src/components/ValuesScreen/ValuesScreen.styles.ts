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
    flexGrow: 1,
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
    margin: '10@ms',
    padding: '10@ms',
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  image: {
    width: "100%",
    height: '150@vs',
    borderRadius: 8,
  },
  cardTitle: {
    fontWeight: "bold",
    marginTop: '10@vs',
  },
  description: {
    marginTop: '5@vs',
    color: "gray",
  },
});
