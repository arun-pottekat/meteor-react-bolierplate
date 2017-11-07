import SimpleSchema from 'simpl-schema';

const Resolutions = new Mongo.Collection('resolutions')

const Resolution = {
	resolution: {
		type: String,
		label: "Resolution",
		optional: false
	},
	description: {
		type: String,
		label: "Description",
		optional: false
	},
	image:{
        type: Array,
        optional: true,
        label: "Upload Image"
    },
    "image.$": {
    	type: Object,
    },
    "image.$.id":{
        type:String,
    },
    "image.$.name":{
        type:String,
    },
}

const ResolutionSchema = new SimpleSchema(Resolution);
Resolutions.attachSchema(ResolutionSchema);

export {Resolutions, ResolutionSchema}