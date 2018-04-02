import { StackNavigator } from 'react-navigation';

import { SelectNpcSortContainer } from './../features';

export default StackNavigator(
  {
    Sort: {
      screen: SelectNpcSortContainer,
      navigationOptions: {
        headerTitle: 'Select Sort Method',
      },
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarVisible: false,
    },
    // animationEnabled: false,
    // swipeEnabled: false,
  },
);