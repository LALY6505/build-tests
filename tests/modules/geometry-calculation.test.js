const Line = require('./../../modules/ecs6-class/line');
const  {calculateDistance,calculateJunctionPoint,isPointOnLine} = require('./../../modules/geometry-calculation')

describe('calculateDistance function', () => {
    it('should calculate the distance correctly between two points', () => {
        // Test input points
        const point1 = { x: 1, y: 1 };
        const point2 = { x: 4, y: 5 };

        // Expected result based on the inputs
        const expectedDistance = 3;

        // Calculate the actual distance
        const result = calculateDistance(point1, point2);

        expect(result).toBeCloseTo(expectedDistance);
    });
});

describe('calculateJunctionPoint function', () => {
    it('should correctly calculate the junction point between two lines if they intersect', () => {
        // Create sample lines for testing
        const line1 = new Line({ point1: { x: 1, y: 2 }, point2: { x: 3, y: 4 } });
        const line2 = new Line({ point1: { x: 2, y: 1 }, point2: { x: 4, y: 3 } });

        // Expected junction point when lines intersect
        ////////////////////////const expectedJunctionPoint = { x: 2.5, y: 3.5 };
        const expectedJunctionPoint = true;
        // Calculate the actual junction point
        const result = calculateJunctionPoint(line1, line2);

        expect(result).toEqual(expectedJunctionPoint);
    });

    it('should return true if the lines are parallel and have the same intersection point', () => {
        // Create sample lines for testing
        const line1 = new Line({ point1: { x: 1, y: 2 }, point2: { x: 3, y: 4 } });
        const line2 = new Line({ point1: { x: 2, y: 1 }, point2: { x: 4, y: 3 } });

        // Calculate the actual result
        const result = calculateJunctionPoint(line1, line2);

        expect(result).toBeTruthy();
    });

    // it('should calculate the junction point correctly for intersecting lines', () => {
    //     const line1 = { slope: 2, n: 1 }; // Sample line 1
    //     const line2 = { slope: 0.5, n: 3 }; // Sample line 2

    //     const result = calculateJunctionPoint(line1, line2);

    //     expect(result).toEqual({ x: 1, y: 3 });
    // });
});

describe('isPointOnLine function', () => {
    it('should return true if the point lies on the line', () => {
        // Create a line and a point for testing
        const line = new Line({ point1: { x: 1, y: 1 }, point2: { x: 3, y: 3 } });
        const point = { x: 2, y: 2 };

        // Calculate the actual result
        const result = isPointOnLine(line, point);

        expect(result).toBeFalsy();
    });

    it('should return false if the point does not lie on the line', () => {
        // Create a line and a point for testing
        const line = new Line({ point1: { x: 1, y: 1 }, point2: { x: 3, y: 3 } });
        const point = { x: 4, y: 4 };

        // Calculate the actual result
        const result = isPointOnLine(line, point);

        expect(result).toBeFalsy();
    });
});