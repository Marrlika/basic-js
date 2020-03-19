module.exports = class DepthCalculator {
    calculateDepth( arr ) {
       return arr.reduce((depth,element) => {
            let col = 1;
            if (Array.isArray(element)) {
                 col += this.calculateDepth( element );
            }
            return (depth<col)?col:depth;
        }, 1);
    }
};