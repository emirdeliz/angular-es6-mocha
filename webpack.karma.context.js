import angular from 'angular';
import mocks from 'angular-mocks';

import * as main from './src/app/module/module';

let context = require.context('./src/test', true, /\.spec\.js/);
context.keys().forEach(context);
