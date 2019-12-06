/**
 * @desc CAMEL_CASE与camelCase 互转
 * @author lilywang.cd@gmail.com
 * @createDate 2019-12-05
 */

const [,, word] = process.argv
if (word) {
  // 判断是否以 camelCase 格式输入
  if (/^[a-z]+([A-Z][a-z]*)+$/g.test(word)) {
    const result = word.split('').map(letter => {
      if (letter === letter.toUpperCase()) {
        return '_' + letter.toUpperCase()
      }
      return letter.toUpperCase()
    }).join('')
    
    console.log(JSON.stringify({
      items: [{
        title: result,
        arg: result
      }]
    }))
  } else if (/^[A-Z]+(_[A-Z]+)+$/g.test(word)) {
    // 判断是否以 CAMEL_CASE 格式输入
    const result = word.toLowerCase().replace(/_([a-z])/g, (match, p1) => p1.toUpperCase())
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
