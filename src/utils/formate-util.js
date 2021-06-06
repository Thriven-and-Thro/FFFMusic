export const putSizeImg = (img, size) => {
  return `${img}?param=${size}y${size}`
}

export const putPlayCount = (count) => {
  return count < 1e4
    ? count
    : (count > 1e8
      ? (Math.floor(count / 1e7) / 10 + "亿")
      : (Math.floor(count / 1000) / 10 + "万")
    )
}