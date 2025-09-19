export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  moduleFileExtensions: ["js", "jsx"],
};




// /** @type {import('jest').Config} */
// const config = {
  
//   clearMocks: true,

  
//   collectCoverage: true,

  
//   coverageDirectory: "coverage",

  
//   testEnvironment: "jsdom",

// };

// module.exports = config;
