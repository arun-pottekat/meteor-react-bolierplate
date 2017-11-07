import {Resolutions} from '../../collections/resolutions.js'

Meteor.publish("allResolutions", function(){
	return Resolutions.find()
})