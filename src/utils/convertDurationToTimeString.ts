export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3600);
    const minutos = Math.floor((duration % 3600) / 60)
    const seconds = duration % 60;

    const finalResult = [hours, minutos, seconds]
        .map(unit => String(unit).padStart(2, '0'))
        .join(':')

    return finalResult
}