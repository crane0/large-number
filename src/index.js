export default function add(a, b) {
  // a 和 b 的长度
  let i = a.length - 1
  let j = b.length - 1

  // 进位
  let carry = 0
  // 最终结果，设置为字符串
  let ret = ''

  while (i >= 0 || j >= 0) {
    // 要进行相加的 2 个数字
    let x = 0
    let y = 0
    let sum

    if (i >= 0) {
      // - '0' 是为了从字符串转为数值
      // a[i] 表示从个位数算起
      x = a[i] - '0'
      i--
    }

    if (j >= 0) {
      y = b[i] - '0'
      j--
    }

    sum = x + y + carry

    if (sum >= 10) {
      carry = 1
      sum -= 10
    } else {
      carry = 0
    }

    // ret 是字符串
    ret = sum + ret
  }

  if (carry) {
    ret = carry + ret
  }

  return ret
}
