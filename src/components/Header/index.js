import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
} from 'react-native';
 
import { Feather } from '@expo/vector-icons'; 

export default function Header({name}) {
  return (
    <View style={styles.container}>
        
      <View style={styles.content}>
        <Text style={styles.username}>{name}</Text>

            <TouchableOpacity style={styles.buttonuser}>
                <Feather name='user' size={27} color="#FFF"/>
            </TouchableOpacity>
      </View>
     </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#8000ff',
        flexDirection:'row',
        paddingStart:16,
        paddingEnd:16,
        paddingBottom:44,
    },
    content:{
        flex: 1,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    username:{
        fontSize:18,
        color: '#FFF',
        fontWeight:'bold'
    },
    buttonuser:{
        width:44,
        height:44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 44/2,

    }
})
