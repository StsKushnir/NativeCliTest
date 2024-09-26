import { ScaledSheet } from "react-native-size-matters";

export const s = ScaledSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    flexDirection: 'column',
    paddingTop: '80@vs', 
    paddingHorizontal: '20@ms', 
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '32@ms', 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20@vs',
  },
  closeBtn: {
    position: 'absolute',
    right: '20@ms',
    width: '24@ms',
    height: '24@ms',
    top: '40@vs',
    borderRadius: '100@ms',
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    width: '15@ms',
    height: '15@ms',
  },
  input: {
    height: '50@vs',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: '15@vs',
    paddingHorizontal: '10@ms',
    fontSize: '16@ms',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: '15@vs',
    borderRadius: '24@ms',
    alignItems: 'center',
    width: '120@ms',
    marginTop: '40@vs',
  },
  buttonText: {
    color: '#fff',
    fontSize: '18@ms',
    fontWeight: 'bold',
  },
  loginTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50@vs',
  },
  loginText: {
    fontSize: '16@ms',
  },
  loginButton: {
    fontSize: '16@ms',
    fontWeight: 'semibold',
    color: '#007bff',
    marginLeft: '10@ms',
    textDecorationLine: 'underline',
  },
});
