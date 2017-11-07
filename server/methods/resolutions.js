import {Resolutions} from '../../collections/resolutions.js'

Meteor.methods({
	"addResolution": function(resolution, description, imageObj) {
		if (imageObj) {
			if (imageObj.length > 0) {
				resolutionObject = {
					resolution: resolution,
					description: description,
					image: imageObj
				}
			}
			else{
				resolutionObject = {
					resolution: resolution,
					description: description,
				}
			}
		}
		else{
			resolutionObject = {
				resolution: resolution,
				description: description,
			}
		}

		return Resolutions.insert(resolutionObject)
	}
})