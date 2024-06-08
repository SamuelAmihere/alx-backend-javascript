const Utils = {
    calculateNumber(type, a, b) {
        const numA = Math.round(a);
        const numB = Math.round(b);
      
        switch (type) {
          case 'SUM':
            return numA + numB;
          case 'SUBTRACT':
            return numA - numB;
          case 'DIVIDE':
            return numB === 0 ? 'Error' : numA / numB;
          default:
            return 0;
        }
    },
  };
  
  module.exports = Utils;
