/**
 * An implementation of a Vertex in Javascript.
 */
module.exports = class DirectedVertex {
  constructor(value) {
    this.value = value;
    this.inNeighbors = [];
    this.outNeighbors = [];
  }

  getValue() {
    return this.value;
  }

  getNeighbors() {
    return {
      inNeighbors: this.inNeighbors,
      outNeighbors: this.outNeighbors
    };
  }

  getInNeighbors() {
    return this.inNeighbors;
  }

  getOutNeighbors() {
    return this.outNeighbors;
  }

  setValue(value) {
    this.value = value;
  }

  toString() {
    return `Value: ${this.value}, In-Neighbors: ${this.inNeighbors.join(', ')}, Out-Neighbors: ${this.outNeighbors.join(', ')}`;
  }

  print() {
    console.log(this.toString());
  }
};