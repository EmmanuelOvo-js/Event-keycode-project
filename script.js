function showKey(e) {
    const insert = document.getElementById('insert')
    insert.innerText = ''

    const keyObj = {
        'e.key': e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code
    }

    console.log(keyObj)

    for (let key in keyObj) {
        const div = document.createElement('div')
        div.className = 'key'

        const dyText = document.createTextNode(keyObj[key])
        const small = document.createElement('small')
        const smallText = document.createTextNode(key)

        //append
        div.appendChild(dyText)
        div.appendChild(small)
        small.appendChild(smallText)

        //append to target ID div
        insert.appendChild(div)

    }

}

window.addEventListener('keydown', showKey)