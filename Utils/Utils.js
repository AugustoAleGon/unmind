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
