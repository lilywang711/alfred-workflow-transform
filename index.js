/**
 * @desc kebab-case 与 camelCase 互转 / CAMEL_CASE与camelCase 互转
 * @author lilywang.cd@gmail.com
 * @createDate 2019-12-05
 */
// 注意，调试时不要用 console.log ，用别的都行
const [,, word] = process.argv
if (word) {
  if (/^[a-z]+([A-Z][a-z]*)+$/g.test(word)) {
    // 判断是否以 camelCase 格式输入
    const hyphenateText = hyphenate(word, 'kebab-case')
      const SNAKE_CASEText = camelCase2SNAKE_CASE(word, 'SNAKE_CASE')
      const snake_caseText = camelCase2snake_case(word, 'snake_case')
    const pascalText = pascalCase2camelCase(word, 'PascalCase')
    console.error(hyphenateText, SNAKE_CASEText, snake_caseText)
    
      console.log(JSON.stringify({
        items: [format(hyphenateText), format(SNAKE_CASEText), format(snake_caseText), format(pascalText)]
      }))
    }
  else if (/^[a-z]+(-[a-z]+)+$/g.test(word)) {
    // 判断是否以 kebab-case 格式输入
    const hyphenateText = hyphenate(word, 'camelCase')
    console.log(JSON.stringify({
      items: [format(hyphenateText)]
    }))
  } else if (/^[A-Z]+(_[A-Z]+)+$/g.test(word)) {
    // 判断是否以 CAMEL_CASE 格式输入
    const camelCaseText = camelCase2SNAKE_CASE(word, 'camelCase')
    const kebabCaseText = word.toLowerCase().replace(/_([a-z])/g, (match, p1) => '-' + p1)
    const snake_caseText = word.toLowerCase()
    
    console.log(JSON.stringify({
      items: [format(camelCaseText), format(kebabCaseText), format(snake_caseText)]
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

function f () {

}
/**
 * camelCase => snake_case
 * @param word
 */
function camelCase2snake_case (word = '', target = 'snake_case') {
  if (target === 'snake_case') {
    return word.replace(/([A-Z])/g, (match, p1) => '_' + p1).toLowerCase()
  }
  return  word.replace(/(_[a-z])/g, (match, p1) => p1.toUpperCase())
}

/**
 * camelCase <=> kebab-case 互转
 * @param word
 * @param target camelCase | kebab-case
 */
function hyphenate (word, target = 'kebab-case') {
  if (target === 'kebab-case') {
    return word.replace(/\B([A-Z])/g, '-$1').toLowerCase()
  } else {
    return word.replace(/-(\w)/g, (match, p1) => p1 ? p1.toUpperCase() : '')
  }
}

/**
 * PascalCase <=> camelCase 互转
 * @param word
 * @param target  PascalCase | camelCase
 * @return {string}
 */
function pascalCase2camelCase (word, target = 'camelCase') {
  const splitArray = word.split('')
  const firstLetter =  splitArray.shift()
  if (target === 'camelCase') {
     splitArray.unshift(firstLetter.toLowerCase())
    return splitArray.join('')
  }
   splitArray.unshift(firstLetter.toUpperCase())
  return splitArray.join('')
}

/**
 * camelCase <=> SNAKE_CASE 互转
 * @param word
 * @param target camelCase | SNAKE_CASE
 */
function camelCase2SNAKE_CASE (word = '', target='SNAKE_CASE') {
  if (target === 'SNAKE_CASE') {
    return word.replace(/\B([A-Z])/g, '_$1').toUpperCase()
  } else {
    return word.toLowerCase().replace(/_([a-z])/g, (match, p1) => p1.toUpperCase())
  }
}

function format (title) {
  return {title, arg: title}
}
