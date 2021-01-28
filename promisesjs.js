let names = ['Kim Seon Ho', 'Park Seo Joon', 'Park Shin Hye', 'Shin Hye Sun']

function getData(dataItems) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(dataItems)
            }, 3000);
        }
        catch (error) {
            reject(console.log(error))
        }
    })
}

getData(names).then(data=>{
    let newName = 'Han Yoo Joo'
    data.push(newName)
    return data
}).then(secondData=>{
    console.log(secondData)
})