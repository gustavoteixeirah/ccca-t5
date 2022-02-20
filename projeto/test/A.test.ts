import A from "../src/A";

test("Deve testar A", function () {
  const a = new A("1");
  expect(a.name).toBe("1");
});
