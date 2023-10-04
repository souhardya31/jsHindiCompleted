const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift'
}

for (const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "cpp", "swift"]
for (const key in programming) {
    console.log(`key: ${key}`, `value: ${programming[key]}`);
}

//can't be used in maps