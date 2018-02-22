# Setting Up Voice Speakers

## Introduction
This document covers the initial setup of the voice speakers for the Renesas Demo.
For getting the demo up and running with devices that have already been provisioned,
or for tips on how to use the devices,
see the "Setting_Up_Demo" doc.

| Speaker Name | Voice Assistant | Software Backer |
| ------------ | --------------- | --------------- |
| Amazon Echo  | Alexa  | Amazon |
| Harmon Invoke | Cortana | Microsoft |
| Google Home | Google Assistant | Google |

## Requirements
1. The physical speaker that you are trying to setting up.
2. An external device that can connect to the same Wifi Network as the speaker you are setting up.
3. Paper clip (or similarly sized tool) to use for factory reset if necessary.

For the 2nd item, each Speaker has different device availability (see chart below).
However, no matter what you use,
it's always best to be connected to the same Wifi Network as the speaker you are setting up.

| Speaker Name | Supported Setup Devices |
| ------------ | --------------- |
| Amazon Echo   | iOS, Android, Web App |
| Harmon Invoke | iOS, Android, Windows 10 PC |
| Google Home   | iOS, Android |

## Amazon Echo
Official instructions can be found here:
https://www.amazon.com/gp/help/customer/display.html?nodeId=202189140

### Terminology
| Wording | Definition |
| ------- | ---------- |
| Amazon Echo | Physical speaker |
| Speaker | Physical speaker |
| Alexa App | Smartphone software used to setup the speaker |
| Web App | Website software used to setup the speaker |
| Alexa | Cloud software that processes voice utterances |
| Device | Smartphone, Tablet, or PC |

### Setup Instructions
1. Plug in the Echo and wait for the orange light ring
1. Either go to https://alexa.amazon.com or download the Alexa App for your a smartphonne or tablet.
1. Open the Web App or Alexa App.
  - Be sure to log in to the App with the account you wish to use for communicating with the speaker during the demo.
1. In the App, go to "Settings > Setup new device".
1. Choose "Echo" for the small speaker with cloth wrap (2nd Gen Echo).
If you are setting up a different Echo speaker, choose that one instead.
1. If you are using the Alexa App, your device should automatically connect to the Echo's Wifi.
If you are using the Web App, you will be prompted to connect to the Amazon Wifi network (direct connect to Echo).
- Either way, this will establish a direct connection to the Echo and you will temporarily lose Internet access.
1. Enter information for the Wifi network that you wish the Echo to connect to.
1. When prompted, reconnect to your own Internet-enabled Wifi network
(again, if using the Alexa App, this may happen automatically).
1. The Echo will need to update and restart itself.
This may take a few mintues. Alexa will say "hello" when the process is complete.
1. While the Echo restarts, you can finish following the update process in the App.
1. When done with the App, and the Echo restarts, you should be all set.
Try saying "Alexa, what's the weather like?" or "Alexa, are you online?" to verify that the speaker is properly provisioned and online.

### Changing the Wifi Network
If the speaker is already provisioned,
and you want to change the Wifi Network,
follow these instructions:

1. Login to https://alexa.amazon.com or the Alexa App.
1. Go to Settings and select the name of the device you want to change.
1. Select "Update Wifi".
You may be prompted to login to your account again.
1. The UI will ask if the Echo has the orange light rings.
If it does not, press and hold the "Action button" (with the small dot)
on top of the Echo until the orange light rings appear.
1. Connect to the Echo's Wifi network (this may happen automatically if using the App).
1. Give the Echo the new Wifi credentials and follow the remaining prompts.

### Changing the Speaker Location (for timezone and weather)
If the speaker is already provisioned,
and you want to change the location,
follow the steps below:

1. Login to https://alexa.amazon.com or the Alexa App.
1. Go to Settings and select the name of the device you want to change.
1. Under "General", change the zipcode and/or street address to the new location.
1. Under "Device time zone", change the time zone.

### Troubleshooting
- Close the Alexa App and re-open it.
- Unplug the speaker, wait 10 seconds, and plug it back in.
- If all else fails, do a factory reset by:
  1. Use a paper clip (or similar tool) to press and hold the Reset button,
  found on the bottom of the speaker. After you press and hold the Reset button, the light ring on your Echo turns orange, and then blue.
  1. Release the Reset button and wait for the light ring to turn off and on again.
  The light ring then turns orange, indicating the speaker has entered setup mode, and you can begin the setup process again.

## Harmon Invoke
Official instructions can be found here:
https://support.microsoft.com/en-us/help/4050818/windows-10-set-up-my-harman-kardon-invoke-cortana

### Terminology
| Wording | Definition |
| ------- | ---------- |
| Harmon Invoke | Physical speaker |
| Speaker | Physical speaker |
| Cortana App | Smartphone or Windows 10 software used to setup the speaker |
| The App | Smartphone or Windows 10 software used to setup the speaker |
| Cortana | Cloud software that processes voice utterances |
| Device | Smartphone, Tablet, or Windows 10 PC |

### Setup Instructions
NOTE: These instructions pertain to the Windows 10 App called "Cortana Device Setup".
Speaker setup via the iOS or Android Cortana App should be similar.

1. Plug in the Harmon Invoke.
The top of the speaker should light up with 3 lights forming a circular pattern.
1. Download "Cortana Device Setup" from the Microsoft App Store for Windows 10, or the Cortana App from the respective App Stores for iOS or Android.
1. Open the App.
  - Be sure to log in to the Cortana App with the account you wish to use for communicating with the speaker during the demo.
  - The App will ask you to check that the light rings in the App match those displayed on the speaker.
1. The Invoke will some access permissions to function properly, as will the Cortana App, so confirm those.
1. Follow the onscreen prompts.
1. When you get a list of speakers (there might only be one),
select the Invoke you wish to set up, and select "Connect".
  - At this stage,
  you will be connected directly to the Invoke via Wifi and temporarily unable to access the Internet.
  - If an error occurs during this stage,
  you will need unplug the Invoke and reconnect to your own Internet-enabled Wifi network. Then start back at Step 1.
1. Enter information for the Wifi network you wish the speaker to connect to.
1. Wait for speaker to update and restart.
This could take up to 10 minutes.
Cortana will say when she is ready.
1. After this,
your device should reconnect to your Internet-enabled Wifi network on its own.
1. Once the Invoke has restarted, you should be all set.
Confirm the device is properly provisioned by saying
"Hey Cortana, what's the whether like?" or
"Hey Cortana, are you online?" to check that Cortana can access the Internet.

### Changing the Wifi Network
If the speaker is already provisioned,
and you want to change the Wifi Network,
you will have to re-provision the device entirely.
Follow these instructions:

1. Open the Cortana Setup App.
1. Hold the Microhpone Mute button on the back of the speaker and wait for the triple light pattern.
Cortana will say "Ready for setup".
1. Go through setup as before, but when you get to the Wifi Screen,
click "Show available networks." to see more networks.

### Changing the Speaker Location (for timezone and weather)
If the speaker is already provisioned,
and you want to change the location,
follow the steps below:

1. Open the Cortana Setup App.
1. Hold the Microhpone Mute button on the back of the speaker and wait for the triple light pattern.
Cortana will say "Ready for setup".
1. Go through setup as before, but when you get to the Location screen,
enter the new address for the device.

### Troubleshooting
- Close the Cortana App and re-open it.
- Unplug the speaker, wait 10 seconds, and plug it back in.
- If all else fails, do a factory reset by:
  1. Hold the Microphone Mute button on the back of the Harmon Invoke speaker for at least 5 seconds.
  2. You will know the Invoke is in setup mode again when it says "Ready for setup. Please use the Cortana App".
  4. After that, you can release the button and begin the setup process again.

## Google Home
Official instructions can be found here:
https://support.google.com/googlehome/answer/7029485

### Terminology
| Wording | Definition |
| ------- | ---------- |
| Google Home | Physical speaker |
| Speaker | Physical speaker |
| Google Home App | Smartphone software used to setup the speaker |
| The App | Smartphone software used to setup the speaker |
| Google Assistant | Cloud software that processes voice utterances |
| Device | Smartphone or Tablet |

### Setup Instructions
1. Download the Google Home App to your Smartphone or Tablet.
  - Be sure to log in to the Google Home App with the account you wish to use for communicating with the speaker during the demo.
1. Enable GPS location services on your Smartphone or Tablet.
1. Plug in the Google Home.
The top will light up and prompt you to open the Google Home App.
1. Open the Google Home App.
  - Follow any initial instructions.
  - You should eventually see a card with your new speaker on it. Tap to setup.
  - You will hear a beep from the speaker and the App will ask that you confirm it is the correct one.
    - **NOTE:** At this stage, your device will connect directly to the Google Home via Wifi. You will not be able to access the Internet.
1. In the Google Home App, select the Wifi network that the speaker should connect to.
Uncheck the box if you don't want Google to store the Wifi password.
  - **IMPORTANT:** At the bottom of the screen, you must press "Enter Manually" to enter a Wifi password.
  - After entering the Wifi info, your device should automatically reconnect to your own Internet-enabled Wifi network.
1. The "Link Account" step _might_ occur here, or later on.
You will be asked to agree to several items so that the Google Assistant can know some information.
  - You can safely skip "Personal Voice Match", and "Personal Info"
  - Enter an address that Google will use for traffic and weather.
  - You can skip "emails and tips" to "Stay in the know".
  - A payment method is optional. Hit continue.
  - NOTE: If this happens here, you may be able to skip the "Link Account" step below.
1. The speaker will need to update and restart, but the App DOES NOT tell you this is happening.
The Google Home just displays dancing lights and will eventually play a happy music sound.
1. When the speaker has finished and restarted, try saying "Ok Google, hello."
If it responds happily, you can skip this step. If it says "Please link your account", then you should:
  - Find a "Link Account" card in the App,
  in the same spot you found the setup card.
  Tap to link your account and follow the instructions (as mentioned above).
  - If there is no "Link Account" card, try tapping the setup card again.
  - If there is also no setup card either, do a factory reset (see [Troubleshooting](#troubleshooting) below).
1. At this point, you should be all set.
Try saying "Ok Google, what's the weather like?" to ensure the device is properly provisioned and online.

### Changing the Wifi Network
If the speaker is already provisioned,
and you want to change the Wifi Network,
follow these instructions:

1. Open the Google Home App.
1. Connect to the same Wifi Network that the Google Home is currently on.
1. In the upper-right of the App, tap the "speaker icon",
then do one of the following:
  - Select the speaker card you are updating,
  then tap the "gear icon" to go to Settings.
  - If you cannot tap the speaker card,
  tap the 3 dots in the upper-right corner of the card, and select "Settings".
1. In Settings, scroll down until you see Wifi and tap "Forget".
1. Now go back to the home screen of the Google Home App,
and tap "Setup" on the card showing "Device Setup".
  - If there's no setup card, try pulling down from the top to refresh,
  and/or wait a few moments for it to show up.
1. Follow the prompts in the App to reconfigure Wifi for the speaker.
1. After changing the Wifi,
you will need to connect your Smartphone or Tablet to the **new Wifi** connection
(the same as the speaker is now on)
in order to see changes reflected in the Google Home App.
  - You may also have to close and re-open the Google Home App.

### Changing the Speaker Location (for timezone and weather)
If the speaker is already provisioned,
and you want to change the location,
follow the steps below:

1. Open the Google Home App.
1. Select the "Menu icon" (3 horizontal lines), then go to "More Settings".
1. Select the speaker name that you wish to change.
1. The current address is shown. Delete it.
1. Enter the new address for the speaker.

### Troubleshooting
- Close the Google Home App and re-open it.
- Go back to the home screen in the Google Home App and tap to setup the speaker again.
- Unplug the speaker, wait 10 seconds, and plug it back in.
- If all else fails, do a factory reset by:
  1. Hold the Microphone Mute button on the back of the Google Home speaker for 15 seconds.
  2. There will be a voice prompt and a yellow light meter.
  3. The speaker will beep when you can release the button.
  4. After you release the button, the speaker will restart and you will see the colored lights again.
  After that, you can begin the setup process again.
