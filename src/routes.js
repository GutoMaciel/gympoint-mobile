import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from '~/pages/SignIn';
import Main from '~/pages/Main';

const Routes = createAppContainer(createSwitchNavigator({ SignIn, Main }));

export default Routes;
