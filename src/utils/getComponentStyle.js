export const getStyleBackground = (day, temp, precip, cloud) => {
    let className = "night__";

    if (day) className = "day__"
    if (precip >= 1 || cloud >= 80) return className + "overcast"
    if (temp < 5) return className + "cold"
    return className + "warm"
}

export const getStyleWeatherIcon = (day, temp, precip, cloud) => {
    let className = "icon_night__";

    if (day) className = "icon_day__"
    if (precip >= 1 ) {
        if (cloud >= 80) return className + "precip"
        return className + "rainy"
    }
    if (cloud >= 80) return className + "overcast"
    if (cloud >= 40) return className + "cloudy"
    return className + "clear"
}