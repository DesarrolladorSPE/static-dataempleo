const generateYearRange = (startYear, endYear) => {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
        years.push(year);
    }
    const reverseYears = years.reverse();
    return reverseYears;
};

const endYear = new Date().getFullYear(); // Obtener el año actual
const yearArray = generateYearRange(2015, endYear);

const monthArray = [1,2,3,4,5,6,7,8,9,10,11,12];

export { yearArray, monthArray };