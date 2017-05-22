/* eslint-disable no-console */

/**
 * defaults from prettier
 * @see https://github.com/prettier/prettier#options
 * printWidth: 80,
 * tabWidth: 2,
 * bracketSpacing: true,
 * jsxBracketSameLine: false,
 * rangeStart: 0,
 * rangeEnd: Infinity,
 * parser: babylon,
 */

const chalk = require('chalk');
const glob = require('glob');
const path = require('path');
const execFileSync = require('child_process').execFileSync;

const shouldWrite = process.argv[2] === 'write';
const isWindows = process.platform === 'win32';
const prettier = isWindows ? 'prettier.cmd' : 'prettier';
const prettierCmd = path.resolve(
  __dirname,
  `../node_modules/.bin/${prettier}`
);
const myOptions = {
  semi: true,             // remove semi-colons.
  singleQuote: true,      // use only single quotes.
  trailingComma: 'all',   // use trailing commas everywhere possible.
  useTabs: true,          // use tabs over spaces.
};
const config = {
  default: {
    patterns: [
      '/components/**/*.js',
      '/layout/*.js',
      '/lib/*.js',
      '/pages/**/*.js',
    ],
    ignore: [
      '**/node_modules/**',
      '**/.next/**',
    ],
  },
};

function exec(command, args) {
  console.log(`> ${[command].concat(args).join(' ')}`);
  const options = {};
  return execFileSync(command, args, options).toString();
}

Object.keys(config).forEach(key => {
  const patterns = config[key].patterns;
  const options = config[key].options;
  const ignore = config[key].ignore;

  const globPattern = patterns.length > 1
    ? `{${patterns.join(',')}}`
    : `${patterns.join(',')}`;
  const files = glob.sync(globPattern, { ignore });

  const args = Object.keys(myOptions).map(
    k => `--${k}=${(options && options[k]) || myOptions[k]}`
  );
  args.push(`--${shouldWrite ? 'write' : 'l'}`);

  try {
    exec(prettierCmd, [...args, ...files]);
  } catch (e) {
    if (!shouldWrite) {
      console.log(
        `\n${
          chalk.red(
            '  This project uses prettier to format all Javascript code.\n'
          )
        }${chalk.dim('   Please run ')
        }${chalk.reset('yarn prettier')
        }${chalk.dim(' and add changes to files listed above to your commit.')
        }\n`
      );
      process.exit(1);
    }
    throw e;
  }
});
