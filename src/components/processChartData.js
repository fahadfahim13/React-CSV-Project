const processChartData = (array) => {
    return{
        labels: array.kp,
        datasets: [
            {
            label: 'X',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: array.x
            }
        ]
    }
}

export default processChartData