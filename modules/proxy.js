import onChange from "./on-change";
export default {
  // _methodProxy(path, obj){
  //     return {
  //         get: (target, propKey, receiver) => {
  //             const targetValue = Reflect.get(target, propKey, receiver)
  //             if (typeof targetValue !== 'function') return targetValue
  //             return (...args) => {
  //                 const methods = new Proxy( obj.methods, this._methodProxy(path, obj ) )
  //                 args.unshift( { state: obj.state, rootState: this.state, store: this, methods } )
  //                 this._subscribers.forEach( item => item.apply( this, args ) )
  //                 return targetValue.apply(this, args )
  //             }
  //         }
  //     }
  // },
  _stateProxy(obj) {
    return onChange(obj, (path, value, previousValue) =>
      this._watchers.forEach(item =>
        item.apply(this, [
          { state: this.state, store: this },
          { path, value, previousValue }
        ])
      )
    );
  }
};
