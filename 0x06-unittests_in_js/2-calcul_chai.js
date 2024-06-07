const calculateNumber = (type, a, b) => {
    console.log('type:', typeof a, typeof b, a, b, 'rounded:', Math.round(a), Math.round(b));
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
  };

module.exports = calculateNumber;
