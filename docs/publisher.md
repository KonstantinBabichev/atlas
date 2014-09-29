# Atlas Publisher Notes

Publisher is our proprietary version of Drupal.

## Example Publisher Code
Publisher is my employer's version of Drupal. There is functionality in this example system to connect to a test version of Publisher

### Available Content Types

* Show [show.json](http://pubapi.r6by.com/show.json)
* Gallery [show.json](http://pubapi.r6by.com/gallery.json)

### Publisher Factory Details
* TODO: should 'publisher' be a component, with factory and the below as subfolders? 


### URLs
#### All Shows (#/show)
* pre-processed url: #/:a
* controller: /app/content-type/content-type-controller.js (ContentTypeCtrl)
* view: /app/content-type/content-type.html (uses ng-switch on 'contentType')
	* directive: /app/components/show/shows-directive.js (shows)
	* directive-view: /app/components/show/shows.html
		
#### Single Show (#/show/[show.id])
* pre-processed url: #/:a/:contentItem
* controller: /app/content-item/content-item-controller.js (ContentItemCtrl)
* view: /app/content-item/content-item.html (uses ng-switch on 'contentItem')
	* directive: /app/components/show/show-directive.js (show)
	* directive-view: /app/components/show/show.html
		* Factory: /app/components/gallery/galleries-factory.js (getGalleries)
			* Object: galleriesFromShowId returns: Galleries Array from gallery.show[0].id
		* directive: /app/components/gallery/galleries-directive.js (galleriesSmall)
		* directive-view: /app/components/gallery/galleries-small.html
		* directive: /app/components/object-viewer/object-viewer-directive.js (object)
		* directive-view: /app/components/object-viewer/object-viewer.html

#### Single Gallery under a Show (#/show/[show.id]/[gallery.id])
* pre-processed url: #/show/:a/:galleryId
* controller: /app/components/gallery/gallery-controller.js (GalleryCtrl)
* view: /app/components/gallery/gallery.html
	* Factory: /app/components/show/show-factory.js (getShow)
		* Object: showFromShowId returns: Show object from gallery.show[0].id
	* directive: /app/components/show/show-directive.js (showSmall)
	* directive-view: /app/components/show/show-small.html
	* directive: /app/components/object-viewer/object-viewer-directive.js (object)
	* directive-view: /app/components/object-viewer/object-viewer.html
