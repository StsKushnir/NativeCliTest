import { ScaledSheet } from 'react-native-size-matters';

export const s = ScaledSheet.create({
  container: {
    width: "100%",
  },
  headerWrap: {
    width: "100%",
    height: '90@vs',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
  },
  loginWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  sign: {
    marginBottom: 0,
    paddingVertical: '10@vs',
    paddingRight: '11@ms',
    borderColor: "#ccc",
    borderRightWidth: 1,
  },
  signText: {
    fontFamily: "SourceSansPro-Regular",
    fontSize: '16@ms',
  },
  login: {
    paddingVertical: '10@vs',
    paddingLeft: '10@ms',
  },
  loginText: {
    fontFamily: "SourceSansPro-Regular",
    fontSize: '16@ms',
  },
  account: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconAccount: {
    width: '35@ms',
    height: '35@ms',
  },
  accountText: {
    marginLeft: '10@ms',
  },
  dropdownMenu: {
    position: 'absolute',
    right: 0,
    top: '63@vs',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    elevation: 5,
    zIndex: 2,
  },
  menuItem: {
    padding: '5@ms',
  },
  menuItemText: {
    fontSize: '14@ms',
    color: '#000',
  },
});
