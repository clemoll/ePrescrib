import { registerRootComponent } from 'expo';

import App from './screens/App';
import Qrcode from './screens/Qrcode';
import QRScannerPage from './screens/QRScannerPage';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
registerRootComponent(Qrcode);
registerRootComponent(QRScannerPage);

