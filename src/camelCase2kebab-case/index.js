/**
 * @desc kebab-case 与 camelCase 互换
 * @author lilywang.cd@gmail.com
 * @createDate 2019-12-05
 */
const [,, word] = process.argv
if (word) {
  // 判断是否以 kebab-case 格式输入
  console.log('test', /^[a-z]+(-[a-z]+)+$/g.test(word))
  if (/^[a-z]+(-[a-z]+)+$/g.test(word)) {
    const reg = /-([a-z])/g
    const result = word.replace(reg, (match, p1) => p1.toUpperCase())
    console.log(JSON.stringify({
      items: [{
        title: result,
        arg: result
      }]
    }))
  } else if (/^[a-z]+([A-Z][a-z]*)+$/g.test(word)) {
    // 判断是否以 camelCase 格式输入
    const translatedArr = word.split('').map(letter => {
      if (letter === letter.toUpperCase()) {
        return '-' + letter.toLowerCase()
      }
      return letter
    })
    const result = translatedArr.join('')
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
