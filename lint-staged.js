module.exports = {
  '*.{ts,tsx}': [
    'eslint --max-warnings=0',
    'react-scripts test --bail --watchAll=false --findRelatedTests --passWithNoTests',
    () => 'tsc-files --noEmit'
  ],
  '*.{ts,tsx,json,css,js}': ['prettier --write']
};
