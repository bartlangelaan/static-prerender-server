#!/usr/bin/env node
import updateNotifier from 'update-notifier';
import pkg from '../package.json';
import server from './index';

updateNotifier({ pkg }).notify();

server();
