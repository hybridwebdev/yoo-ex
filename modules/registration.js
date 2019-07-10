import Vue from "vue";
import { set, get } from "lodash";
export default {
  call(path, ...args) {
    const fn = get(this, path);
    if (typeof fn != "function") {
      console.log(path + "is not a function");
      return;
    }
    /* base represents the base path of a module, passed on passed in path */
    const base = path
      .split(".")
      .slice(0, -1)
      .join(".");
    args.unshift({
      state: get(this.state, base),
      call: (path, ...innerargs) =>
        this.call.call(this, [].concat(base, path).join("."), ...innerargs),
      rootCall: (path, ...innerargs) =>
        this.call.call(this, path, ...innerargs),
      rootState: this.state,
      store: this,
      base,
      path
    });
    this._subscribers.forEach(item => item.apply(this, args));
    return fn.apply(get(this, base), args);
  },
  extend(...args) {
    this._registerState.apply(this, args);
    this._registerMethods.apply(this, args);
  },
  _registerState(path, obj) {
    if (!obj.state) return;
    const state = Vue.observable(obj.state);
    if (path === "") {
      this.state = state;
    } else {
      set(this.state, path, state);
    }
  },
  _registerMethods(path, obj) {
    if (!obj.methods) return;
    const { methods } = obj;
    if (obj.namespaced === true) {
      set(this, path, methods);
    } else {
      Object.assign(this, methods);
    }
  }
};
