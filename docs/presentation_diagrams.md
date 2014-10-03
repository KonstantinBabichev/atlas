# Presentation Diagrams
what are the artifacts that the developer is authoring and checking into source control?

* diagram of what each file does and goes

## Flow to create the final css

1. Editor saves a .scss file
2. Gulp Taskrunner is watching all .scss files and sees the change
3. Gulp triggers the compass task
4. Compass Task triggers:
	1. css globbing
		* searches for all scss files, and places an import command in main .scss
	2. scss linting
		* grabs rule definitions for .sass and compass files
		* goes through each .scss file and searches for errors
		* returns errors to console
5. Compass compiles our SASS/Compass syntax and converts it to plain CSS
6. Compass replaces the main styles.css with the newly-compiled CSS
7. Browser-Sync is triggered, and refreshes the styles.css file (and only that file) in ALL connected browsers on all devices