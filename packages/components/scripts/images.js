(function () {
  const fs = require('fs');

  const imageFileNames = () => {
    // pngs
    const pngArray = fs
      .readdirSync('src/res/images')
      .filter((file) => {
        return file.endsWith('.png')
      })
      .map((file) => {
        return [file,
          file
            .replace('0.5x.png', '05')
            .replace('2x.png', '20')
            .replace('3x.png', '30')
            .replace('4x.png', '40')
            .replace('5x.png', '50')
            .replace('6x.png', '60')
            .replace(/-/g, '')
            .replace('.png', '')
        ]
      });

    // jpgs
    const jpgArray = fs
      .readdirSync('src/res/images')
      .filter((file) => {
        return file.endsWith('.jpg')
      })
      .map((file) => {
        return [file,
          file
            .replace('0.5x.jpg', '05')
            .replace('2x.jpg', '20')
            .replace('3x.jpg', '30')
            .replace('4x.jpg', '40')
            .replace('5x.jpg', '50')
            .replace('6x.jpg', '60')
            .replace(/-/g, '')
            .replace('.jpg', '')
        ]
      });

    // gifs
    const gifArray = fs
      .readdirSync('src/res/images')
      .filter((file) => {
        return file.endsWith('.gif')
      })
      .map((file) => {
        return [file,
          file
            .replace(/-/g, '')
            .replace('.gif', '')
        ]
      });
    
    const array = pngArray.concat(jpgArray, gifArray);
    return Array.from(new Set(array))
  };

  const generate = () => {
    let properties = imageFileNames()
      .map((img) => {
        return `${img[1]}: require('./images/${img[0]}')`
        // return `${name}: require('./images/${name}.png')`
      })
      .join(',\n  ');

    const string = `const images = {
  ${properties}
}
export default images
`;

    fs.writeFileSync('src/res/images.ts', string, 'utf8');
  };

  generate();
})();


