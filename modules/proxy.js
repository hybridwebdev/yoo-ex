export default {
    _methodProxy(path, obj){
        return {
            get: (target, propKey, receiver) => {
                const targetValue = Reflect.get(target, propKey, receiver)
                if (typeof targetValue !== 'function') return targetValue
                return (...args) => {
                    const state = { state: obj.state, rootState: this.state }
                    args.unshift( state ) 
                    this._subscribers.forEach( item => item.apply( this, args ) )
                    return targetValue.apply(this, args )
                }
            }
        } 
    },
    _stateProxy(path, obj) {
        return {
            set: ( target, key, value, receiver ) => {
                const args = [
                    { state: obj.state, rootState: this.state }, 
                    { key, value, path, oldValue: target[key], fullPath: [ path, key ].join('.') }
                ]
                this._watchers.forEach( item => item.apply( this, args ) )
                return Reflect.set( target, key, value, receiver )
            }
        }
    }
}