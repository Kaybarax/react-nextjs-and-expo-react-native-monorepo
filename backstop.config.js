module.exports = {
  id: 'monorepo-visual-regression',
  viewports: [
    {
      label: 'phone',
      width: 375,
      height: 667,
    },
    {
      label: 'tablet',
      width: 768,
      height: 1024,
    },
    {
      label: 'desktop',
      width: 1366,
      height: 768,
    },
  ],
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  scenarios: [
    // TestMobileButtonComponent Scenarios
    {
      label: 'TestMobileButtonComponent - Primary',
      url: 'http://localhost:6007/iframe.html?args=&id=components-testmobilebuttoncomponent--primary&viewMode=story',
      readySelector: 'body',
      delay: 2000,
      misMatchThreshold: 0.1,
    },
    {
      label: 'TestMobileButtonComponent - Secondary',
      url: 'http://localhost:6007/iframe.html?args=&id=components-testmobilebuttoncomponent--secondary&viewMode=story',
      readySelector: 'body',
      delay: 2000,
      misMatchThreshold: 0.1,
    },
    {
      label: 'TestMobileButtonComponent - Tertiary',
      url: 'http://localhost:6007/iframe.html?args=&id=components-testmobilebuttoncomponent--tertiary&viewMode=story',
      readySelector: 'body',
      delay: 2000,
      misMatchThreshold: 0.1,
    },
    {
      label: 'TestMobileButtonComponent - Small',
      url: 'http://localhost:6007/iframe.html?args=&id=components-testmobilebuttoncomponent--small&viewMode=story',
      readySelector: 'body',
      delay: 2000,
      misMatchThreshold: 0.1,
    },
    {
      label: 'TestMobileButtonComponent - Medium',
      url: 'http://localhost:6007/iframe.html?args=&id=components-testmobilebuttoncomponent--medium&viewMode=story',
      readySelector: 'body',
      delay: 2000,
      misMatchThreshold: 0.1,
    },
    {
      label: 'TestMobileButtonComponent - Large',
      url: 'http://localhost:6007/iframe.html?args=&id=components-testmobilebuttoncomponent--large&viewMode=story',
      readySelector: 'body',
      delay: 2000,
      misMatchThreshold: 0.1,
    },
    {
      label: 'TestMobileButtonComponent - Disabled',
      url: 'http://localhost:6007/iframe.html?args=&id=components-testmobilebuttoncomponent--disabled&viewMode=story',
      readySelector: 'body',
      delay: 2000,
      misMatchThreshold: 0.1,
    },
  ],
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report',
  },
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox'],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
