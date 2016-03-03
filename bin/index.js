#!/usr/bin/env node
require('babel/polyfill');
var parseCommandLineOptions = require('../lib/parse-command-line-options');
var Transformer = require('./../lib/transformer');
var io = require('./../lib/io');
var options;

try {
  options = parseCommandLineOptions(process.argv);
}
catch (error) {
  console.error(error);
  process.exit(2);
}

var transformer = new Transformer(options.transforms);
io.write(options.outFile, transformer.run(io.read(options.inFile)));