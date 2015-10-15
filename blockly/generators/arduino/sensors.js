Blockly.Arduino.temp_TMP36 = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_unit = this.getFieldValue('Unit');
  if (dropdown_unit == 'Celcius') {
    var code = '(((analogRead(' + dropdown_pin + ') * 5.0) / 1024.0) - 0.5) * 100';
  } else {
    var code = '(((((analogRead(' + dropdown_pin + ') * 5.0) / 1024.0) - 0.5) * 100) * 9.0 / 5.0) + 32.0';
  } 
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['ultrasonic_ranger'] = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_unit = this.getFieldValue('UNIT');
  Blockly.Arduino.definitions_['define_ultrasonic'] = '#include <Ultrasonic.h>\n';
  Blockly.Arduino.definitions_['var_ultrasonic'+dropdown_pin] = 'Ultrasonic ultrasonic_'+dropdown_pin+'('+dropdown_pin+');\n';
  var code;
  if(dropdown_unit==="cm"){
    Blockly.Arduino.setups_['setup_ultrasonic_'+dropdown_pin] = 'ultrasonic_'+dropdown_pin+'.MeasureInCentimeters();';
    code = 'ultrasonic_'+dropdown_pin+'.MeasureInCentimeters();';
  } else {
    Blockly.Arduino.setups_['setup_ultrasonic_'+dropdown_pin] = 'ultrasonic_'+dropdown_pin+'.MeasureInInches();';
    code = 'ultrasonic_'+dropdown_pin+'.MeasureInInches();';
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


