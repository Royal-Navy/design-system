let uuid = 0

export default jest.fn(() => {
  uuid += 1
  return uuid
})
