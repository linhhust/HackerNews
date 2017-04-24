export const convertTime = (timeInput) => {
  const time = Date.now() / 1000 - timeInput
  //console.log('Time:', time)
  if (Math.floor(time / 43200) != 0) {
    return Math.floor(time / 43200) + ' day'
  } else if (Math.floor(time / 3600) != 0) {
    return Math.floor(time / 3600) + ' hour'
  } else {
    return Math.floor(time / 60) + ' minute'
  }
}