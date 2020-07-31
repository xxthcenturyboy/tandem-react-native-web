(function () {
  const fs = require('fs');

  const fontFileNames = () => {
    const array = fs
      .readdirSync('src/res/fonts')
      .map((file) => {
        return [
          file
            .replace('.otf', ''),
          file
            .replace('.otf', '')
            .replace(/-/g, '')
        ]
      });
    return Array.from(new Set(array))
  };

  const generate = () => {
    const properties = fontFileNames()
      .map((font) => {
        return `${font[1]}: '${font[0]}'`
      })
      .join(',\n  ')
    const string = `const fonts = {
  ${properties}
}
export default fonts
    `;

    fs.writeFileSync('src/res/fonts.ts', string, 'utf8');
  };

  generate();

})();
