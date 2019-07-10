//import proxyModule from "./modules/proxy";
import registrationModule from "./modules/registration";
import subscriptionModule from "./modules/subscription";
import install from "./modules/install";
import Vue from "vue";
class store {
  constructor(options = {}) {
    Object.assign( this, 
        registrationModule, 
        //proxyModule, 
        subscriptionModule
    );
    //this.state = this._stateProxy( {} )
    //this.state = {};
    //this.extend("", options);
  }
  inject(options, store) {
    Vue.use(install, { ...options, store });
  }
}
export { store };
