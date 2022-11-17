
function ver(){
    var navigator={
        language: navigator.language ,
        cookieEnabled: navigator.cookieEnabled,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        product: navigator.product,
        userAgent: navigator.userAgent,
        muestraDatos:function(){
            console.log("Language: "+this.language+" CookieEnabled: "+this.cookieEnabled+" AppName: "+this.appName+" AppVersion: "+this.appVersion+" Product: "+this.product+" UserAgent: "+this.userAgent);
        }
    };
    
    var navigator = Object.create(navigator);
    navigator.muestraDatos;
}