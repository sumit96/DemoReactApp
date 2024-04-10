import { StyleSheet, Text, View } from 'react-native'
import ExternalStyle from './ExternalStyle';
const InlineStyle = () =>{
return(
<View>
    {/* Inline Styling*/}
    <Text style={{fontSize:20, color:'green', backgroundColor:'yellow'}}>
        Hello, Inline Style
    </Text>

    {/* Internal Styling*/}
    <Text  style={styles.textBox}>
        Hello, Internal Style 1
    </Text>
    <Text  style={styles.textBox}>
        Hello, Internal Style 2
    </Text>

    {/* External Styling*/}
    <Text  style={extStyles.externalBox}>
        Hello, External Style 2
    </Text>
</View>

);


};
const styles=StyleSheet.create({
    textBox:{
            color:'green',
            backgroundColor:'grey',
            fontSize:15,
            margin:10,
            padding:5,
            textAlign:'center',
            borderColor:'black',
            borderWidth:2
    }
})

export default InlineStyle