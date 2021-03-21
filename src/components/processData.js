const findMin = (array) => {
    let min = 99999999
    array.map((value) => {
        if(value < min) {
            min = value
        }
    })

    return min
}

const findMax = (array) => {
    let max = -99999999
    array.map((value) => {
        if(value > max) {
            max = value
        }
    })

    return max
}

const processData = (array) => {
    let kp = []
    let x = []
    let y = []
    let z = []
    for (let i = 1; i < array.length; i++) {
        kp.push(parseFloat(array[i][0]));
        x.push(parseFloat(array[i][1]));
        y.push(parseFloat(array[i][2]));
        z.push(parseFloat(array[i][3]));
    }

    console.log(findMin(x), findMax(x))
    let data = {
        min_X: findMin(x),
        max_X: findMax(x),
        min_Y: findMin(y),
        max_Y: findMax(y),
        min_Z: findMin(z),
        max_Z: findMax(z),
    }

    return {
        kp: kp,
        x: x, 
        data: data
    }
}

export default processData