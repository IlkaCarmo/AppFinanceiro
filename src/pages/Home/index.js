import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list =[
  {
    id: 1,
    label:'Boleto conta luz',
    value: '3,90',
    date: '17/6/2022',
    type: 0  //despesas/entrada
  },
  {
    id: 2,
    label:'Pix',
    value: '2500,00',
    date: '01/10/2022',
    type: 1 //receitas
  },
  {
    id: 3,
    label:'salario',
    value: '7.500,00',
    date: '12/9/2022',
    type: 1 //receitas/entrada
  },
]

export default function Home() {
  return (
    
    <View style={styles.container}>
        <Header name="Ilka carmo"/>
      <Balance saldo="9.250.90" gasto="- 527,00"/>

        <Actions/>
        <Text style={styles.title}>Ultimas movimentações</Text>

        <FlatList
         style={styles.list}
         data={list}
         keyExtractor={(item) => String(item.id)}
         showsVerticalScrollIndicator={false}
         renderItem={({item}) =><Moviments data={item}/>}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    justifyContent:'flex-start',
    paddingTop:37,
  },
  title:{
    fontSize: 18,
    fontWeight:'bold',
    margin:14, 
  },
  list:{
    marginStart:14,
    marginEnd:14,
  }
});

