module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['./tests/steps/**/*.ts'],
    paths: ['./features/**/*.feature'],
    format: ['progress', 'summary'],
    publishQuiet: true
  }
};
