export const createImage = (url: string) => {
  const image = new Image()
  image.src = url
  return image
}

export const preloadImage = (imagePath: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = createImage(imagePath)
    image.onload = () => resolve(image)
    image.onerror = reject
  })