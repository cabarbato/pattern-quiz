const removeSpecial = (d: string) => {
   return d.replaceAll(/[^a-z0-9-/\.]/gi, " ")
}

const decodeThumbnail = (d: string) => {
   const arr = decodeURIComponent(d).split('/'),
      img_name = arr.pop().replaceAll(" ", "_"),
      path = arr.join("/")

   return [path, encodeURIComponent(img_name)].join("/")
}

export { removeSpecial };
export default decodeThumbnail;