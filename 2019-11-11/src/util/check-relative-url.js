const r = new RegExp("^(?:[a-z]+:)?//", "i")
export default urlToCheck => {
  return r.test(urlToCheck)
}
