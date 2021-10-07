const SkylabArray = require("./main");

describe("Given a push method", () => {
  describe("When it receives a string", () => {
    test("Then it should return lenght ", () => {
      const sa = new SkylabArray();
      const string = "a";
      const expected = 1;

      const result = sa.push(string);

      expect(result).toBe(expected);
    });
    test("Then it should return lenght = 2 ", () => {
      const sa = new SkylabArray();
      const string = "a";
      const expected = 2;
      sa.push(string);
      const result = sa.push(string);

      expect(result).toBe(expected);
    });
  });
});

describe("Given a push method", () => {
  describe("When it receives a string 'a' ", () => {
    test.only("Then it should return { 0: a } ", () => {
      const sa = new SkylabArray();
      const string = "a";
      const expected = { 0: "a" };

      const result = sa.push(string);

      expect(result).toEqual(expected);
    });
  });
});
