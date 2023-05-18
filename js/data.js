import { getRandom } from './util.js';

export function generateArray(numberOfPhotos)
{
  const PhotosArray = [];
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
  return PhotosArray;
}
