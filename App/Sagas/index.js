import { takeLatest } from 'redux-saga'
import API from '../Services/Api'
import PAPI from '../Services/ParseApi'
import FixtureAPI from '../Services/FixtureApi'
import DebugSettings from '../Config/DebugSettings'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { TemperatureTypes } from '../Redux/TemperatureRedux'
import { LoginTypes } from '../Redux/LoginRedux'
import { OpenScreenTypes } from '../Redux/OpenScreenRedux'
import { BarCodeTypes } from "../Redux/BarCodeRedux";
import { ParseSendTypes } from "../Redux/ParseSendRedux"

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login } from './LoginSagas'
import { getTemperature } from './TemperatureSagas'
import { openScreen } from './OpenScreenSagas'
import { getBarCode } from './BarCodeSagas'
import { parseSend } from './ParseSendSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugSettings.useFixtures ? FixtureAPI : API.create();
const parseapi = DebugSettings.useFixtures ? FixtureAPI : PAPI.parseCreate();


/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(OpenScreenTypes.OPEN_SCREEN, openScreen),

    // some sagas receive extra parameters in addition to an action
    //takeLatest(TemperatureTypes.TEMPERATURE_REQUEST, getTemperature, api)
    takeLatest(BarCodeTypes.BAR_CODE_REQUEST, getBarCode, api),
    takeLatest(ParseSendTypes.PARSE_SEND_REQUEST, parseSend, parseapi)

  ]
}
