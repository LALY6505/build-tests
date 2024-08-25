const Line = require('./../../../modules/ecs6-class/line');
const Point = require('./../../../modules/ecs6-class/point');

describe('Line constructor', () => {
    it('should set the correct point1, point2, slope, and n values when objects with specific values are passed', () => {
        const point1 = new Point({ x: 1, y: 1 });
        const point2 = new Point({ x: 3, y: 3 });
        const line = new Line({ point1, point2 });

        expect(line.point1).toBe(point1);
        expect(line.point2).toBe(point2);
        expect(line.slope).toBe(undefined);
        expect(line.n).toBe(undefined);
    });
});

describe('Line calculateSlope method', () => {
    it('should correctly calculate the slope between point1 and point2', () => {
        const point1 = new Point({ x: 1, y: 1 });
        const point2 = new Point({ x: 3, y: 3 });
        const line = new Line({ point1, point2 });
        line.calculateSlope();

        expect(line.slope).toBe(1);
    });
});

describe('Line calculateNOfLineFunction method', () => {
    it('should correctly calculate the n value', () => {
        const point1 = new Point({ x: 1, y: 1 });
        const point2 = new Point({ x: 3, y: 3 });
        const line = new Line({ point1, point2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();

        expect(line.n).toBe(0);
    });
});

describe('Line getPointOnXAsis method', () => {
    it('should retrieve the correct point on the X-axis', () => {
        const point1 = new Point({ x: 1, y: 1 });
        const point2 = new Point({ x: 3, y: 3 });
        const line = new Line({ point1, point2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const pointOnXAxis = line.getPointOnXAsis();

        expect(pointOnXAxis.x).toBeCloseTo(0);
        expect(pointOnXAxis.y).toBeCloseTo(0);
    });
});

describe('Line getPointOnYAsis method', () => {
    it('should retrieve the correct point on the Y-axis', () => {
        const point1 = new Point({ x: 1, y: 1 });
        const point2 = new Point({ x: 3, y: 3 });
        const line = new Line({ point1, point2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const pointOnYAxis = line.getPointOnYAsis();

        expect(pointOnYAxis.x).toBeCloseTo(0);
        expect(pointOnYAxis.y).toBeCloseTo(0);
    });
});


describe('Line getPointByX method', () => {
    it('should correctly calculate the point by providing an X coordinate', () => {
        const point1 = new Point({ x: 1, y: 1 });
        const point2 = new Point({ x: 3, y: 3 });
        const line = new Line({ point1, point2 });
        line.calculateSlope();
        line.calculateNOfLineFunction();
        const targetX = 4;
        const pointByX = line.getPointByX(targetX);

        // The coordinates are expected to be on the line created by point1 and point2
        expect(pointByX.y).toBeCloseTo(targetX);
    });
});

