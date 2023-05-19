/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { generateArray } from './data.js';
import { RenderPhotos } from './render.js';

const photos = generateArray(25);
RenderPhotos(photos);
