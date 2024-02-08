const os = require('os')

//info about user
const user = os.userInfo()
// console.log(user)

//method returns the system uptime in seconds
// console.log(`The System Uptime is ${(os.uptime()) } seconds`)

// console.log(`The System Uptime is ${(os.uptime() / (60 * 60 )) } hours`)

// console.log(`The System Uptime is ${(os.uptime() / (60 * 60 * 24)) } days`)


const currentOS = {
    type: os.type(), //returns the operating system name
    platform: os.platform(), //returns the running OS name
    arch: os.arch(), //returns CPU architecture
    release: os.release(), //returns the kernel version string
    hostname: os.hostname(), //returns the network name of the machine
    totalMem: os.totalmem(), //returns the system memory in bytes
    freeMem: os.freemem(), //returns the free system memory in bytes
    uptime: os.uptime(), //returns the system uptime in seconds
}
console.dir(currentOS);