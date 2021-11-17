Blockly.JavaScript['PMS7003_Setup'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var dropdown_dht_type = block.getFieldValue('dht_type');
    var number_pinRX = block.getFieldValue('pinRX'); 
    var number_pinTX = block.getFieldValue('pinTX'); 
    var code = `
  #EXTINC#include "PMS.h"#END
  #VARIABLE PMS ${variable_instance}(Serial1);#END
  #VARIABLE PMS::DATA PMSdata;#END
  Serial1.begin(9600, SERIAL_8N1, ${number_pinRX}, ${number_pinTX});
  `;
    return code;
  };
  Blockly.JavaScript['PMS7003_read'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `if(${variable_instance}.read(PMSdata)){}`;
    return code;
  };

  Blockly.JavaScript['PMS7003_readPM'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var number_Level = block.getFieldValue('PMLevel');
    
    var code = ``;
    if(number_Level == '1'){
    	code += 'PMSdata.PM_AE_UG_1_0';
    }
    else if(number_Level == '2'){
    	code += 'PMSdata.PM_AE_UG_2_5';
    } 
    else if(number_Level == '2'){
    	code += 'PMSdata.PM_AE_UG_10_0';
    } 
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  Blockly.JavaScript['PMS7003_wakeUp'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.wakeUp();`;
    return code;
  };
  Blockly.JavaScript['PMS7003_sleep'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.sleep();`;
    return code;
  };
  Blockly.JavaScript['PMS7003_activeMode'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.activeMode();`;
    return code;
  };
  Blockly.JavaScript['PMS7003_passiveMode'] = function(block) {
    var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
    var code = `${variable_instance}.passiveMode();`;
    return code;
  };