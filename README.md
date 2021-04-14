this is a robot that will wrtite for you, and you will need an Arduino and a p5.serial control https://github.com/p5-serial/p5.serialcontrol/releases This youtuber helped me alot https://www.youtube.com/watch?v=v0CHV33wDsI https://www.youtube.com/watch?v=q_bXBcmfTJM&t=0s also copy and paste this to your Arduino:

#include <Adafruit_CircuitPlayground.h>

bool leftButtonPressed; bool rightButtonPressed;

void setup() { Serial.begin(9600); CircuitPlayground.begin(); }

void loop() {

CircuitPlayground.setPixelColor(0, 255, 0, 0); CircuitPlayground.setPixelColor(1, 128, 128, 0); CircuitPlayground.setPixelColor(2, 0, 255, 0); CircuitPlayground.setPixelColor(3, 0, 128, 128); CircuitPlayground.setPixelColor(4, 0, 0, 255);

CircuitPlayground.setPixelColor(5, 0xFF0000); CircuitPlayground.setPixelColor(6, 0x808000); CircuitPlayground.setPixelColor(7, 0x00FF00); CircuitPlayground.setPixelColor(8, 0x008080); CircuitPlayground.setPixelColor(9, 0x0000FF);

leftButtonPressed = CircuitPlayground.leftButton(); rightButtonPressed = CircuitPlayground.rightButton();

// Serial.print("Left Button: "); if (leftButtonPressed) { Serial.println("1"); } // Serial.print(" Right Button: "); if (rightButtonPressed) { Serial.println("0"); }

delay(1000); }
