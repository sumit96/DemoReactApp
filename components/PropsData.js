import {Text, View } from 'react-native'
const PropsDataValue =(propss) => {
return(
<View>
    <Text>Display Prop Data {propss.stateData}</Text>
    <Text>Display Age Data {propss.age}</Text>
    <Text>Display Address Data {propss.address}</Text>

</View>

);};
export default PropsDataValue