/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { generateArray } from './data.js';
import { Render } from './render.js';

const photos = generateArray(25);
Render(photos);
