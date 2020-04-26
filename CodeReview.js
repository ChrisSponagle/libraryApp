// ***Code Review***

// I've organized my code review below into various categories to easily indicate 
// where I could see improvements in the code

// Spacing/Indentation
//     -There are several instances where the code could be more neatly organized
//     -App.js:line 5-16 data array is a bit messy. At times there are spaces between 2, other
//     times there are not. Other times, there are random spaces within the object (line 12, '2005')
//     - App.js:line 49-73 requires proper indentation for clearer code. For example, line 50's Modal 
//     closing tag it not lined up, line 60 View and Modal should be lined up on separate lines, it is
//     difficult to tell what ScrollView is the parent up with the View beneath it not indented and 
//     ScrollView itself also not properly being indented. Lines 40-44 are also quite messy and it is 
//     hard to keep track of what Text's are within which Touchable components

// Misspelling
//     -App.js: line 11 'name' is misspelled as 'namee'
//     -App.js: line 59 'width' is misspelled as 'with'

// Platform-specific
//     -App.js: line 42 'TouchableNativeFeedback' only works with Android not iOS so it could be an issue
//     for a cross-platform app. I would recommend TouchableOpacity or TouchableHighlight as more
//     universal solutions
//     - Due to many iOS product's having a larger top bevel, it's recommended to create some top padding
//     speifically for iOS by importing 'Platform' from react-native

// Folder/file organization
//     - Should be organizing 'assets' in a cleaner file layout, creating separate folders under assets
//     for 'images' and 'fonts' would be one option. Also, it's common to have separate folders for 
//     'css' and 'components' as well, usually under a centralizing 'src' folders

// Ineffecient/Incorrect use of function
//     -App.js: line 53 visible={theRobot != null}, it is better to use a boolean for this rather 
//     than null/!null
//     -App.js: line 73 there's a rogue 'return' that shouldn't be there
//     -App.js: line 42 Should be using .bind() for function clickRobot and ideally placing it in the
//     constructor at line 24/25
//     -App.js: line 40 forEach has been shown to be around 70% slower than other similar solutions such as
//     .map or .filter, I would recommend replacing forEach with a more efficient function
//     -App.js: line 50 'Image' is incorrectly calling uri: theRobot.img which will return an error, 
//      theRobot.img is not a string and there's no image variable imported above
    
// Optimization
//     -App.js: line 19, when possible, it's useful to use PureComponents to increase speed and 
//     efficiency of App
//     -App.js: line 38 'let theRobot = this.state.robot;', personally, I would write this as 
//     'const { robot } = this.state', furthermore this declared 'let theRobot' is not even used. See below
//     -App.js: line 42 this.clickRobot(robot); robot.name and robot.year don't use the declared "theRobot" above and
//     since they're using undeclared variables ('robot'), won't properly return the necessary information
//     -App.js: line 36 'years' array is declared yet never used and in line 44, I assume robot.year
//     was attempting to use years? despite the different syntax, strongly recommended to redo this entire 
//     section
//     -Inline Styling on line 41-43 & 57-64 would be much better if done using a StyleSheet
//     -App.js: line 62 flexGrow and flexShrink are default at 0 so this styling is redudant
//     -app.json of course, when the app is further along, adjustments to images and design in
//      icon and splash at lines 12 and 13-16 will be necessary. 
//     -app.json, furthemore, 'versionCode' will also be required for the app store and perhaps
//      'permissions' depending on what the app uses (camera, recording audio, reading contacts, etc.)
