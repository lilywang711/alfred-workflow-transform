
// 将文本转换为全大写
function toUpperCase(text) {
  return text.toUpperCase();
}

// 将文本转换为全小写
function toLowerCase(text) {
  return text.toLowerCase();
}

// 将文本的每个单词的首字母转换为大写
function capitalizeWords(text) {
  return text.replace(/\b\w/g, (match) => match.toUpperCase());
}

// 将下划线命名转换为驼峰命名
function underscoreToCamelCase(text, capitalizeFirst) {
  const words = text.split('_');
  const camelWords = words.map((word, index) => {
    if (index === 0 && !capitalizeFirst) {
      return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return camelWords.join('');
}


// 将驼峰命名转换为下划线命名
function camelCaseToUnderscore(text) {
  return text.replace(/([a-z\d])([A-Z])/g, '$1_$2').toUpperCase();
}

// 将行首字母转换为大写
function capitalizeFirstLetterOfLine(text) {
  return text.replace(/^(.)/gm, (match) => match.toUpperCase());
}

// 将句首字母转换为大写
function capitalizeFirstLetterOfSentence(text) {
  return text.replace(/(^|[.!?]\s+)(.)/g, (match, separator, letter) => separator + letter.toUpperCase());
}

// 将中线连接的变量转换为小驼峰命名
function hyphenToCamelCase(text) {
  return text.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}



function output(data) {
  return console.log(JSON.stringify({ items: data }))
}

function main() {
  const [,, content] = process.argv


  if (content) {
    const upper = toUpperCase(content);
    const lower = toLowerCase(content);
    const capitalize = capitalizeWords(content);
    const underscore = underscoreToCamelCase(content, true) + ' | '+ underscoreToCamelCase(content, false);
    const camelCase = camelCaseToUnderscore(content);
    const capitalizeFirstLetter = capitalizeFirstLetterOfLine(content);
    const capitalizeFirstLetterOfS = capitalizeFirstLetterOfSentence(content);
    const hyphenToCamelCaseConst = hyphenToCamelCase(content);

    const result = [
      { order: 1, subtitle: '将文本转换为全大写', arg: upper, title: upper },
      { order: 1, subtitle: '将文本转换为全小写', arg: lower, title: lower },
      { order: 1, subtitle: '将文本的每个单词的首字母转换为大写', arg: capitalize, title: capitalize },
      { order: 99, subtitle: '将下划线分割转换为驼峰命名', arg: underscore, title: underscore },
      { order: 100, subtitle: '将驼峰命名转换为下划线命名', arg: camelCase, title: camelCase },
      { order: 98, subtitle: '将中线连接变量转换为小驼峰', arg: hyphenToCamelCaseConst, title: hyphenToCamelCaseConst },
      { order: 1, subtitle: '将行首字母转换为大写', arg: capitalizeFirstLetter, title: capitalizeFirstLetter },
      { order: 1, subtitle: '将句首字母转换为大写', arg: capitalizeFirstLetterOfS, title: capitalizeFirstLetterOfS },
    ]

    return output(result.sort((a, b) => b.order - a.order))
  }
}

main()
