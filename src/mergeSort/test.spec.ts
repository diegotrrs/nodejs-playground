import { combineSortedArrays } from ".";

describe("combineSortedArrays ", () => {

	describe("combine two sorted arrays of different size ", () => {

		describe("when one of them has one element ", () => {
			it("should combine them when the second one is smaller than the first one", () => {
				expect(combineSortedArrays([0, 1, 2, 3], [3])).toEqual([0, 1, 2, 3, 3]);
			});
	
			it("should combine them when the first one is smaller than the second one", () => {
				expect(combineSortedArrays([10], [0, 1, 2, 3])).toEqual([0, 1, 2, 3, 10]);
			});
		})

		describe("when there are elements in common ", () => {
			it("should combine them correctly", () => {
				expect(combineSortedArrays([0, 1, 2, 3], [0, 0, 3, 3])).toEqual([0, 0, 0, 1, 2, 3, 3, 3]);
			});
		})
		
	})

	describe("combine two sorted arrays of one element each ", () => {
		it("should combine them correctly", () => {
			expect(combineSortedArrays([0], [3])).toEqual([0, 3]);
		});		
	})
	
});

