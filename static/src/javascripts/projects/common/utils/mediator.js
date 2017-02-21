import EventEmitter from 'EventEmitter';

const app = window.guardian.app = window.guardian.app || {};

if (!app.mediator) {
    // a singleton instance of EventEmitter across the app
    app.mediator = new EventEmitter();
}

export default app.mediator;

