export default {
  _subscribers: [],
  _watchers: [],
  watch(item) {
    this._watchers.push(item);
  },
  subscribe(item) {
    this._subscribers.push(item);
  }
};
