//import dataUserView from './template/dataUserView.js'

const usersContainer = document.querySelector('.usersContainer')
const inputUsers = document.querySelector('.input-users')
const btnSearch = document.querySelector('.btn-search')


function heandleError(response){
    console.log(response)
    if(!response.ok){
        throw Error(response.status)
    } 
    return response
}



function dataUserView(data) {
   const bio = data.bio || 'Não definido'
   const name = data.name || 'Não definido'
    
    const divStyle = 'md:p-10 rounded shadow-md'
    const divImgStyle = 'flex justify-center'
    const imgStyle = 'w-80 rounded shadow-md'
    const divUlStyle = 'flex justify-center'
    const liStyle = 'bg-gray-300 rounded-md shadow-md p-2 my-2 text-lg'
    const divBtnStyle = 'flex justify-center'
    const btnRepositoriesStyle = 'bg-gray-800 p-2 text-white rounded hover:bg-gray-700 m-4'
    const divContainerRepositoriesStyle = 'containerRepositories grid lg:grid-cols-2'

    const div = document.createElement('div')
    div.classList = `${divStyle}`
    const divImg = document.createElement('div')
    divImg.classList = `${divImgStyle}`
    const img = document.createElement('img')
    img.classList = `${imgStyle}`
    img.setAttribute('src',`${data.avatar_url}`)

    const divUl = document.createElement('div')
    divUl.classList = `${divUlStyle}`
    const ul = document.createElement('ul')
    const p1 = document.createElement('p')
    p1.classList = `${liStyle}`
    p1.textContent = name

    const p2 = document.createElement('p')
    p2.classList = `${liStyle}`
    p2.textContent = bio
   

    const divBtn = document.createElement('div')
    divBtn.classList = `${divBtnStyle}`
    const btnRepositories = document.createElement('button')
    btnRepositories.classList = `btn-repositories ${btnRepositoriesStyle}`
    btnRepositories.textContent = 'Repositorios'
    const btnRepositoriesTop3 = document.createElement('button')
    btnRepositoriesTop3.classList = `btn-repositories-top3 ${btnRepositoriesStyle}`
    btnRepositoriesTop3.textContent = 'Respositorios Top3'

    const divContainerRepositories = document.createElement('div')
    divContainerRepositories.classList = `${divContainerRepositoriesStyle}`
    

    divImg.appendChild(img)

    ul.appendChild(p1)
    ul.appendChild(p2)
    divUl.appendChild(ul)

    divBtn.appendChild(btnRepositories)
    divBtn.appendChild(btnRepositoriesTop3)

    div.appendChild(divImg)
    div.appendChild(divUl)
    div.appendChild(divBtn)
    div.appendChild(divContainerRepositories)

    usersContainer.innerHTML = ''
    return usersContainer.appendChild(div)

}



function dataRepositories (data) {

    const [...newData] = data

    const btnrepositories = document.querySelector('.btn-repositories')
    const btnrepositoriesTop3 = document.querySelector('.btn-repositories-top3')
    const containerRepositories = document.querySelector('.containerRepositories')  

      btnrepositories.addEventListener('click', () => {
        containerRepositories.innerHTML = ''
        newData.map(repos => {

            const description = repos.description || 'não definido'
            const language = repos.language || 'não definido'

            const divRepositoriesAllStyle = 'bg-white rounded p-4 m-4 border border-gray-300 shadow'
            const ballGreenStyle = 'bg-green-600 w-4 h-4 mt-1 rounded-full'

            const divRepositoriesAll = document.createElement('div')
            divRepositoriesAll.classList = `${divRepositoriesAllStyle}`

            const pName = document.createElement('p')
            pName.classList = 'font-bold'
            pName.textContent = `${repos.name}`
            const pDescription = document.createElement('p')
            pDescription.textContent = `${description}`

            const divStargazersForks = document.createElement('div')
            divStargazersForks.classList = 'flex mt-4'
            const ballGreen = document.createElement('span')
            ballGreen.classList = `${ballGreenStyle}`
            const pLanguage = document.createElement('p')
            pLanguage.classList = 'ml-1'
            pLanguage.textContent = `${language}`
            const pStargazers = document.createElement('p')
            pStargazers.classList = 'ml-4'
            pStargazers.textContent = `${repos.stargazers_count}`
            const pForks = document.createElement('p')
            pForks.classList = 'ml-4'
            pForks.textContent = `${repos.forks}`

            divStargazersForks.appendChild(ballGreen)
            divStargazersForks.appendChild(pLanguage)
            divStargazersForks.appendChild(pStargazers)
            divStargazersForks.appendChild(pForks)


            divRepositoriesAll.appendChild(pName)
            divRepositoriesAll.appendChild(pDescription)
            divRepositoriesAll.appendChild(divStargazersForks)

            return containerRepositories.appendChild(divRepositoriesAll)

        
        }) 
      })

      
      btnrepositoriesTop3.addEventListener('click', () => {

        const top3Repositiorio = data.sort((acc, current) => {
            return  current.watchers - acc.watchers
        }).slice(0,3).map(repos => repos)
    

        containerRepositories.innerHTML = ''
        top3Repositiorio.map(repos => {

            const description = repos.description || 'não definido'
            const language = repos.language || 'não definido'

            const divRepositoriesAllStyle = 'bg-white rounded p-4 m-4 border border-gray-300 shadow'
            const ballGreenStyle = 'bg-green-600 w-4 h-4 mt-1 rounded-full'

            const divRepositoriesAll = document.createElement('div')
            divRepositoriesAll.classList = `${divRepositoriesAllStyle}`

            const pName = document.createElement('p')
            pName.classList = 'font-bold'
            pName.textContent = `${repos.name}`
            const pDescription = document.createElement('p')
            pDescription.textContent = `${description}`

            const divStargazersForks = document.createElement('div')
            divStargazersForks.classList = 'flex mt-4'
            const ballGreen = document.createElement('span')
            ballGreen.classList = `${ballGreenStyle}`
            const pLanguage = document.createElement('p')
            pLanguage.classList = 'ml-1'
            pLanguage.textContent = `${language}`
            const pStargazers = document.createElement('p')
            pStargazers.classList = 'ml-4'
            pStargazers.textContent = `${repos.stargazers_count}`
            const pForks = document.createElement('p')
            pForks.classList = 'ml-4'
            pForks.textContent = `${repos.forks}`

            divStargazersForks.appendChild(ballGreen)
            divStargazersForks.appendChild(pLanguage)
            divStargazersForks.appendChild(pStargazers)
            divStargazersForks.appendChild(pForks)


            divRepositoriesAll.appendChild(pName)
            divRepositoriesAll.appendChild(pDescription)
            divRepositoriesAll.appendChild(divStargazersForks)

            return containerRepositories.appendChild(divRepositoriesAll)
        
        }) 

      })
}

btnSearch.addEventListener('click', event => {
    const users = inputUsers.value.trim()
    event.preventDefault()
    toObtainUsers(users)
    toObtainRepositories(users)
})


function toObtainUsers(users){
    const apiUrl = `https://api.github.com/users/${users}`
    fetch(apiUrl)
        .then(response => heandleError(response))
        .then(response => response.json())
        .then(data => dataUserView(data))
}


function toObtainRepositories () {
    const users = inputUsers.value.trim()
    const apiUrl = `https://api.github.com/users/${users}/repos`
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => dataRepositories(data))
}
