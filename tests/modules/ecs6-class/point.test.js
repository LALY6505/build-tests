const Point = require('./../../../modules/ecs6-class/point');

describe('Point constructor', () => {
    it('should set the correct x and y values when an object with specific values is passed', () => {
        const point = new Point({ x: 10, y: 20 });
        expect(point.x).toBe(10);
        expect(point.y).toBe(20);
    });
});

describe('Point constructor', () => {
    it('should set default values to x=0 and y=0 when no parameters are provided', () => {
        const point = new Point();
        expect(point.x).toBe(0);
        expect(point.y).toBe(0);
    });
});

it('should correctly move the y coordinate by the given value', () => {
    const point = new Point();
    point.moveVertical(5);
    expect(point.y).toBe(5);
});

describe('Point moveHorizontal method', () => {
    it('should correctly move the x coordinate by the given value', () => {
        const point = new Point();
        point.moveHorizontal(3); 
        expect(point.x).toBe(3);
    });
});