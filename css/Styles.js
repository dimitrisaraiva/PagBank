import { PermissionsAndroid, StyleSheet } from "react-native";

export const global = StyleSheet.create({
  header: {
    backgroundColor: "#0fd60f",
    height: "55%",
  },
  saldoimg: {
    left: 370,
    top: 70,
  },
  setaimg: {
    left: 160,
    top: -55,
    width: 20,
    height: 20,
  },
  sinoimg: {
    left: 370,
    top: -30,
    width: 25,
    height: 25,
  },
  txtpagbank: {
    fontSize: 30,
    top: 28,
    left: 20,
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  txtsaldo: {
    left: 20,
    fontSize: 20,
    top: -40,
    color: "white",
  },
  txtdinheiro: {
    color: "white",
    fontSize: 35,
    left: 20,
    top: -45,
    fontWeight: "bold",
  },
  txtbloqueado: {
    left: 20,
    fontSize: 20,
    top: -20,
    color: "white",
  },
  txtsaldobloqueado: {
    color: "white",
    left: 20,
    fontSize: 20,
    top: -20,
    fontWeight: "bold",
  },
  txtreceber: {
    left: 200,
    top: -73,
    color: "white",
    fontSize: 20,
  },
  txtsaldoreceber: {
    left: 200,
    top: -73,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  helpimg: {
    left: 370,
    top: -110,
    width: 25,
    height: 25,
  },
  cashback: {
    height: 50,
    flexDirection: "row",
    backgroundColor: "#07c308",
    top: -60,
  },
  txtcashback: {
    color: "white",
    top: 15,
    left: 20,
  },
  help1img: {
    left: 140,
    top: 10,
    width: 25,
    height: 25,
  },
  content: {
    backgroundColor: "#f4f4f7",
    top: -502,
    flexDirection: "row",
    height: 1000,
  },
  txtduvida: {
    left: 20,
    top: 20,
    fontSize: 15,
  },
  txtbeneficios: {
    left: 280,
    color: "blue",
    fontSize: 15,
  },
  recargacartao: {
    backgroundColor: "white",
    width: 180,
    height: 120,
    padding: 15,
    top: 70,
    right: 110,
  },
  cartaoimg: {
    left: 110,
  },
  txtcartao:{
      fontSize:20,
      left:6,
      color: "grey",
  },
  tranferencias: {
    backgroundColor: "white",
    width: 180,
    height: 120,
    padding: 15,
    left:80,
    top:-50,
  },
  transferenciaimg:{
      left:120
  },
  txttransferencia:{
      fontSize:20,
      left:6,
      color: "grey",
  },
  deposito: {
    backgroundColor: "white",
    width: 180,
    height: 120,
    padding: 15,
    top:200,
    right:290
  },
  depositoimg:{
    left:120
  },
  txtdeposito:{
    fontSize:20,
    left:6,
    color: "grey",
  },
  chat: {
    backgroundColor: "white",
    width: 180,
    height: 120,
    padding: 15,
    top:80,
    right:100,
  },
  chatimg:{
      left:120
  },

  txtchat:{
    fontSize:20,
    left:6,
    color: "grey",
  },
  boleto: {
    backgroundColor: "white",
    width: 180,
    height: 120,
    padding: 15,
    top:330,
    right:470
  },
  pix: {
    backgroundColor: "white",
    width: 180,
    height: 120,
    padding: 15,
    top:330,
    right:460
  },
  footer:{
    flexDirection:"row",
     backgroundColor:"white",
    height:50,
    position:"absolute",
    bottom:-60


 },
 home:{
     backgroundColor:"f4f4f7",
     paddingLeft:5
 },
 imghome:{
     marginLeft:20
 },
 txtextrato:{
     marginLeft:11
 },
 txthome:{
     left:16
 }

});
