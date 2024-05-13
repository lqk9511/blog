import { Command } from "./Command";

export class SimpleRemoteControl {
  slot?: Command;

  setCommand(command: Command) {
    this.slot = command;
  }

  buttonWasPressed() {
    this.slot?.execute();
  }
}
