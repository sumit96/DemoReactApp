import {useState} from 'react'
import {Button, Text, View} from 'react-native'
import PropsDataValue from './PropsData';
import InlineStyle from './InlineStyle';
const StateUpdate = () =>{

    let data = "Initial Variable"
    const [intitalState, updatedState] = useState("Intital State")
    const [intitalAdddress, updatedAddress] = useState("India")
   
    const stateData =()=>{
       
        updatedState("Updated State")
        data="Updated Variable"
        addressData()
        
    }
    const addressData =()=>{
       
        updatedAddress("United States of America")
        
    }
return(
<View>
    <Text>
        Update State value {intitalState}
    </Text>
    <Text>
        Update Variable value {data}
    </Text>
    
    <Button title='Press' onPress={stateData} color={'green'}></Button>
    <PropsDataValue stateData={intitalState} age="30" address={intitalAdddress}/>
    <InlineStyle></InlineStyle>

</View>
);


};

export default StateUpdate