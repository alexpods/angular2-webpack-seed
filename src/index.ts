import 'reflect-metadata';
import 'zone.js';
import { bootstrap } from 'angular2/core';
import { App } from './App.ts';

bootstrap(App);

module.hot && module.hot.accept();