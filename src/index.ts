import 'es6-shim';
import 'es6-promise';
import 'reflect-metadata';

import 'zone.js/lib/browser/zone-microtask';
import 'zone.js/lib/browser/long-stack-trace-zone';

import { bootstrap } from 'angular2/platform/browser';
import { App } from './App.ts';

bootstrap(App, []).catch(err => console.error(err));
