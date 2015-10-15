Blockly.Blocks['temp_TMP36'] = {
  helpUrl: 'http://arduino.cc/en/Reference/DigitalWrite',
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
              .appendField("Temperature read PIN#")
              .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN")
        .appendField("Unit")
        .appendField(new Blockly.FieldDropdown([["Celcius", "Celcius"], ["Farenheit", "Farenheit"]]), "Unit");
    this.setOutput(true, 'Number');
    this.setTooltip('Read temperature value from sensor TMP36');
  }
};


Blockly.Blocks['ultrasonic_ranger'] = {
  helpUrl: 'http://www.seeedstudio.com/wiki/Grove_-_Ultrasonic_Ranger',
  init: function() {
    this.setColour(190);
    this.appendDummyInput()
	      .appendField("Ultrasonic Ranger")
        .appendField(new Blockly.FieldImage("http://www.seeedstudio.com/wiki/images/thumb/b/b0/Twig_-_Ultrasonic_Ranger2.jpg/200px-Twig_-_Ultrasonic_Ranger2.jpg", 64, 64))
	      .appendField("PIN#")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendField("unit")
        .appendField(new Blockly.FieldDropdown([["cm", "cm"],  ["inch", "inch"]]), "UNIT");
    this.setOutput(true, 'Boolean');
    this.setTooltip('Non-contact distance measurement module');
  }
};
