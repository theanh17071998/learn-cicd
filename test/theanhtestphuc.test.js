
function sayHello(theanh, phuc) {
  return theanh + " Yeu " + phuc
}

it('Thê anh có yêu phúc không?', () => {
  expect(sayHello("Thế anh có", "Phúc")).toBe("Thế anh có Yeu Phúc")
})