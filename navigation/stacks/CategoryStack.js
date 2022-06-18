
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Categories from '../../screens/Categories';
import Products from '../../screens/Products';
import Detail from '../../screens/Detail';


const CategoryStack = () => {

  const Stack = createNativeStackNavigator();

  return (
  
    <Stack.Navigator
      initialRouteName="Categories"
    >
      <Stack.Screen name='Categories' component={Categories} options={{ title: 'Categories',headerStyle: {
            backgroundColor: '#1D3557',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold'
          } }} />
      <Stack.Screen name='Products' component={Products} options={({route})=>({ title: route.params.category,headerStyle: {
            backgroundColor: '#1D3557',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold'
          } })} />
      <Stack.Screen name='Detail' component={Detail} options={({route})=>({ title: route.params.title,headerStyle: {
            backgroundColor: '#1D3557',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold'
          } })} />

    </Stack.Navigator>

  )
}

export default CategoryStack;