window.onload = function () {
    round()
    document.oncontextmenu = Function("return false")
}


function round() {
    const shape = document.getElementById('wrapper')
    const sayHi = document.getElementById('text')
    const content = document.getElementById('container')

    let n = 0
    sayHi.innerText = 'Hi, You Have Clicked ' + n++ + ' Times'

    let regular = '20px'
    let initial = '50%'

    let regularColor = '#464545'
    let initialColor = '#666'

    shape.addEventListener('click', function () {
        console.log(n);
        sayHi.innerText = 'Hi, You Have Clicked ' + n++ + ' Times'
        if (n === 2) {
            alert('It\'s Your First Click')
        }
        shape.style.borderRadius = initial
        const temp = regular
        regular = initial
        initial = temp



        //!container
        content.style.backgroundColor = initialColor
        shape.style.backgroundColor = regularColor
        const tempColor = regularColor
        regularColor = initialColor
        initialColor = tempColor

    })

}