#!/usr/bin/env node
import server from './index';
import updateNotifier from 'update-notifier';
import pkg from '../package.json';

updateNotifier({pkg}).notify();

server();
