/**给你一个整数数组 nums ，和一个整数 target 。
该整数数组原本是按升序排列，但输入时在预先未知的某个点上进行了旋转。
（例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] ）。
请你在数组中搜索 target ，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
示例 1：
输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
示例 2：
输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
示例 3
输入：nums = [1], target = 0
输出：-1
提示：
1 <= nums.length <= 5000
-10^4 <= nums[i] <= 10^4
nums 中的每个值都 独一无二
nums 肯定会在某个点上旋转
-10^4 <= target <= 10^4
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start_index = 0
    let end_index = nums.length - 1
    let len = nums.length
    let half = Math.floor(len / 2)
    if (target >= nums[0]) {
        if (target >= nums[half]) {
            if (nums[0] > nums[half]) {
                end_index = half
            } else {
                start_index = half
            }
        } else {
            end_index = half
        }
    } else {
        if (target >= nums[half]) {
            start_index = half
        } else {
            if (nums[half] > nums[len - 1]) {
                start_index = half
            } else {
                end_index = half
            }
        }
    }
    for (let i = start_index; i <= end_index; i++) {
        if (nums[i] == target) {
            return i
        }
    }
    return -1
};
var search1 = function (nums, target) {
    let low = 0
    let high = nums.length - 1
    let mid = Math.floor((low + high) / 2)
    while (low <= high) {
        if (nums[mid] == target) return mid
        if (nums[mid] < nums[high]) {
            if (target <= nums[high] && target > nums[mid]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        } else {
            if (target < nums[mid] && target > nums[high]) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
        mid = Math.floor((low + high) / 2)
    }
    return -1
}
console.log(search1(

    [4, 5, 6, 7, 0, 1, 2], 0))