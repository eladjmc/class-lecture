// ################################################################################################
// #                            Constant Variables/Enums                                          #
// ################################################################################################
const TRIANGLE_TIPS_AMOUNT = 3;
const RECTANGLE_TIPS_AMOUNT = 4;
let base = 5;
let height = 5;

// ################################################################################################
// #                            Constant Variables/Enums                                          #
// ################################################################################################

class Shape {
  constructor(base, height, tips) {
    this.base = base;
    this.height = height;
    this.tips = tips;
  }

  getTriangleArea(base, height) {
    const triangleArea = (this.base * this.height) / 2;
    if(!this.isTriangle()){
      return;
    }
    return triangleArea;
  }

  getRectangleArea(base, height) {
    const rectangleArea = this.base * this.height;
    if(!this.isRectangle()){
      return;
    }
    return rectangleArea;
  }
  isRectangle(){
    return this.tips === RECTANGLE_TIPS_AMOUNT;
  }

  isTriangle(){
    return this.tips === TRIANGLE_TIPS_AMOUNT;
  }

}

// ################################################################################################
// #                                       Logic                                                  #
// ################################################################################################

const rectangle = new Shape(base,height,RECTANGLE_TIPS_AMOUNT);

console.log(rectangle.getTriangleArea());

console.log(rectangle.getRectangleArea());

// console.log(rectangle.isRectangle());