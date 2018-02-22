# Running the Demo

## Introduction
This document covers how to get the Renesas demo up and running using speakers and boards that have already been provisioned.
For information on how to provision voice speakers, see the "Setting_Up_Voice_Speakers" doc.

## Requirements
1. At least 1 Renesas board
2. At least 1 voice speaker
3. A Wifi connection that the speaker(s) and board(s) have been provisioned to use.
It's likely that a known router will be needed for this.
4. A stable AC power source for the speaker(s).
One or more power strips may be needed depending on the number of speakers.
5. A powered USB Hub is recommended if using multiple boards.
6. A laptop with terminal emulation software (for communicating with the Renesas boards)

## Setup Instructions
1. Plug in the speaker or speakers. Wait for them to connect to Wifi. Each speaker should play a sound and/or voice confirmation when it is ready.
2. Confirm that the speakers have Internet access by asking for the weather, or by asking "are you online?".
3. Connect the boards to the laptop/powered USB hub:
   1. For PK-S5D9 boards, you'll need two USB connections for each board: one for the serial console (J5), and one for power (via the J19 debug port).
   2. For FPK-S5D9 boards, only one USB connection is needed for both power & serial console (J9).
   3. For each board, open a serial console window using your favorite terminal emulator (e.g. PuTTY, TeraTerm) at 9600,8,N,1 and issue the following commands at the ">" prompt:
    ```bash
    > netif wifi
    > ipcf dhcp
    > turb start
    ```
   4. Data should start streaming to the console windows; verify that the data appears in the 'Remote Monitoring' tab of the Cloud Toolbox Dashboard.

## Interacting with the Demo
Once everything is online,
you can issue commands to the Voice Speakers.

### Wake Words
Wake words are the phrases used to get the speaker's attention.
Any time you want to talk to the speaker,
start with this phrase and wait for top of the speaker to light up, then give a command.

- "Alexa, good morning!"
- "Hey Cortana, play some Jazz."
- "Ok Google, what's the weather like?"

### Invoking the Skill
To interact with the Voice Skill,
you'll need to invoke it by name.
You can change the name of your Voice Skill in your platform's web dashboard.
Start your commands like this...

- "Alexa, ask {Skill Name} [...]"
- "Hey Cortana, ask {Skill Name} [...]"
- "Ok Google, ask {Skill Name} [...]"

If you forget to say the skill name,
just say "cancel" and start again.

## Example Voice Commands
Below are some sample commands.
A more complete list can be found in the "Possible_Voice_Commands" document.
Remember to preface each command with the skill name.

A full example might look like this:

> "Ok Google, ask Cloud Toolbox for the pressure on the California board."

{Name} indicates the name of the board.
You can change the board names in the `common/src/settings/boards.js` file.

### Asking for sensor data
- "[to] check the temperature on the {Name} Board"
- "for the pressure on {Name}"
- "what's the humidity on the {Name} board?"

### Turning on the lights
- "turn on the red light for the {Name} board"
- "turn off the green light for the {Name} board"
- "Turn the yellow light off at the {Name} board"
- "Set the green light to on for the {Name} board"
- "Turn off the green light on {Name}"
- "Switch the yellow light on for the {Name} board"
- "Switch on the red light on {Name}"

### Asking for light status
- "what lights are on for the {Name} board"
- "are any lights off for the {Name} board"
- "are any lights on for {Name}"
- "which lights are off for the {Name} board"
- "if the red light is off for {Name}"
- "is the green light on for {Name}"
- "check if the yellow light is off for the {Name} board"
- "is the red light on at {Name}"

### Checking the weather
The demo includes a special feature initiated by asking for the weather.
When executed, the three speakers will work together to report all sensor data.
Each speaker will ask the next in the chain to get the next sensor reading.

Any speaker can be asked to begin the chain:
- `Alexa -> Google -> Cortana`
- `Cortana -> Alexa -> Google`
- `Google -> Cortana -> Alexa`

The 1st speaker will report the temperature for the requested board,
the 2nd speaker will report the pressure,
and the 3rd will report the humidity.

#### Weather phrasings
"Weather" can be substituted into any of the sensor data phrasings to begin the chain.
Try saying things like:
- "[to] check the weather on the {Name} board"
- "for the weather on the {Name} board"
- "what's the weather on the {Name} board?"

#### Weather Tips
- Before attempting this feature, it is a good idea to move the speakers closer together,
and to turn up their speaking volumes,
to ensure they can hear each other.
- After beginning the chain,
the user should try to remain quiet until it completes,
so that the speakers can hear each other.

## Voice tips
### Ensure you are heard
- After saying the invocation phrase (e.g. "Ok Google"), visually confirm that the light ring on top of the speaker lights up before speaking your command.
The light ring indicates the speaker is listening.

- Speak firmly, at a reasonable volume.
If the speaker cannot hear you voice, it will turn off its lights and play a cancellation sound with 2 beeps.
If this happens frequently, speak up!
You don't have to yell, just be confident and don't mumble.

- In a noisy environment, the speaker may have trouble picking out a single voice.
If it seems to be struggling,
try moving closer to the speaker, within 1-2 feet,
and face directly toward he speaker when talking.

- Talk naturally. All 3 AIs are trained for human speech.
Certain phrasing work better than others (see [Example Voice Commands](#example-voice-commands),
but you don't have to talk like a robot.
Pretend you are speaking to a human being.

### Avoid confusion
- Think about what you're going to say before speaking.
If you hesitate, or stumble through a command,
the speaker will think you are done speaking and the command may not stick.

- Avoid the word "on" other than to say "on/off".
For example, instead of saying "Turn the red light on **on** the California board.",
say "Turn the red light on **for** the California board."

- The Google Home will respond to "Hey Google" or "Ok Google".
"Hey Google" will sometimes trigger the Invoke ("Hey Cortana"),
so it is recommended to use "Ok Google" when trying to get the Google Home's attention.

### Don't be misunderstood
- If you feel like you're giving the board name, but the AI is still asking you for it,
try using the phrasing "[...] for the {Name} board" instead of just "[...] for {Name}".
This generally works better.

## Troubleshooting and Miscelaneous
## Cortana
- Occasionally, Cortana will time out before the skill responds.
This is usually accompanied by her saying
"Sorry, but Renesas Cloud Toolbox isn't responding right now. Try again later."
Simply wait a few seconds and try the command again.
It should go through the second time.
If the problem is persistent, see "Azure Cold Start" in the Voice_Platform_Gotchyas document.

- Once, during testing, one of the Harmon Invoke speakers stopped responding to any invocations of "Hey Cortana" and became unusable.
Restoring the speaker to factory settings and re-provisioning resolved this issue.
See "Setting_Up_Voice_Speakers" for information on how to re-provisioning.
