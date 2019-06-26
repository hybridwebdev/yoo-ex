import proxyModule from "./modules/proxy"
import registrationModule from "./modules/registration"
import subscriptionModule from "./modules/subscription"
import install from "./modules/install"
import Vue from "vue"
class store {
    state = { }
    constructor( options = {} ){
        Object.assign( this, registrationModule, proxyModule, subscriptionModule )
        this.extend( "", options )
    }
    inject(options){
        Vue.use(install, { ...options, store: this } )
    }
}
export { store, install }
