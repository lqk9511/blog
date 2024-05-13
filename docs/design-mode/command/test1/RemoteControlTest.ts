import { Light } from "./Light";
import { LightOnCommand } from "./LightOnCommand";
import { SimpleRemoteControl } from "./SimpleRemoteContiol";

const remote = new SimpleRemoteControl()
const light = new Light()
const lightOn = new LightOnCommand(light)

remote.setCommand(lightOn)
remote.buttonWasPressed()
