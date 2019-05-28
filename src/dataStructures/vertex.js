/**
 * An implementation of a Vertex in Javascript.
 */
module.exports = class Vertex {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }

  getValue() {
    return this.value;
  }

  getNeighbors() {
    return this.neighbors;
  }

  setValue(value) {
    this.value = value;
  }

  toString() {
    return `Value: ${this.value}, Neighbors: ${this.neighbors.join(', ')}`;
  }

  print() {
    console.log(this.toString());
  }
};