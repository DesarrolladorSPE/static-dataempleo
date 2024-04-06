const handleColorsByFilters = (activeHighContrast) => {
    const root = document.documentElement;
    const normalStyles = {
        "--navbar-color": "#3366cc",
        "--main-body-color": "#EEFAFF",
        "--main-title-color": "#681d35",
        "--light-gray-color": "rgba(236,236,236,0.65)",
        "--confirm-color": "#069169",
        "--cancel-color": "#D31F3F",
        "--time-color": "#3366cc",
        "--gov-accesibility-card": "#681d35",
        "--black-to-white-color": "#000000",
        "--white-to-black-color": "#FFFFFF",
        "--lines-color": "#681d35",
        "--lines-color2": "#681d35",
        "--text-color": "#717171"
    };
    const highContrastStyles = {
        "--navbar-color": "#000000",
        "--main-body-color": "#737373",
        "--main-title-color": "rgba(255, 255, 255,1)",
        "--light-gray-color": "#000000",
        "--confirm-color": "#737373",
        "--cancel-color": "#737373",
        "--time-color": "#737373",
        "--gov-accesibility-card": "#000000",
        "--black-to-white-color": "#FFFFFF",
        "--white-to-black-color": "#000000",
        "--lines-color": "#FFFFFF",
        "--lines-color2": "#FFFFFF",
        "--text-color": "#FFFFFF"
    };

    const styles = activeHighContrast ? highContrastStyles : normalStyles;
    Object.entries(styles).forEach(([key, value]) => {
        root.style.setProperty(key, value);
    });
};

export { handleColorsByFilters };