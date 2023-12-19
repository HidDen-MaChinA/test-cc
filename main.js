export class RiceCooker {
    constructor(){
        this.ricePresent = false
        this.riceCooked = false
        this.steamingInProgress = false
        this.heatingInProgress = false
        this.addRice = () => {
            this.ricePresent ? console.log("there are already rice") : (()=>{this.ricePresent=true;console.log("rice has been added")})()
        }
        this.delaySync = (ms) => {
            const start = Date.now()
            while(Date.now() - start < ms) {

            }
        }
        this.cookRice = () => {
            if(!this.ricePresent){
                console.log("cannot cook")
            }
            else if(this.riceCooked){
                console.log("the rice is already cooked")
            }else{
                console.log('cooking rice...')
                this.delaySync(1500)
                this.riceCooked = true
                console.log('rice has been cooked')
            }
        }
        this.steam = () => {
            if(!this.ricePresent){
                console.log("cannot steam")
            }else if(this.steamingInProgress){
                console.log("steaming in progress")
            }else {
                console.log('steaming')
                this.delaySync(1500)
                console.log("terminated")
            }
        }
        this.keepWarm = () => {
            if(!this.ricePresent){
                console.log("cannot warm")
            }else if(!this.riceCooked){
                console.log("not cooked")
            }
            else if(!this.heatingInProgress){
                console.log("the rice is now being kept warm")
                this.heatingInProgress = true
            }
        }
        this.removeRice = () => {
            if(!this.ricePresent){
                console.log('no rice to take')
            }else if(this.riceCooked || this.heatingInProgress){
                this.ricePresent = false;
                this.riceCooked = false
                this.steamingInProgress = false
                this.heatingInProgress = false
                console.log("oke bro")
            }
        }
    }
}
  