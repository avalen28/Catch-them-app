export const conversionHeight = (number: number) => {
    const meter = (number / 10)
    const feet = Math.floor(meter * 3.28084)
    const inches = Math.round((meter * 3.28084 - feet) * 12);
    const conversionHeight = `${meter} m ( ${feet}" ${inches}' )`
    return conversionHeight
}

export const conversionWeight = (number: number) => {
    const kg = (number / 10)
    const lbs = (kg * 2.20462262185).toFixed(2);
    const conversionWeight = `${kg} kg ( ${lbs} lbs. )`
    return conversionWeight
}