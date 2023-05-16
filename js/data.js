import { getRandom } from './util.js';

export const PhotosArray = [];
export function generateArray(numberOfPhotos)
{
  for(let i = 1 ; i <= numberOfPhotos; i++)
  {
    const photo =
      {
        id: i,
        url: `photos/${i}.jpg`,
        description: `Фото №${i}`,
        likes: getRandom(15, 200),
        comments: getRandom(0, 200)
      };
    PhotosArray.push(photo);
  }
}
