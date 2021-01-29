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

async function addName(newName){
    let allNames = await getData(names)
    allNames.push(newName)
    console.log(allNames)
}

addName('Kang Song Joo')