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
    .replace(/Basement, E-103, Block E, Lajpat Nagar II, Central Market, New Delhi 110024/gi, 'E Block, E-103, near Afghani Dhaba, Block I, Lajpat Nagar II, Lajpat Nagar, New Delhi, Delhi 110024')
    .replace(/Basement, E-103, Block E, Lajpat Nagar II, Central Market, New Delhi, Delhi 110024/gi, 'E Block, E-103, near Afghani Dhaba, Block I, Lajpat Nagar II, Lajpat Nagar, New Delhi, Delhi 110024')
    .replace(/Basement, E-103, Block E, Lajpat Nagar II, Central Market/gi, 'E Block, E-103, near Afghani Dhaba, Block I, Lajpat Nagar II, Lajpat Nagar')
    .replace(/\+91 93105 54889/g, '092117 85275')
    .replace(/93105 54889/g, '92117 85275')
    .replace(/\+919310554889/g, '+919211785275')
    .replace(/919310554889/g, '919211785275')
    .replace(/9310554889/g, '9211785275')
    .replace(/10:30 AM – 9:00 PM \(All Days\)/gi, '10:00 AM – 10:00 PM (All Days)')
    .replace(/10:30-21:00/gi, '10:00-22:00');

  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log(`Updated ${file}`);
  }
}
