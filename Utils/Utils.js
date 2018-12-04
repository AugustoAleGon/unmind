import { Images, Colors } from '../Themes'

export const selectImageSmile = (value) => {
  switch (value) {
    case 1:
      return Images.smile1
    case 2:
      return Images.smile2
    case 3:
      return Images.smile3
    case 4:
      return Images.smile4
    case 5:
      return Images.smile5
    case 6:
      return Images.smile6
    case 7:
      return Images.smile7
    default:
      break
  }
}

export const selectBackgroundColor = (value) => {
  switch (value) {
    case 1:
      return Colors.blackNoSmile
    case 2:
      return Colors.blueDarkNoSmile
    case 3:
      return Colors.blueNoSmile
    case 4:
      return Colors.blueLightNoSmile
    case 5:
      return Colors.greenSmile
    case 6:
      return Colors.greenSmile
    case 7:
      return Colors.orangeSmile
    default:
      break
  }
}

export const givenIdReturnFeeling = (idArray, feelingArray) => {
  let result = []
  for (let i = 0; i < idArray.length; i++) {
    result.push(feelingArray[idArray[i]])
  }
  return result
}

export const dateToMonth = (date) => {
  const timeMonth = new Date(date).getMonth()
  switch (timeMonth) {
    case 0:
      return 'JAN'
    case 1:
      return 'FEB'
    case 2:
      return 'MAR'
    case 3:
      return 'APR'
    case 4:
      return 'MAY'
    case 5:
      return 'JUN'
    case 6:
      return 'JUL'
    case 7:
      return 'AUG'
    case 8:
      return 'SEP'
    case 9:
      return 'OCT'
    case 10:
      return 'NOV'
    case 11:
      return 'DEC'
    default:
      break
  }
}

export const dateToDay = (date) => {
  const timeDay = new Date(date).getDate()
  return timeDay
}

export const dateToHour = (date) => {
  const time = new Date(date)
  return time.getHours() + ':' + time.getMinutes()
}
