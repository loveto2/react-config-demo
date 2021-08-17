const dotenv = require('dotenv');
const path = require('path');

let basename = 'dev';
const { argv } = process;
const index = argv.findIndex((arg) => arg === '--mode');
if (index > -1 && argv[index + 1]) {
  basename = argv[index + 1];
}

const envConfig = dotenv.config({
  path: path.resolve(__dirname, `.env.${basename}`),
  encoding: 'utf8',
  debug: false,
});

if (!envConfig) {
  console.log('配置文件不存在');
  process.exit(1);
}
