"use strict";

class Home

	state
		_address: string
		_devices: []
	behavior
		getAdress(): string
		setAdress(string): void
		ыы
		addDevice(device): void
		getDeviceByName(string): device
		getAllDevices(): [device]
	!1!deleteDeviceByName(string): void через filter()
      
      onAllDevices(): void
      offAllDevices(): void
      
   !2!delayOn(name, delay, callback): void
      включи любое устройство через 2 секунды, а после включения этого устройства, включи еще одно через 3 секунды
      такое не прокатит:
         sh.delayOn("device1", 2000);
         sh.delayOn("device2", 5000);
 //!3!delayOn(name, delay): Promise
 