const fs = require('fs');
const path = require('path');

function walk(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      walk(filepath, filelist);
    } else if (filepath.endsWith('.js') || filepath.endsWith('.css')) {
      filelist.push(filepath);
    }
  }
  return filelist;
}

const files = walk('d:/project/headlock unisex salon/src');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content
    .replace(/E-33, Amar Colony, 1st Floor, Above Dominos, Delhi 110024/gi, 'Basement, E-103, Block E, Lajpat Nagar II, Central Market, New Delhi 110024')
    .replace(/E-33, Amar Colony, 1st Floor, Above Dominos/gi, 'Basement, E-103, Block E, Lajpat Nagar II, Central Market')
    .replace(/Studio Fix by Tanvi Singh/gi, 'Headlocks Unisex Salon')
    .replace(/Studio Fix Salon/gi, 'Headlocks Unisex Salon')
    .replace(/Studio Fix/gi, 'Headlocks')
    .replace(/Amar Colony/gi, 'Lajpat Nagar')
    .replace(/Tanvi Singh/gi, 'Our Expert Stylists')
    .replace(/BY TANVI SINGH/gi, 'PREMIUM SALON')
    .replace(/70420 44784/g, '93105 54889')
    .replace(/7042044784/g, '9310554889');

  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log(`Updated ${file}`);
  }
}
