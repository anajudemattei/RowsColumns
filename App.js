import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./pages/home";
import Detail from "./pages/details";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="2TDS1"
                    component={HomeScreen}
                    options={{
                        headerTitleStyle: {
                            fontSize: 40,
                        },
                    }}
                />
                <Stack.Screen name="Details" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}