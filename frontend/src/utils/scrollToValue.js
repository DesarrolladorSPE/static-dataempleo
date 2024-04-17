const scrollToValue = (xValue=0, yValue=300, delay=100) => {
    setTimeout(() => {
        document.documentElement.scrollTo(xValue, yValue)
    }, delay);
}

export { scrollToValue }; 