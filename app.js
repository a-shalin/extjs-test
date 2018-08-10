/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ExtjsTest.Application',

    name: 'ExtjsTest',

    requires: [
        // This will automatically load all classes in the ExtjsTest namespace
        // so that application classes do not need to require each other.
        'ExtjsTest.*'
    ],

    // The name of the initial view to create.
    mainView: 'ExtjsTest.view.main.Main'
});
