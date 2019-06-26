import Vue from "vue"
import { set } from "lodash"
export default {
    extend( ...args ){
        this._registerState.apply(this, args)
        this._registerMethods.apply(this, args)
    },
    _registerState(path, obj){
        if(!obj.state) return
        const state = new Proxy( Vue.observable(obj.state), this._stateProxy( path, obj ) ) 
        if(path===''){
            this.state = state
        } else {
            set( this.state, path, state)
        }
    },
    _registerMethods( path, obj ) {
        if(!obj.methods) return
        const methods = new Proxy( obj.methods, this._methodProxy( path, obj ) )
        if(obj.namespaced===true) {
            set( this, path, methods )
        } else {
            Object.assign( this, methods )
        }
    }
}