
---

## angularApp.directiveExample
### File Path
/app/components/directive-example/directive-example-directive.js


### Description
Creates an empty DIV, fills it with small text. This is an example, non templateUrl directive here as a basis for building the Yeoman generator.


  
  
  



---

## angularApp.galleries
### File Path
/app/components/gallery/galleries-directive.js


### Description
Creates the ```<galleries>``` element


  
  
  



---

## angularApp.galleriesSmall
### File Path
/app/components/gallery/galleries-small-directive.js


### Description
Creates the ```<galleries-small>``` element


### Dependencies
* **angularApp.getGalleries**

  
  
  



---

## angularApp.gallery
### File Path
/app/components/gallery/gallery-directive.js


### Description
Creates the ```<gallery>``` element


  
  
  



---

## angularApp.gallerySmall
### File Path
/app/components/gallery/gallery-small-directive.js


### Description
Creates the ```<gallery-small>``` element


  
  
  



---

## angularApp.loginForm
### File Path
/app/components/login-form/login-form-directive.js


### Description
Creates the ```<login-form>``` element


  
  
  



---

## angularApp.objectViewer
### File Path
/app/components/object-viewer/object-viewer-directive.js


### Description
Creates the ```<object-viewer>``` html element, which breaks down an object's parts and gives each part an html wrapper


### Dependencies
* **angularApp.RecursionHelper**

  
  
  



---

## angularApp.show
### File Path
/app/components/show/show-directive.js


### Description
Creates the ```<show>``` element


### Dependencies
* **angularApp.getGalleries**

  
  
  



---

## angularApp.showSmall
### File Path
/app/components/show/show-small-directive.js


### Description
Creates the ```<show-small>``` element


### Dependencies
* **angularApp.getGalleries**

  
  
  



---

## angularApp.shows
### File Path
/app/components/show/shows-directive.js


### Description
Creates the ```<shows>``` element


  
  
  



---

## angularApp.RecursionHelper
### File Path
/app/components/object-viewer/object-viewer-factory.js


### Description
An Angular service which helps with creating recursive directives.


  
  
  



---

## angularApp.checkValueType
### File Path
/app/components/object-viewer/check-value-type/check-value-type-filter.js


### Description
Returns the item's type


  
  
  



---

## angularApp.yesNo
### File Path
/app/components/yes-no-filter/yes-no-filter.js


### Description
Creates a filter which takes a boolean true/false and turns it into a {string} 'yes'/'no'


  
  
  



---

## angularApp.GalleryCtrl
### File Path
/app/components/gallery/gallery-controller.js


### Description
Controller that calls REST service to retrieve a single gallery's object. Also grabs the gallery's parent show object using the getShow factory's showFromShowId method


### Dependencies
* **angularApp.getShow**

  
  
  



---

## angularApp.getGalleries
### File Path
/app/components/gallery/galleries-factory.js


### Description
Provides methods for getting full gallery objects from our REST service


  
  
  



---

## angularApp.getShow
### File Path
/app/components/show/show-factory.js


### Description
Provides methods for getting full show objects from our REST service


  
  
  



---

## angularApp.publisherRestangularFactory
### File Path
/app/components/publisher/rest-service/publisher-restangular-factory.js


### Description
REST service configuration for our Publisher instance


  
  
  



---

## angularApp.ContentItemCtrl
### File Path
/app/content-item/content-item-controller.js


### Description
* Controller that takes the first and second parameters of the URL and checks our REST service. Response from service is an single object added to the scope as 'contentItem'


  
  
  



---

## angularApp.ContentTypeCtrl
### File Path
/app/content-type/content-type-controller.js


### Description
Controller that takes the first parameter of the URL and checks our REST service. Response from service is an object added to the scope as 'allContentItems'


  
  
  



---

## angularApp.LoginCtrl
### File Path
/app/login/login-controller.js


### Description
Controller that is a placeholder for the /login section controller


  
  
  



---

## angularApp.MainCtrl
### File Path
/app/main/main-controller.js


### Description
Controller that creates an example object


  
  
  

