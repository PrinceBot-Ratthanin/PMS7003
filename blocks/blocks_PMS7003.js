Blockly.Blocks['PMS7003_Setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("PMS7003Sensor",null,["Plugin.PMSesp"],["Plugin.PMSesp"]), "instance")
        .appendField("Setup pinRX:")
        .appendField(new Blockly.FieldDropdown([
                                              ["32", "32"],
                                              ["33", "33"],
                                              ["27", "27"],
                                              ["26", "26"],
                                              ["25", "25"],
                                              ["23", "23"],
                                              ["22", "22"],
                                              ["21", "21"],
                                              ["19", "19"],
                                              ["18", "18"],
                                              ["17", "17"],
                                              ["16", "16"],
                                              ["15", "15"],
                                              ["14", "14"],
                                              ["13", "13"],
                                              ["12", "12"],
                                              ["5", "5"],
                                              ["4", "4"],
                                              ["2", "2"],
                                              ["0", "0"]]), "pinRX")
        .appendField("pinTX:")
       	.appendField(new Blockly.FieldDropdown([
                                              ["32", "32"],
                                              ["33", "33"],
                                              ["27", "27"],
                                              ["26", "26"],
                                              ["25", "25"],
                                              ["23", "23"],
                                              ["22", "22"],
                                              ["21", "21"],
                                              ["19", "19"],
                                              ["18", "18"],
                                              ["17", "17"],
                                              ["16", "16"],
                                              ["15", "15"],
                                              ["14", "14"],
                                              ["13", "13"],
                                              ["12", "12"],
                                              ["5", "5"],
                                              ["4", "4"],
                                              ["2", "2"],
                                              ["0", "0"]]), "pinTX");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("setup sensor");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['PMS7003_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("PMS7003Sensor",null,["Plugin.PMSesp"],["Plugin.PMSesp"]), "instance")
        .appendField("get data from sensor");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['PMS7003_readPM'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("PMS7003Sensor",null,["Plugin.PMSesp"],["Plugin.PMSesp"]), "instance")
        .appendField("read PM")
        .appendField(new Blockly.FieldDropdown([
                                              ["PM1.0", "1"],
                                              ["PM2.5", "2"],
                                              ["PM10", "3"]]), "PMLevel")
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['PMS7003_wakeUp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("PMS7003Sensor",null,["Plugin.PMSesp"],["Plugin.PMSesp"]), "instance")
        .appendField("wakeUp");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['PMS7003_sleep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("PMS7003Sensor",null,["Plugin.PMSesp"],["Plugin.PMSesp"]), "instance")
        .appendField("sleep");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['PMS7003_activeMode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("PMS7003Sensor",null,["Plugin.PMSesp"],["Plugin.PMSesp"]), "instance")
        .appendField("activeMode");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['PMS7003_passiveMode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("PMS7003Sensor",null,["Plugin.PMSesp"],["Plugin.PMSesp"]), "instance")
        .appendField("passiveMode");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
// Blockly.Blocks['PMS7003_readHumid'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldVariable("PMS7003Sensor",null,["Plugin.PMSesp"],["Plugin.PMSesp"]), "instance")
//         .appendField("read humidity %");
//     this.setInputsInline(true);
//     this.setOutput(true, ["float", "Number"]);
//     this.setColour(165);
//  this.setTooltip("read humidity in percentage");
//  this.setHelpUrl("");
//   }
// };