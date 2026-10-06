const getApp = () => {
    const saveApp = localStorage.getItem('app')
    if (saveApp) {
        return JSON.parse(saveApp)
    }
    return []
}

const saveApps = (app) => {
    localStorage.setItem('app', JSON.stringify(app))
}

const addApp = (app) => {
    const saveApp = getApp()
    const alreadyAdded = saveApp.find(ap => ap.id === app.id)
    if (alreadyAdded) {
        return false
    }
    else {
        saveApp.push(app)
        saveApps(saveApp)
        return true
    }
}


const removeApp = (app) => {
    const saveApp = getApp()
    const remove = saveApp.filter(ap => ap.id !== app)
    saveApps(remove)
}
export { getApp, addApp, removeApp }