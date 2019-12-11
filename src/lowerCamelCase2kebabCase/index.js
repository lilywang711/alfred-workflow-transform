/**
 * @desc kebab-case 与 camelCase 互换
 * @author lilywang.cd@gmail.com
 * @createDate 2019-12-05
 */
const [,, word] = process.argv
if (word) {
  // 判断是否以 kebab-case 格式输入
  if (/^[a-z]+(-[a-z]+)+$/g.test(word)) {
    const camelizeRE = /-(\w)/g;
    const result = word.replace(camelizeRE, (match, p1) => p1 ? p1.toUpperCase() : '')
    console.log(JSON.stringify({
      items: [{
        title: result,
        arg: result
      }]
    }))
  } else if (/^[a-z]+([A-Z][a-z]*)+$/g.test(word)) {
    // 判断是否以 camelCase 格式输入
    
    const hyphenateRE = /\B([A-Z])/g;
    const hyphenate = str => str.replace(hyphenateRE, '-$1').toLowerCase()
    const result = hyphenate(word)
    
    console.log(JSON.stringify({
      items: [{
        title: result,
        arg: result
      }]
    }))
  } else {
    console.log(JSON.stringify({
      items: [{
        title: '等待输入正确格式..',
        arg: '等待输入正确格式..'
      }]
    }))
  }
}
