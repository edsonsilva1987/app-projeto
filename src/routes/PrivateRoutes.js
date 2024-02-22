import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import { Platform } from "react-native";
import ClientesScreen from "../screens/ClientesScreen";
import TarefasScreen from "../screens/TarefasScreen";
import ContatoScreen from "../screens/ContatoScreen";



const Stack =createDrawerNavigator();

export default function PrivateRoutes() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} /> 
                <Stack.Screen name="Contato" component={ContatoScreen} options={{headerShown: true}} /> 
                <Stack.Screen name="Cientes" component={ClientesScreen} options={{headerShown: true}} /> 
                <Stack.Screen name="Tarefa" component={TarefasScreen} options={{headerShown: true}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}