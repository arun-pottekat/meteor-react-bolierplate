import {GridFSStore} from 'meteor/jalik:ufs-gridfs';

const Photos = new Mongo.Collection('photos');

const PhotoStore = new GridFSStore({
	collection: Photos,
	name: 'photos',
	chunkSize: 1024 * 255,
	permissions: new UploadFS.StorePermissions({
        insert(userId, file) {
            return true
        },
        remove(userId, file) {
            return true
        },
        update(userId, file) {
            return true
        },
    }),
});

Photos.allow({
	insert: function(userId, doc) {
		return true;
	},
	update: function(userId, doc, fieldNames, modifier) {
		return true;
	},
	remove: function(userId,doc) {
		return true;
	},
});

export {Photos}