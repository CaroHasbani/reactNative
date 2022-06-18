import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Orders from "../../screens/Orders";

const OrderStack = () => {

  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator
      >
        <Stack.Screen 
        name='Orders Tab' 
        component={Orders}
        options={{ title: 'Orders',
        headerStyle: {
          backgroundColor: '#1D3557',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold'
        } }} />
       
      </Stack.Navigator>
    
  )
}

export default OrderStack