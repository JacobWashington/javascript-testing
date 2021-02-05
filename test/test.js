const chai = require("chai");
const assert = require("chai").assert;
const expect = require("chai").expect;
const { jacob, age, dwightLike, obj, arr, add } = require("../index");

//describe what the test is
describe("jacob", function () {
  it("should return a string as a type", function () {
    assert.typeOf(jacob, "string");
  });

  it("should return Jacob", function () {
    assert.equal(jacob, "Jacob");
  });

  it("should return 5", function () {
    assert.lengthOf(jacob, 5);
  });
});

describe("age", function () {
  it("should return a number as a type", function () {
    assert.typeOf(age, "number");
  });

  it("should return 28", function () {
    assert.equal(age, 28);
  });
});

describe("add Function", function () {
  it("should be a function", function () {
    expect(add).to.be.a("function");
  });

  it("should return 4", function () {
    let myNum = add(1, 8);
    expect(add(2, 2)).to.equal(4);
    expect(myNum).to.equal(9);
  });

  it("should have number type as output", function () {
    expect(add(2, 2)).to.be.a("number");
  });
});
