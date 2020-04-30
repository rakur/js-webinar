const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator
    describe("base", () => {
        it("should exist", () => {
            // Given
            const c = calc(3);
            // When
            // Then
            expect(c.v).exist;
        });

        it("should have proper value", () => {
            // Given
            const c = calc(3);
            // When
            // Then
            expect(c.v).to.equal(3);
        });
    });

    describe("addition", () => {
        it("should exist", () => {
            // Given
            const c = calc(3);
            // When
            // Then
            expect(c.add).exist;
        });

        it("should work for positive integers", () => {
            // Given
            const c = calc(3);
            // When
            // Then
            expect(c.add(5).v).to.equal(8);
        });

        it("should work for negative integers", () => {
            // Given
            const c = calc(-3);
            // When
            // Then
            expect(c.add(-5).v).to.equal(-8);
        });

        it("should work for mixed integers", () => {
            // Given
            const c = calc(3);
            // When
            // Then
            expect(c.add(-5).v).to.equal(-2);
        });

        it("should work for floating point numbers", () => {
            // Given
            const c = calc(3.5);
            // When
            // Then
            expect(c.add(5.3).v).to.equal(8.8);
        });
    });

    describe("substraction", () => {
        it("should exist", () => {
            // Given
            const c = calc(3);
            // When
            // Then
            expect(c.minus).exist;
        });

        it("should work for positive integers", () => {
            // Given
            const c = calc(3);
            // When
            // Then
            expect(c.minus(5).v).to.equal(-2);
        });

        it("should work for negative integers", () => {
            // Given
            const c = calc(-3);
            // When
            // Then
            expect(c.minus(-5).v).to.equal(2);
        });

        it("should work for mixed integers", () => {
            // Given
            const c = calc(3);
            // When
            // Then
            expect(c.minus(-5).v).to.equal(8);
        });

        it("should work for floating point numbers", () => {
            // Given
            const c = calc(3.4);
            // When
            // Then
            expect(c.minus(5.3).v).to.equal(-1.9);
        });
    });

});