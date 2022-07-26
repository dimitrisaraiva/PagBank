import { Image, Text, View } from "react-native";
import { global } from "../../css/Styles.js";

export default function Content() {
  return (
    <View style={global.content}>
      <View style={global.title}>
        <Text style={global.txtduvida}>O que deseja fazer?</Text>
        <Text style={global.txtbeneficios}>Veja beneficios</Text>
      </View>

      <View style={global.options1}>
        <View style={global.recargacartao}>
          <Image
            source={require("../../assets/cartao.png")}
            style={global.cartaoimg}
          />
          <Text style={global.txtcartao}>Recarga Catão pré-pago</Text>
        </View>

        <View style={global.tranferencias}>
          <Image
            source={require("../../assets/transferencia.png")}
            style={global.transferenciaimg}
          />
          <Text style={global.txttransferencia}>Transferência Bancaria</Text>
        </View>
      </View>

      <View style={global.options2}>
        <View style={global.deposito}>
          <Image
            source={require("../../assets/deposito.png")}
            style={global.depositoimg}
          />
          <Text style={global.txtdeposito}>Depositar dinheiro</Text>
        </View>

        <View style={global.chat}>
          <Image
            source={require("../../assets/chat.png")}
            style={global.chatimg}
          />
          <Text style={global.txtchat}>Atendimento/Chat</Text>
        </View>
      </View>

      <View style={global.options3}>
        <View style={global.boleto}>
          <Image
            source={require("../../assets/boleto.png")}
            style={global.chatimg}
          />
          <Text style={global.txtchat}>Pagamento de boleto</Text>
        </View>
      </View>

      <View style={global.pix}>
        <Image
          source={require("../../assets/pix.png")}
          style={global.chatimg}
        />
        <Text style={global.txtchat}>Área pix</Text>
      </View>
    </View>
  );
}
