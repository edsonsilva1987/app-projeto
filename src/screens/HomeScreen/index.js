import { View, Text, StyleSheet, TouchableHighlight, ScrollView, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Paragraf, TextH1, TextH3 } from '../../components/Texts';
import Cards from '../../components/Cards';
import Banners from '../../components/Banners';
import Api from '../../config/api';
import { useEffect } from 'react';

export default function HomeScreen(props) {
 
    function renderItem(dados){

     
        return(
            <View style={{flexDirection:'row', alignItems:'center', marginTop: 10}}>
                <Cards/>
                <View>
                    <TextH3>Produto</TextH3>
                    <Text>{dados.item.id} - {dados.item.nome}</Text>
                </View>
            </View>
        )
    }

    async function getData(){
        // const response = await Api.get('produtos');
    }
    useEffect(()=>{
        getData();
    },[]);

    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <TouchableHighlight onPress={() => props.navigation.toggleDrawer()} >
                        <Feather name="menu" size={32} color="black" />
                    </TouchableHighlight> 
                </View>
                <View>
                    <Text>B</Text>
                </View>    
            </View>

            <View>
                <TextH1>Olá, jovem</TextH1>
                <Paragraf>Seja bem-vindo!</Paragraf>
            </View>
            <View style={{height: 90}}>
            <ScrollView horizontal style={{ marginTop: 10}}>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </ScrollView>
            </View>
                <Banners />
                <Banners />
                <Banners />
                <Banners />
                   <View>
                    <FlatList
                        data={[
                            {id: 1, nome:'ana' },
                            {id: 2, nome:'davi' },
                            {id: 3, nome:'pedro'},
                        ]}
                        renderItem={renderItem}
                    />
                   </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
