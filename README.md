ChromeCustomTab closes on passkey finger input during the Webauthn create flow.

## Steps to reproduce the bug:

- `eas build --profile development --platform android --local`
- `adb install build-xxx.apk`
- `npx expo start --dev-client`
- click on "OPEN WEBAPP"
- in the Webauthn.io site input a name in "example username"
- click on "Register"
- passkey creation modal appears, confirm
- use fingerprint/pin to resolve the pass screen

## Expected behavior:
It should continue the process inside the ChromeCustomTab

## Current behavior:
It closes the ChromeCustomTab and back on the app

## Tests: it works sometimes
Tested with 4 different smartphone models, it works on 2:


| model  | android version  | works  |
|---|---|---|
| oneplus nord  | 12  | no  |
| oneplus nord 2  | 13  | no  |
| xiaomi mi a2  | 12 (lineage os)  | yes  |
| oppo | 12 | yes
