class Transport {
	constructor(name, speed, capacity) {
		this.name = name
		this.speed = speed
		this.capacity = capacity
	}
	start() {
		return `${this.name} - rusumliy transport vositasi hatakatga tushdi !`
	}
	stop() {
		return `${this.name}- rusumliy transport vositasi hatakatdan to'xtadi`
	}
}

// const transport1 = new Transport('1969 Mustang® SportsRoof™', 200, 2)
// const transport2 = new Transport('2024 Mustang® Dark Horse™ Premium', 500, 4)
// console.log(transport1.start())
// console.log(transport2.stop())

class Car extends Transport {
	constructor(name, speed, capacity, fuleType) {
		super(name, speed, capacity)
		this.fuleType = fuleType
	}
	driveMode(mode) {
		const type = ['sport', 'eco', 'comfort']
		if (!type.includes(mode)) {
			return `${mode} rejim mavjud emas!\nIltimos quyidadi rejimlardan birini tanlang - ${type.join(
				', '
			)}`
		}
		return `${this.name} endi ${mode} rejimga otdi`
	}
}

class Airplane extends Transport {
	constructor(name, speed, capacity, altitude) {
		super(name, speed, capacity)
		this.altitude = altitude
	}
	fly() {
		return `${this.name} rusumliy samalyot uchishni boshladi va ${this.altitude} m baladlikga kotarldi`
	}
}

class Ship extends Transport {
	constructor(name, speed, capacity, cargoCapacity) {
		super(name, speed, capacity)
		this.cargoCapacity = cargoCapacity
	}
	sail() {
		return `${this.name} rusumliy kema suzishni boshladi va uning yuk sig‘imi: ${this.cargoCapacity} tonna dan iborad.`
	}
}

const car1 = new Car('1969 Mustang® SportsRoof™', 200, 2, 'Hybrid')
const car2 = new Car('2024 Mustang® Dark Horse™ Premium', 500, 4, 'Turbo')
const car3 = new Car('2022 Tesla X ', 500, 4, 'Elector')
// console.log(car1.driveMode("super"));
// console.log(car2.driveMode("eco"));

const airplane1 = new Airplane('UzAirways 747', 900, 500, 30000)
// console.log(airplane1.fly())

const ship1 = new Ship('Titanic', 40, 3500, 40000)
console.log(ship1.sail());




