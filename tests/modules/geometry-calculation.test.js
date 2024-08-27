const Line = require('./../../modules/ecs6-class/line');
const Point = require("../../modules/ecs6-class/point")
const { calculateDistance, calculateJunctionPoint, isPointOnLine } = require('./../../modules/geometry-calculation')

describe('calculateDistance function', () => {

    it('should calculate the distance correctly between two points', () => {
        const point1 = { x: 1, y: 1 };
        const point2 = { x: 4, y: 5 };
        const expectedDistance = 3;
        const result = calculateDistance(point1, point2);
        expect(result).toBeCloseTo(3);
    });

});
describe('calculateJunctionPoint function', () => {
    it('should correctly calculate the junction point between two lines if they intersect', () => {
        const line1 = new Line({ point1: { x: 1, y: 2 }, point2: { x: 3, y: 4 } });
        const line2 = new Line({ point1: { x: 2, y: 1 }, point2: { x: 4, y: 3 } });
        const expectedJunctionPoint = true;
        const result = calculateJunctionPoint(line1, line2);
        expect(result).toEqual(expectedJunctionPoint);
    });
    it('should return true if the lines are parallel and have the same intersection point', () => {
        const line1 = new Line({ point1: { x: 1, y: 2 }, point2: { x: 3, y: 4 } });
        const line2 = new Line({ point1: { x: 2, y: 1 }, point2: { x: 4, y: 3 } });
        const result = calculateJunctionPoint(line1, line2);
        expect(result).toBeTruthy();
    });
    it("should return false when the point1.slope equal to point2.slope end point1.n not equal to point2.n", () => {
        const line1 = new Line({ point1: { x: 1, y: 2 }, point2: { x: 3, y: 4 }, n: 3, slope: 3 });
        const line2 = new Line({ point1: { x: 2, y: 1 }, point2: { x: 4, y: 3 }, n: 2, slope: 3 });
        const result = calculateJunctionPoint(line1, line2);
        expect(result).toBeFalsy();
    })
    it("should return junctionPoint when the line1.slope not equal line2,slope", () => {
        const line1 = new Line({ point1: { x: 1, y: 2 }, point2: { x: 3, y: 4 }, n: 3, slope: 4 });
        const line2 = new Line({ point1: { x: 2, y: 1 }, point2: { x: 4, y: 3 }, n: 3, slope: 3 });
        const result = calculateJunctionPoint(line1, line2);
        expect(result).toEqual({ x: -0, y: 3 })

    })
});

describe('isPointOnLine function', () => {
    it('should return true if the point lies on the line', () => {
        const line = new Line({ point1: { x: 1, y: 1 }, point2: { x: 3, y: 3 } });
        const point =new Point( { x: 2, y: 2 });
        const result = isPointOnLine(line, point);
        console.log(result,"result");
        
        expect(result).toBeFalsy();
    });
    it('should return false if the point does not lie on the line', () => {
        const line = new Line({ point1: { x: 1, y: 1 }, point2: { x: 3, y: 3 } });
        const point = { x: 4, y: 4 };
        const result = isPointOnLine(line, point);
        expect(result).toBeFalsy();
    });
    it("should calculateNOfLineFunction if line.slope equal proxyLine.slope", () => {
        const point = { x: 4, y: 4 };
        const line = new Line({ point1: { x: 1, y: 1 }, point2: { x: 3, y: 3 } });
        const result = isPointOnLine(line, point);
        expect(result).toBeFalsy();
    })
    it("should return true if line.n equal to proxyLine.n", () => {
        const point = { x: 4, y: 4 };
        const line = new Line({ point1: { x: 1, y: 1 }, point2: { x: 3, y: 3 } ,slope:1, n:0});
        const result = isPointOnLine(line, point);
        expect(result).toBeTruthy()
    })
});