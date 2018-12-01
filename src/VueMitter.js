import EventEmitter from 'events';

export default class VueMitter extends EventEmitter {
  constructor() {
    super();
    this.$emit = this.emit.bind(this);
    this.$on = this.on.bind(this);
    this.$once = this.once.bind(this);
    this.$off = this.removeListener.bind(this);
  }
}
