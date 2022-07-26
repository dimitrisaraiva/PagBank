import { Image, Text, View } from "react-native";
import { global } from "../../css/Styles.js";

export default function Header() {
  return (
    <View style={global.header}>
        <View style={global.title}>
      <Text style={global.txtpagbank}>PagBank</Text>
      <Image
        source={require("../../assets/olho.png")}
        style={global.saldoimg}
      />
      <Image source={require("../../assets/sino.png")} 
      style={global.sinoimg} />

      <Image source={require("../../assets/seta.png")} 
      style={global.setaimg} />

      <Text style={global.txtsaldo}>Saldo Disponível</Text>

      <Text style={global.txtdinheiro}>R$ 2.500,00</Text>

      <Text style={global.txtbloqueado}>Bloqueado</Text>

      <Text style={global.txtsaldobloqueado}>R$ 20,55</Text>

      <Text style={global.txtreceber}>A receber</Text>

      <Text style={global.txtsaldoreceber}>R$ 1.200,34</Text>

      <Image source={require("../../assets/help.png")} 
      style={global.helpimg} />
    </View>

    <View style={global.cashback}>
        <Text style={global.txtcashback}>CashBack últimos 30 dias   R$ 52,69</Text>
        <Image source={require("../../assets/help.png")} 
      style={global.help1img} />

    </View>
    </View>

    
  );
}
