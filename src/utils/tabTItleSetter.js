
let routeTitle = ""
let siteTitle = ""

function setTitle(){
    if(!routeTitle && !siteTitle){
        document.title = "Loading..."
    }else if (!!routeTitle && !!siteTitle){
        document.title = routeTitle + " | " + siteTitle
    }else {
        document.title = routeTitle ?? siteTitle
    }
}

export default {
    setRouteTitle(titleStr){
        routeTitle = titleStr
        setTitle()
    },
    setSiteTitle(titleStr){
        siteTitle = titleStr
        setTitle()
    }
}