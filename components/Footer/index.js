import { Image, Text, View } from "react-native";
import {global} from "../../css/Styles.js";

export default function Footer(){
    return(
        <View style={global.footer}>
            <View style={global.home}>
                <Image source={require("../../assets/home.png")} style={global.imghome}/>
                <Text style={global.txthome}> Início </Text>
            </View>

            <View style={global.home}>
                <Image source={require("../../assets/relator.png")} style={global.imghome}/>
                <Text style={global.txtextrato}> Extrato </Text>
            </View>

            <View style={global.home}>
                <Image source={require("../../assets/vendas.png")} style={global.imghome}/>
                <Text style={global.txtextrato}> Vendas </Text>
            </View>

            <View style={global.home}>
                <Image source={require("../../assets/cards.png")} style={global.imghome}/>
                <Text style={global.txtextrato}> Cartões </Text>
            </View>

            <View style={global.home}>
                <Image source={require("../../assets/point.png")} style={global.imghome}/>
                <Text style={global.txtextrato}> Opções </Text>
            </View>



        </View>

    )
}